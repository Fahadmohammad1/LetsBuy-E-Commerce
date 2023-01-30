import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import DiscountBanner from "./DiscountBanner";
import Gallery from "./Gallery";
import NewProducts from "./NewProducts";
import PopularProducts from "./PopularProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <DiscountBanner />
      <NewProducts />
      <Category />
      <PopularProducts />
      <Gallery />
    </div>
  );
};

export default Home;
