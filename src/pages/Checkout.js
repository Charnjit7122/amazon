import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, totalCartPrice } from "./../slices/cartSlice";
import CheckoutProduct from "./../components/CheckoutProduct";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";
import { useSession, signOut, signIn } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export default function Checkout() {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(totalCartPrice);
  const stripePromise = loadStripe(`${process.env.stripe_public_key}`);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    //call backend to create checkout session.......
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });
    //Redirect to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <UserSideTheme>
      <div className="bg-gray-100">
        <div className="flex flex-wrap-reverse md:flex-nowrap max-w-screen-2xl mx-auto">
          {/* left */}
          <div className="flex-grow m-2 md:m-5 shadow-sm">
            <Image
              src="https://links.papareact.com/ikj"
              alt=""
              width={1020}
              height={250}
            />
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <p className="text-3xl border-b p-4">
                {!items ? "Your Cart Is Empty." : "Your Cart"}
              </p>

              {items.map((item, index) => (
                <CheckoutProduct key={index} item={item} />
              ))}
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col flex-shrink flex-grow bg-white p-10 shadow-md">
            {items.length > 0 && (
              <>
                <h2 className="whitespace-nowrap">
                  Subtotal {items.length} Items:{" "}
                  <span className="font-bold">({total}.00)</span>
                </h2>
                <button
                  role="link"
                  onClick={createCheckoutSession}
                  disabled={!session}
                  className={`amazon_button mt-2 ${
                    !session &&
                    "from-gray-500 to-gray-500 border-gray-200 text-white cursor-not-allowed "
                  }`}
                >
                  {!session ? "Sign In to Checkout" : "Proceed To Checkout"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </UserSideTheme>
  );
}
