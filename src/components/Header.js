import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart, HiX } from "react-icons/hi";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { selectItems } from "./../slices/cartSlice";
import { useState, useEffect } from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(`/api/category`);
      const responseData = await response.json();
      setCategories(responseData);
    };
    console.log(categories);
    fetchCategory();
  }, []);

  const onInputeChange = (event) => {
    event.preventDefault();
    setKeyword(event.target.value.toLowerCase());
  };

  const SearchProducts = products.filter(
    (item) =>
      item.title.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword)
  );

  return (
    <>
      {/* Side bar */}
      <div
        className={`${
          active ? "" : "hidden"
        } fixed z-50 flex w-full h-full bg-black bg-opacity-70`}
      >
        <Slide left>
          <div className="overflow-y-scroll scrollbar-hide bg-white w-full md:w-[365px] h-full">
            <div
              onClick={() => (!session ? () => signIn() : "")}
              className="bg-[#232f3e] flex items-center text-white text-xl font-bold space-x-2 capitalize py-2 px-7 sticky top-0 cursor-pointer"
            >
              {session ? (
                <img
                  src={session.user.image}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <FaUserCircle className="w-8 h-8" />
              )}
              <p>
                {session ? `Hello, ${session.user.name}` : "Hello, Sign In"}
              </p>
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
                {categories.map((category, index) => (
                  <p
                    key={index}
                    className="sidebar_sub_items"
                    onClick={() => router.push(`/Category/${category.name}`)}
                  >
                    {category.name}
                  </p>
                ))}
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
                <p
                  onClick={() =>
                    !session ? router.push("/auth/signin") : router.push("/me")
                  }
                  className="sidebar_sub_items"
                >
                  Your Account
                </p>
                <p className="sidebar_sub_items">Customer Service</p>
                <p
                  onClick={() =>
                    !session ? router.push("/auth/signin") : signOut()
                  }
                  className="sidebar_sub_items"
                >
                  {!session ? "Sign In" : "Logout"}
                </p>
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
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

          {/* search */}
          <div className="relative hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
            <input
              onChange={onInputeChange}
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
              placeholder="Search Products by Title OR Category "
              type="text"
            />
            <FaSearch className="px-4 w-12 h-12" />
            {keyword.length > 0 ? (
              <div className="absolute top-[41px] w-full flex-grow bg-white p-2 max-h-64 overflow-y-scroll scrollbar-hide">
                {SearchProducts.length > 0 ? (
                  <>
                    {SearchProducts.map((item) => (
                      <Link href={`Product/${item.id}`} key={item.id}>
                        <div className="border-gray-200 border-b hover:bg-gray-200">
                          <div className="p-2 flex justify-between items-center">
                            <p className="font-semibold w-10/12  line-clamp-1">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-400 italic">
                              {item.category}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </>
                ) : (
                  <p className="font-semibold">No Results</p>
                )}
              </div>
            ) : (
              ""
            )}
          </div>

          {/* right */}
          <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div className="link group hidden md:inline-block">
              <p className="capitalize">
                {session ? `Hello, ${session.user.name}` : "Hello, Sign In"}
              </p>

              <p className="font-extrabold md:text-sm">Account & Lists</p>
              {/* Hover Menu */}

              <div className="absolute hidden group-hover:block right-5 shadow-2xl">
                <div className="overflow-hidden w-full flex justify-center">
                  <div className=" h-3 w-3 bg-white rotate-45 transform origin-bottom-left"></div>
                </div>
                <div className="w-full bg-white text-black rounded-md py-5 px-10">
                  {session ? (
                    ""
                  ) : (
                    <button
                      className="amazon_button flex justify-center px-10 mx-auto"
                      onClick={() => signIn()}
                    >
                      Sign In
                    </button>
                  )}
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
                      <h3
                        onClick={() =>
                          !session
                            ? router.push("/auth/signin")
                            : router.push("/me")
                        }
                        className="font-bold text-lg mb-2.5 border-gray-300 border-b"
                      >
                        Your Account
                      </h3>
                      <div className="text-sm flex flex-col gap-y-1">
                        <p
                          onClick={() =>
                            !session
                              ? router.push("/auth/signin")
                              : router.push("/me")
                          }
                          className="hover:underline hover:text-yellow-500"
                        >
                          Your Account{" "}
                        </p>
                        <p
                          className="hover:underline hover:text-yellow-500"
                          onClick={() => router.push("/orders")}
                        >
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
                        {session ? (
                          <p
                            onClick={signOut}
                            className="hover:underline hover:text-yellow-500 border-t border-gray-300 mt-4 pt-1"
                          >
                            SignOut
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="link" onClick={() => router.push("/orders")}>
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& orders</p>
            </div>
            <div
              onClick={() => router.push("/Checkout")}
              className="link relative flex items-center cursor-pointer"
            >
              <span className="absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
                {items.length}
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
