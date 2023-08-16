import { useRouter } from "next/router";
import { HiStar } from "react-icons/hi";
import Countdown from "react-countdown";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import MainTheme from "../Theme/MainTheme";

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

  return (
    <MainTheme>
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
                  <div className="my-1 flex">
                    Ends in:
                    <Countdown
                      date={Date.parse(tomorrowdate)}
                      renderer={renderer}
                    />
                  </div>
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
    </MainTheme>
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
