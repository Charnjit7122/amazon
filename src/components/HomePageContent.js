import Banner from "./Banner";
import ProductContainer from "./ProductContainer";

export default function HomePageContent({ products }) {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* banner */}
      <Banner />

      {/* products */}

      <ProductContainer products={products} />
    </div>
  );
}
