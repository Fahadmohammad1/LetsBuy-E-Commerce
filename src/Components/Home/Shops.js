import React, { useEffect, useState } from "react";
import Shop from "./Shop";

const Shops = () => {
  const { products, setProducts } = useState([]);

  useEffect(() => {
    fetch("shopitem.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="container mx-auto my-10">
      <h2 className="font-bold ml-2 text-3xl text-gray-800 mb-7">Popular</h2>
      <div className="grid md:grid-cols-4 gap-4 px-5">
        {products.map((product) => (
          <Shop key={product.id} product={product}></Shop>
        ))}
      </div>
    </section>
  );
};

export default Shops;
