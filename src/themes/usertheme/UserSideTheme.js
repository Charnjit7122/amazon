import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Head from "next/head";
import React from "react";

export default function UserSideTheme(props) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />

      <div className="min-h-screen">{props.children}</div>
      <Footer />
    </div>
  );
}
