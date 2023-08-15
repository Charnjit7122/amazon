import { useRouter } from "next/dist/client/router";
import { HiStar } from "react-icons/hi";
import { useSession, signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

export default function SingleProduct({ product }) {
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        image: product.image,
        title: product.title,
        category: product.category,
        price: product.price,
        ratings: { rating: product.ratings.rating },
        description: product.description,
      })
    );
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-xl rounded">
      <p
        onClick={() => router.push(`/Category/${product.category}`)}
        className="absolute top-2 right-2 text-xs italic text-gray-400 cursor-pointer"
      >
        {product.category}
      </p>

      <div onClick={() => router.push(`/Product/${product._id}`)}>
        <img
          className="object-contain w-full max-h-52 cursor-pointer"
          alt=""
          src={product.image}
        />
        <div>
          <h4 className="my-3 hover:cursor-pointer hover:underline line-clamp-3">
            {product.title}
          </h4>
        </div>
      </div>
      <div className="flex ">
        {Array(Math.round(product.ratings.rating))
          .fill()
          .map((_, i) => (
            <HiStar key={i} className="h-5 w-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{product.description}</p>
      <div className="mb-5">{product.price}</div>
      {product.prime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Delivery</p>
        </div>
      )}
      <button
        onClick={session ? addProductToCart : signIn}
        className="mt-auto amazon_button"
      >
        Add to cart
      </button>
    </div>
  );
}
