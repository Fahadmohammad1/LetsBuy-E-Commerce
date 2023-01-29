import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import DiscountBanner from "./DiscountBanner";
import Gallery from "./Gallery";
import NewProducts from "./NewProducts";
import PopularProducts from "./PopularProducts";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user, loading, error);
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
