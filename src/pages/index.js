import Head from "next/head";
import Header from "../components/Header";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header/>
    </div>
  );
}

