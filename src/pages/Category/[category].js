import MainTheme from "./../Theme/MainTheme";
import SingleProduct from "./../../components/SingleProduct";
import { useRouter } from "next/router";
import { connectToDatabase } from "../../lib/mongodb/mongodbconnection";

export default function Category({ products }) {
  const router = useRouter();
  return (
    <MainTheme>
      <div className="max-w-screen-2xl mx-auto">
        <div className="m-3">
          <p className="text-xs capitalize ml-3">
            Category
            {` > `} {router.query.category}
          </p>
        </div>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto min-h-screen">
          {products.map((product) => (
            <SingleProduct product={product} key={product._id} />
          ))}
        </div>
      </div>
    </MainTheme>
  );
}

export async function getServerSideProps({ query }) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("Products")
    .find({ category: query.category })
    .toArray();
  const products = JSON.parse(JSON.stringify(data));

  return {
    props: { products },
  };
}
