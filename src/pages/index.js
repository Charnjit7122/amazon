import Banner from "@/components/Banner";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";
export default function Home(products) {
  return (
    <UserSideTheme>
      <Banner />
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
