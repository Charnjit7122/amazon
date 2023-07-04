import { useRouter } from "next/router";
import { HiStar } from "react-icons/hi";
import Currency from "react-currency-formatter";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

function SingleProductPage({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <UserSideTheme>
      <div className="container mx-auto my-10 px-4">
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
