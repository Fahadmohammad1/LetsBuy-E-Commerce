import React from "react";
import Slider from "react-slick";

const ItemHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    marginTop: "40px",
  };
  return (
    <div className="container mx-auto">
      <h2 className="mt-10 font-bold text-3xl text-gray-800 inline-block border-b-2 border-[#FF4E16]">
        Categories
      </h2>
      <hr className="mb-10" />
      <Slider {...settings}>
        <div className="">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3 pl-3">Fashion</span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Beauty</span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Electronics</span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Groceries</span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Sports</span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Vehicles</span>
        </div>
      </Slider>
    </div>
  );
};

export default ItemHome;
