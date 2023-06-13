import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";
import Head from "next/head";
import React from "react";

export default function UserSideTheme({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header/>
      <Banner />
        <ProductFeed products={products} />

      <div className="min-h-screen">{products.children}</div>
      <Footer />
    </div>
  );
}