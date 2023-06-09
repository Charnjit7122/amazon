import Banner from "@/components/Banner";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";
import ProductFeed from "@/components/ProductFeed";
export default function Home(products) {
  return (
    <UserSideTheme products={products}>
      <Banner />
      {/* <ProductFeed products={products} /> */}
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
// export async function getServerSideProps(context){
//   const products = await await fetch("https://fakestoreapi.com/products").then(
//     (res)=>res.json()
//   );

//   return{props:{
//     products,
//   },
// };
// }