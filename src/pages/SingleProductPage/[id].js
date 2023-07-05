import { useRouter } from "next/router";
import { HiStar } from "react-icons/hi";
import Currency from "react-currency-formatter";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

function SingleProductPage({ product }) {
  const rndInt = Math.floor(Math.random() * 10) + 1;
  let tomorrowdate = moment().add(1, "days").format("DD MMM YYYY");

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <div className="ml-1">
        {hours}h : {minutes}m : {seconds}s
      </div>
    );
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addToCart(product));
  };

  console.log(product);
  return (
    <UserSideTheme>
      {/* <div className="container mx-auto my-10 px-4">
        <button
          className="text-blue-500 hover:text-blue-700 underline mb-4"
          onClick={() => router.back()}
        >
          Back
        </button>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img
              className="object-contain w-full h-96"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <div className="flex items-center mb-4">
              {Array(Math.round(product.ratings.rating))
                .fill()
                .map((_, i) => (
                  <HiStar key={i} className="h-5 w-5 text-yellow-500" />
                ))}
            </div>
            <p className="text-sm text-gray-500 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">
              Price: <Currency quantity={product.price} currency="USD" />
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={addProductToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div> */}

      <div className="max-w-screen-2xl mx-auto">
        <div className="m-3">
          <p className="text-xs capitalize">
            {product.category}
            {` > `} {product.title}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap space-y-5 m-3">
          {/* Left */}
          <div>
            <img
              className="w-96 h-96 object-contain"
              src={product.image}
              alt=""
            />
          </div>

          {/* Middle */}
          <div className="max-w-2xl mx-5">
            {/* Title, Description and Rating */}
            <>
              <h3 className="font-bold text-xl">{product.title}</h3>
              <p className="my-3">
                <span className="font-bold">Description:</span>{" "}
                {product.description}
              </p>
              <div className="flex items-center">
                {Array(Math.round(product.ratings.rating))
                  .fill()
                  .map((_, i) => (
                    <HiStar key={i} className="h-5 w-5 text-yellow-500" />
                  ))}
                <p className="ml-3 text-blue-500">
                  | {product.ratings.count} <span>ratings</span>
                </p>
              </div>
            </>

            <div className="border-t border-gray-300 mt-3 pt-2 text-gray-600">
              {/* Fake Price */}
              <>
                <p className="text-sm">
                  M.R.P.:{" "}
                  <span className="line-through ml-1">
                    {" "}
                    ₹{(product.price * rndInt).toFixed(2)}
                  </span>
                </p>
              </>
              {/* Original Price and Timer */}
              <>
                <div className="text-sm">
                  Deal of the Day:{" "}
                  <span className="text-lg ml-1 text-[#B12704]">
                    {" "}
                    ₹{product.price}
                  </span>
                </div>
              </>

              {/* Percentage */}
              <>
                <div className="text-sm">
                  You Save:{" "}
                  <span className="ml-1 text-[#B12704]">
                    {" "}
                    ₹{(product.price * rndInt - product.price).toFixed(2)} (
                    {Math.round(
                      100 - (product.price / (product.price * rndInt)) * 100
                    )}
                    %) <span className="text-xs">(Inclusive of all taxes)</span>
                  </span>
                </div>
              </>

              {/* Delivery Section */}
              <>
                <div className="mt-5 border-t border-gray-300 text-sm">
                  <p className="mt-1">
                    Free Delivery :{" "}
                    <span className="font-semibold text-black">
                      Between ({moment().add(7, "days").format("ll")} -{" "}
                      {moment().add(10, "days").format("ll")})
                    </span>
                  </p>
                  <p className="mt-1">
                    Next Day Delivery :{" "}
                    <span className="font-semibold text-black">
                      {moment().add(1, "days").format("ll")}
                    </span>
                  </p>
                </div>
              </>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-grow justify-center items-start">
            <div>
              <button className="amazon_button" onClick={addProductToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserSideTheme>
  );
}

export default SingleProductPage;

export async function getServerSideProps({ params }) {
  const product = await fetch(
    `${process.env.HOST}/api/products/FindSingleProduct?id=${params.id}`
  ).then((res) => res.json());

  return {
    props: { product: product[0] },
  };
}
