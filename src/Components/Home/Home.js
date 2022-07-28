import React from "react";
import { Counter } from "../../features/counter/Counter";
import Banner from "./Banner";
import DiscountBanner from "./DiscountBanner";
import Gallery from "./Gallery";
import ItemHome from "./ItemHome";
import Shop from "./Shop";
// import TestRedux from "./TestRedux";

const Home = () => {
  return (
    <div>
      <Banner />
      <Shop />
      <ItemHome />
      <DiscountBanner />
      <Gallery />
      <Counter />

      {/* <TestRedux /> */}
    </div>
  );
};

export default Home;
