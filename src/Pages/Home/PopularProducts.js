import React, { useEffect, useState } from "react";
import PopularProduct from "./PopularProduct";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("shopItem.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [setProducts]);

  console.log(products);
  return (
    <section className="container mx-auto my-10">
      <h2 className="font-bold text-3xl border-b-2 border-[#FF4E16] inline-block text-gray-800">
        Popular
      </h2>
      <hr />
      <div className="grid md:grid-cols-4 gap-4 px-5">
        {products?.map((product) => (
          <PopularProduct key={product.id} product={product}></PopularProduct>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
