import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";

export default function Home({ products }) {
  console.log(products);
  return (
    <UserSideTheme>
      <Banner />
      <ProductFeed products={products} />
    </UserSideTheme>
  );
}

export async function getServerSideProps() {
  const products = await await fetch(`${process.env.HOST}/api/products`).then(
    (res) => res.json()
  );
  return {
    props: { products },
  };
}
