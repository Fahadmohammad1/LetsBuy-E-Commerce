import React from "react";
import { Counter } from "../../features/counter/Counter";
import Banner from "./Banner";
import DiscountBanner from "./DiscountBanner";
import Gallery from "./Gallery";
import ItemHome from "./ItemHome";
import NewProducts from "./NewProducts";
import Shop from "./Shop";
import Shops from "./Shops";

const Home = () => {
  return (
    <div>
      <Banner />
      <DiscountBanner />
      <NewProducts />
      <ItemHome />
      <Shop />
      <Gallery />
      <Counter />
    </div>
  );
};

export default Home;
