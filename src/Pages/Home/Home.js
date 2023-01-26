import React from "react";

import Banner from "./Banner";
import DiscountBanner from "./DiscountBanner";
import Gallery from "./Gallery";
import ItemHome from "./ItemHome";
import NewProducts from "./NewProducts";
import Shop from "./Shop";

const Home = () => {
  return (
    <div>
      <Banner />
      <DiscountBanner />
      <NewProducts />
      <ItemHome />
      <Shop />
      <Gallery />
    </div>
  );
};

export default Home;
