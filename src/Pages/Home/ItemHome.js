import React from "react";
import Slider from "react-slick";

const ItemHome = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="container mx-auto">
      <h2 className="mt-10 font-bold text-3xl text-gray-800 inline-block border-b-2 border-[#FF4E16] pb-1">
        Categories
      </h2>
      <hr className="mb-10" />
      <Slider {...settings}>
        <div className="text-center rounded-full">
          <img
            src="https://www.pngall.com/wp-content/uploads/4/Mixer-Grinder-PNG-File.png"
            alt=""
            className="mx-auto w-40 "
          />
          <span className="font-bold py-3 pl-3">Fashion</span>
        </div>
        <div className="text-center rounded-full">
          <img
            src="https://freepngimg.com/thumb/makeup/27615-5-makeup-photos.png"
            alt=""
            className="mx-auto w-36"
          />
          <span className="font-bold py-3">Beauty</span>
        </div>
        <div className="text-center rounded-full">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-36"
          />
          <span className="font-bold py-3">Electronics</span>
        </div>
        <div className="text-center rounded-full">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-36"
          />
          <span className="font-bold py-3">Groceries</span>
        </div>
        <div className="text-center rounded-full">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-36"
          />
          <span className="font-bold py-3">Sports</span>
        </div>
        <div className="text-center rounded-full">
          <img
            src="https://www.freeiconspng.com/thumbs/car-png/audi-jeep-q3-car-png-7.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Vehicles</span>
        </div>
        <div className="text-center rounded-full">
          <img
            src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png"
            alt=""
            className="mx-auto w-32"
          />
          <span className="font-bold py-3">Smartphone</span>
        </div>
      </Slider>
    </div>
  );
};

export default ItemHome;
