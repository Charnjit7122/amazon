import UserSideTheme from "@/themes/usertheme/UserSideTheme";
export default function Home(products) {
  return (
    <UserSideTheme>
      <div>dsa</div>
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
