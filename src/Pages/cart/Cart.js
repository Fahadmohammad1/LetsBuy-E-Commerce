import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard";

const Cart = () => {
  const products = useSelector((state) => state.product.cart);
  return (
    <section className="container mx-auto">
      <h3 className="my-10 text-xl font-bold uppercase text-center">
        Your added product is here
      </h3>
      <div className="md:grid grid-cols-3 gap-5">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Cart;
