import MainTheme from "./Theme/MainTheme";
import HomePageContent from "./../components/HomePageContent";

export default function Home({ products }) {
  return (
    <MainTheme>
      <HomePageContent products={products} />
    </MainTheme>
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
