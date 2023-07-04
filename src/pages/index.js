import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";
import UserSideTheme from "@/themes/usertheme/UserSideTheme";
import Register from "./Register";
import Signin from "./Signin";
import SingleProductPage from "./SingleProductPage";


export default function Home({ products }) {
  return (
    <UserSideTheme products={products}> </UserSideTheme> 
    // <Signin></Signin>
    //  <Register></Register>  
    // <SingleProductPage></SingleProductPage>
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
