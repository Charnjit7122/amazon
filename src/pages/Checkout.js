import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, totalCartPrice } from "./../slices/cartSlice";
import CheckoutProduct from "./../components/CheckoutProduct";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";

export default function Checkout() {

  const items = useSelector(selectItems);
  const total = useSelector(totalCartPrice);

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
              <h1 className="text-3xl border-b p-4">
                {items.length === 0 ? "Your Cart Is Empty." : "Your Cart"}
              </h1>

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
                <a
                  role="link"
                  className={"amazon_button mt-2" }
                  style={{textAlign:"center",cursor:"pointer"}}
                >
                  Proceed To Checkout
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </UserSideTheme>
  );
}
