import { HiStar } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../slices/cartSlice";

export default function CheckoutProduct({ item }) {
  const dispatch = useDispatch();

  const removeProductFromCart = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const IncreaseProductQuantity = () => {
    dispatch(incrementQuantity({ id: item.id }));
  };

  const DecreaseProductQuantity = () => {
    dispatch(decrementQuantity({ id: item.id }));
  };

  return (
    <div className="flex flex-wrap items-center gap-4 justify-center border-gray-200 border-b pb-3">
      <img
        className="object-contain w-52 h-52 cursor-pointer"
        alt=""
        src={item.image}
      />
      {/* middle */}
      <div className="flex flex-col max-w-xl mx-5">
        <p className="text-sm md:text-base">{item.title}</p>
        <div className="flex">
          {/* {Array(Math.round(item.ratings.rating))
            .fill()
            .map((_, i) => (
              <HiStar key={i} className="h-5 w-5 text-yellow-500" />
            ))} */}
        </div>
        <p className="text-xs my-2 line-clamp-3">{item.description}</p>
        <p className="text-sm">
          Price: <span className="font-semibold">{item.price} </span>
        </p>
        <p className="text-sm">
          Quantity: <span className="font-semibold">{item.quantity}</span>
        </p>
        {item.prime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Delivery</p>
          </div>
        )}
      </div>
      {/* buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <div className="flex items-center justify-between">
          <button className="amazon_button" onClick={DecreaseProductQuantity}>
            -
          </button>
          <p className="font-semibold">{item.quantity}</p>
          <button className="amazon_button" onClick={IncreaseProductQuantity}>
            +
          </button>
        </div>
        <button className="amazon_button" onClick={removeProductFromCart}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
}
