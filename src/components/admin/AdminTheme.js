import Head from "next/head";
import React from "react";
import AdminHeader from "./Header";
import AdminSideBar from "./SideBar";
export default function AdminTheme(props) {
  return (
    <div className="w-full h-full bg-gray-200">
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <AdminHeader />
      <div className="flex flex-col md:flex-row">
        <div className="fixed bottom-0 md:relative md:min-h-screen md:h-auto w-full md:max-w-[200px] content-center">
          <AdminSideBar />
        </div>

        <div className="pb-20 md:pb-0 p-2 w-full h-full">{props.children}</div>
      </div>
    </div>
  );
}
