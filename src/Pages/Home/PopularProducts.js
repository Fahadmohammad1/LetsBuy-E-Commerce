import React, { useEffect, useState } from "react";
import PopularProduct from "./PopularProduct";

const PopularProducts = () => {
  return (
    <section className="container mx-auto my-10">
      <h2 className="font-bold text-3xl border-b-2 border-primary inline-block text-gray-800">
        Popular
      </h2>
      <hr />
      <div className="grid md:grid-cols-4 gap-4 px-5"></div>
    </section>
  );
};

export default PopularProducts;
