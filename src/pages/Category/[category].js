import { useRouter } from "next/router";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";
import clientPromise from "@/utils/db";
import Product from "@/components/Product";

export default function Category({ products }) {
  const router = useRouter();
  return (
    <UserSideTheme>
      <div className="max-w-screen-2xl mx-auto">
        <div className="m-3">
          <p className="text-xs capitalize ml-3">
            Category
            {` > `} {router.query.category}
          </p>
        </div>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto min-h-screen">
          {products.map((product) => (
            <Product
              key={product._id}
              id={product._id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
              rating={product.ratings.rating}
            />
          ))}
        </div>
      </div>
    </UserSideTheme>
  );
}

export async function getServerSideProps({ query }) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection("Products");

  const data = await collection.find({ category: query.category }).toArray();

  const products = JSON.parse(JSON.stringify(data));

  return {
    props: { products },
  };
}
