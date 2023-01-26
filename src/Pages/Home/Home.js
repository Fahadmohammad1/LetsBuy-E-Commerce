import React from "react";
import Banner from "./Banner";
import DiscountBanner from "./DiscountBanner";
import Gallery from "./Gallery";
import ItemHome from "./ItemHome";
import NewProducts from "./NewProducts";
import PopularProducts from "./PopularProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <DiscountBanner />
      <NewProducts />
      <ItemHome />
      <PopularProducts />
      <Gallery />
    </div>
  );
};

export default Home;
