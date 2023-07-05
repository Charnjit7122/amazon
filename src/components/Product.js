import { HiStar } from "react-icons/hi";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

function Product({ id, title, price, description, category, image, rating }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(
      addToCart({
        id: id,
        image: image,
        title: title,
        category: category,
        price: price,
        ratings: rating,
        description: description,
      })
    );
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-2xl rounded">
      <p
        onClick={() => router.push(`/Category/${category}`)}
        className="absolute top-2 right-2 hover:underline text-xs italic text-gray-400 cursor-pointer"
      >
        {category}
      </p>

      <div onClick={() => router.push(`/SingleProductPage/${id}`)}>
        <img
          className="object-contain w-full max-h-52 cursor-pointer"
          alt=""
          src={image}
        />
        <div>
          <h4 className="my-3 hover:cursor-pointer hover:underline line-clamp-3">
            {title}
          </h4>
        </div>
      </div>
      <div className="flex ">
        {Array(Math.round(rating))
          .fill()
          .map((_, i) => (
            <HiStar key={i} className="h-5 w-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">Price: ${price}</div>

      <button className="mt-auto amazon_button" onClick={addProductToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
