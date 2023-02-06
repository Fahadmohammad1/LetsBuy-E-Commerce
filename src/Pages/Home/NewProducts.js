import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadProductData from "../../redux/thunk/products/fetchProducts";
import Slider from "react-slick";
import ProductCard from "../../Components/ProductCard";

const NewProducts = () => {
  const products = useSelector((state) => state?.product?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductData());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="container mx-auto">
      <h2 className="font-bold text-3xl border-b-2 border-primary inline-block text-gray-800 mt-10">
        New Product
      </h2>
      <hr className="mb-10" />
      <Slider {...settings}>
        {products?.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </Slider>
    </section>
  );
};

export default NewProducts;
