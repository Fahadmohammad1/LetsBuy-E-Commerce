import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard";
import auth from "../../firebase/firebase.init";
import fetchCartData from "../../redux/thunk/products/fetchCartData";
import Loading from "../../Shared/Loading";

const Cart = () => {
  const products = useSelector((state) => state.product.cart);
  console.log(products);
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    dispatch(fetchCartData(user?.email));
  }, [user?.email, dispatch]);

  if (loading) {
    <Loading />;
  }
  return (
    <section className="container mx-auto mt-24">
      {user && (
        <div>
          <div className="md:grid grid-cols-3 gap-10">
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
