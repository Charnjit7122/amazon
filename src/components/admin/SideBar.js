import { useRouter } from "next/router";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdPayment, MdCategory } from "react-icons/md";

export default function AdminSideBar() {
  const router = useRouter();
  return (
    <div className="flex items-center md:flex-col md:w-auto h-full md:space-y-2 md:divide-y divide-yellow-300/50 justify-around md:justify-start md:pt-5 w-full bg-[#131921] p-1 text-white md:px-3">
      <div className="adminsidebarlink" onClick={() => router.push("/admin")}>
        <AiFillHome className="w-6 h-6" />
        <p className=" font-semibold">Home</p>
      </div>
      <div
        className="adminsidebarlink"
        onClick={() => router.push("/admin/products")}
      >
        <MdCategory className="w-6 h-6" />
        <p className=" font-semibold">Products</p>
      </div>
    </div>
  );
}
