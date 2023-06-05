import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";


const MAX_RATING=5;
const MIN_RATING=1;



function Product({id,title,price,description,category,image}){
    const [ hasPrime]=useState(Math.random()<0.5)
    return(
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-xl rounded">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400 cursor-pointer">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain"/>
            <h4 className="my-3">{title}</h4>
            <p className="text-xs my-2  line-clamp-2">{description}</p>

           <div className="mb-5 ">

               
           </div>

           <button className="mt-auto button">Add TO CArt</button>

        </div>
    )
}

export default Product;