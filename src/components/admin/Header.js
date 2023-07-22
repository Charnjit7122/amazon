import React from "react";
import Image from "next/image";

export default function AdminHeader() {
  return (
    <div>
      <div className="sticky top-0">
        <div className="flex items-center bg-[#131921] p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
              src="/AmazonWhite.png"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

          {/* search */}
          <div className="hidden sm:flex h-10 flex-grow  "></div>

          {/* right */}
          <div className="text-white flex items-center  space-x-6 mx-6 whitespace-nowrap">
            Admin
          </div>
        </div>
      </div>
    </div>
  );
}
