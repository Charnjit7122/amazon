import { HiBadgeCheck } from "react-icons/hi";
import { useSession } from "next-auth/react";
import MainTheme from "./Theme/MainTheme";
import { useRouter } from "next/dist/client/router";

function Success() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <MainTheme>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <p className="my-5">
            Hey,{" "}
            <span className="font-semibold capitalize underline">
              {session ? `${session.user.name}` : "Anonymous"}
            </span>
          </p>
          <div className="flex items-center space-x-2 mb-5">
            <HiBadgeCheck className="text-green-500 h-10 w-10 animate-pulse" />
            <h1 className="text-3xl">Thank You, your order has been placed.</h1>
          </div>
          <p>
            Please check your email for order confirmation and detailed delivery
            information or visit Message Center to review your notifications.
            <br />
            <span className="font-bold">*New!</span> Get shipment notifications
            on your mobile device with the free Amazon app.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="amazon_button mt-8"
          >
            Go to My Orders
          </button>
        </div>
      </div>
    </MainTheme>
  );
}

export default Success;
