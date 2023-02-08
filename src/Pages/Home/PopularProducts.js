import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard";

const PopularProducts = () => {
  const products = useSelector((state) => state?.product?.products);
  return (
    <section className="container mx-auto my-10">
      <h2 className="font-bold text-3xl border-b-2 border-primary inline-block text-gray-800">
        Popular
      </h2>
      <hr className="mb-10" />
      <div className="grid md:grid-cols-5 gap-5">
        {products?.slice(0, 5).map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
