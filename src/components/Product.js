import Image from "next/image";
import { useState } from "react";
import { HiStar } from "react-icons/hi";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [hasPrime] = useState(Math.random() < 0.5);
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-xl rounded">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 cursor-pointer">
        {category}
      </p>
      <div className="flex justify-center items-center">
          <Image className="items-center" src={image} height={200} width={200}  objectFit="contain" />
      </div>
      
      <h4 className="my-3">{title}</h4>
      <div className="flex">
         {Array(rating)
          .fill()
          .map((_, i) => (
            <HiStar key={i} className="h-5 w-5 text-yellow-500" />
          ))} 
      </div>

      <p className="text-xs my-2  line-clamp-2">{description}</p>

      <div className="mb-5 ">
        <Currency quantity={price} />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="/AmazonWhite.png" alt="amazon-prime" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button link">Add TO CArt</button>
    </div>
  );
}

export default Product;
