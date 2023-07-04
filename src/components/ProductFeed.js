import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:-mt-20 md:-mt-43 xl:-mt-80 mx-auto">
      {products.map(
        ({ _id, title, price, description, category, image, ratings }) => (
          <Product
            key={_id}
            id={_id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={ratings.rating}
          />
        )
      )}
    </div>
  );
}

export default ProductFeed;
