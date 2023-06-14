import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HiStar } from "react-icons/hi";
import Currency from "react-currency-formatter";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";

function SingleProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, price, description, image } = product;
  const rating = Math.floor(Math.random() * 5) + 1;

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
              src={image}
              alt={title}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="flex items-center mb-4">
              {Array(rating)
                .fill()
                .map((_, index) => (
                  <HiStar key={index} className="text-yellow-500" />
                ))}
            </div>
            <p className="text-sm text-gray-500 mb-4">{description}</p>
            <p className="text-lg font-bold mb-4">
              Price: <Currency quantity={price} currency="USD" />
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </UserSideTheme>
  );
}

export default SingleProductPage;
