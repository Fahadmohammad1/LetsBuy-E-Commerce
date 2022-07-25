import React from "react";
import Banner from "./Banner";
import DiscountBanner from "./DiscountBanner";
import Gallery from "./Gallery";
import ItemHome from "./ItemHome";

const Home = () => {
  return (
    <div>
      <Banner />
      <ItemHome />
      <DiscountBanner />
      <Gallery />
    </div>
  );
};

export default Home;
