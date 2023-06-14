import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";

export default function Home({ products }) {
  return (
    <UserSideTheme>
      <Banner />
      <ProductFeed products={products} />
    </UserSideTheme>
  );
}

export async function getServerSideProps() {
  const products = await await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: { products },
  };
}
