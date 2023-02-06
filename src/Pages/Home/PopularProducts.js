import React from "react";
import { useSelector } from "react-redux";
import ProductCardTwo from "../../Components/ProductCardTwo";

const PopularProducts = () => {
  const products = useSelector((state) => state?.product?.products);
  return (
    <section className="container mx-auto my-10">
      <h2 className="font-bold text-3xl border-b-2 border-primary inline-block text-gray-800">
        Popular
      </h2>
      <hr />
      <div className="grid md:grid-cols-4">
        {products.map((product) => (
          <ProductCardTwo key={product.key} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
