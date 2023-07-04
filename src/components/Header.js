import React from "react";
import Image from "next/image";
import { HiOutlineShoppingCart, HiX } from "react-icons/hi";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";

export default function Header() {

  const router = useRouter();
  
  const items = useSelector(selectItems);
  const [cartitemcount, seTCartItemCount] = useState()
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
 
useEffect(()=>{
  seTCartItemCount(items.length)
},[items])

  return (
    <>
      {/* Side bar */}
      <div
        className={`${active ? "" : "hidden"
          } fixed z-50 flex w-full h-full bg-black bg-opacity-70`}
      >
        <Slide left>
          <div className="overflow-y-scroll scrollbar-hide bg-white w-full md:w-[365px] h-full">
            <div className="bg-[#232f3e] flex items-center text-white text-xl font-bold space-x-2 capitalize py-2 px-7 sticky top-0 cursor-pointer">
              <FaUserCircle className="w-8 h-8" />

              <p>Hello, Sign In</p>
            </div>

            <div className="px-7 capitalize my-3 border-b border-gray-300 pb-5">
              <h3 className="text-lg font-bold text-gray-900 my-1.5">
                Trending
              </h3>{" "}
              <div className="text-gray-600 text-sm flex flex-col gap-2">
                <p className="sidebar_sub_items">Best Sellers</p>
                <p className="sidebar_sub_items">New Releases</p>
                <p className="sidebar_sub_items">Movers and Shakers</p>
              </div>
            </div>

            <div className="px-7 capitalize my-3 border-b border-gray-300 pb-5">
              <h3 className="text-lg font-bold text-gray-900 my-1.5">
                shop by department
              </h3>{" "}
              <div className="text-gray-600 text-sm flex flex-col gap-2">
                <p className="sidebar_sub_items">Baby &amp; Kids</p>
                <p className="sidebar_sub_items">Books</p>
                <p className="sidebar_sub_items">Electronics</p>
                <p className="sidebar_sub_items">Food Essentials</p>
                <p className="sidebar_sub_items">Gaming</p>
                <p className="sidebar_sub_items">Health &amp; Nutrition</p>
                <p className="sidebar_sub_items">Home &amp; Furniture</p>
                <p className="sidebar_sub_items">Men</p>
                <p className="sidebar_sub_items">Music</p>
                <p className="sidebar_sub_items">Sports</p>
              </div>
            </div>

            <div className="px-7 capitalize my-3 border-b border-gray-300 pb-5">
              <h3 className="text-lg font-bold text-gray-900 my-1.5">
                digital content and devices
              </h3>{" "}
              <div className="text-gray-600 text-sm flex flex-col gap-2">
                <p className="sidebar_sub_items">Echo & Alexa</p>
                <p className="sidebar_sub_items">Fire TV</p>
                <p className="sidebar_sub_items">Kindle E-Readers & eBooks</p>
                <p className="sidebar_sub_items">Audible Audiobooks</p>
                <p className="sidebar_sub_items">Amazon Prime Video</p>
                <p className="sidebar_sub_items">Amazon Prime Music</p>
              </div>
            </div>

            <div className="px-7 capitalize my-3 border-b border-gray-300 pb-5">
              <h3 className="text-lg font-bold text-gray-900 my-1.5">
                Programs & Features{" "}
              </h3>{" "}
              <div className="text-gray-600 text-sm flex flex-col gap-2">
                <p className="sidebar_sub_items">
                  Gift Cards & Mobile Recharges
                </p>
                <p className="sidebar_sub_items">Kindle E-Readers & eBooks</p>
                <p className="sidebar_sub_items">Flight Tickets</p>
                <p className="sidebar_sub_items">#FoundItOnAmazon</p>
              </div>
            </div>

            <div className="px-7 capitalize my-3 border-b border-gray-300 pb-5">
              <h3 className="text-lg font-bold text-gray-900 my-1.5">
                help & settings{" "}
              </h3>{" "}
              <div className="text-gray-600 text-sm flex flex-col gap-2">
                <p className="sidebar_sub_items">Your Account</p>
                <p className="sidebar_sub_items">Customer Service</p>
                <p className="sidebar_sub_items"> sign in or sign out</p>
              </div>
            </div>
          </div>
        </Slide>
        <div className="flex-grow text-white" onClick={handleClick}>
          <Fade>
            <HiX className="w-8 h-8 mt-3 cursor-pointer" />
          </Fade>
        </div>
      </div>

      {/* Top Bar */}
      <div className="sticky top-0 z-40">
        <div className="flex items-center bg-[#131921] p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
              onClick={() => router.push("/")}
              src="/AmazonWhite.png"
              width={120}
              height={35}
              objectFit="contain"
              className="cursor-pointer mx-5"
              alt="Amazon Logo"
            />
          </div>

          {/* search */}
          <div className="relative hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
              placeholder="Search Products by Title OR Category "
              type="text"
            />
            <FaSearch className="px-4 w-12 h-12" />
          </div>

          {/* right */}
          <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div className="link group md:inline-block">
              <p className="capitalize">Hello, Sign In</p>

              <p className="font-extrabold md:text-sm">Account & Lists</p>
              {/* Hover Menu */}

              <div className="absolute hidden group-hover:block right-5 shadow-2xl">
                <div className="overflow-hidden w-full flex justify-center">
                  <div className=" h-3 w-3 bg-white rotate-45 transform origin-bottom-left"></div>
                </div>
                <div className="w-full bg-white text-black rounded-md py-5 px-10">

                  <Link href="/Signin" className="w-40 text-center text-black mt-3 flex justify-center px-16 mx-auto py-2 overflow-hidden font-medium bg-yellow-400 rounded group">
                    Sign in
                  </Link>

                  <div className="mt-3 flex flex-wrap justify-around gap-x-5">
                    <div>
                      <h3 className="font-bold text-lg mb-2.5 border-gray-300 border-b">
                        Your Lists
                      </h3>
                      <div className="text-sm flex flex-col gap-y-1">
                        <p className="hover:underline hover:text-yellow-500">
                          Create a Wish List{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Wish from Any Website{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Baby Wish List{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Discover Your Style{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Explore Showroom
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2.5 border-gray-300 border-b">
                        Your Account
                      </h3>
                      <div className="text-sm flex flex-col gap-y-1">
                        <p className="hover:underline hover:text-yellow-500">
                          Your Account{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Your Orders{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Your Wish List{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Your Recommendations
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Your Prime Membership{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Your Prime Video{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Your Subscribe & Save
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Items Memberships & Subscriptions{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Your Gift Card Balance
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Your Amazon Business Account{" "}
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Your Seller Account Manage
                        </p>
                        <p className="hover:underline hover:text-yellow-500">
                          Your Content and Devices
                        </p>

                        <p>
                          <button className="mt-3 relative inline-flex items-center justify-start px-8 py-2 overflow-hidden bg-yellow-400 rounded group ">
                            <span className=" w-full text-center text-black">
                              Sign out
                            </span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="link">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& orders</p>
            </div>
            <div 
            onClick={() => router.push("/Checkout")}
            className="link relative flex items-center cursor-pointer">
              <span className="absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
                {cartitemcount}
              </span>
              <HiOutlineShoppingCart className="h-10 w-10" />
              <p className="font-extrabold md:text-sm hidden md:inline mt-2">
                Cart
              </p>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="flex items-center space-x-3 p-2 pl-6 text-white text-sm bg-[#232F3E]">
          <p className="link flex items-center" onClick={handleClick}>
            <FaBars className="h-6 mr-1" />
            All
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today&apos;s Deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Again</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Persoal Care</p>
        </div>
      </div>
    </>
  );
}
