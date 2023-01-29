import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import DiscountBanner from "./DiscountBanner";
import Gallery from "./Gallery";
import NewProducts from "./NewProducts";
import PopularProducts from "./PopularProducts";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import addUserToDB from "../../redux/thunk/user/saveUser";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user, loading, error);
  const dispatch = useDispatch();

  if (user) {
    const userInfo = {
      email: user?.email,
      name: user?.displayName,
    };

    // dispatch(addUserToDB(userInfo));
    console.log(userInfo);
  }

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
