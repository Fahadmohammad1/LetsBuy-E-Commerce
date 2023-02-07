import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => console.log(state));
  return <div></div>;
};

export default Cart;
