import React from "react";
import NewProduct from "./NewProduct";

const NewProducts = () => {
  return (
    <section className="container mx-auto">
      <h2 className="font-bold text-3xl border-b-2 border-[#FF4E16] inline-block text-gray-800">
        New Product
      </h2>
      <hr />
      <NewProduct />
    </section>
  );
};

export default NewProducts;
