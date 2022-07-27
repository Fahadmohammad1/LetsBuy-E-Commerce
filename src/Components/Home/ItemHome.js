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
  };
  return (
    <div className="container ml-auto">
      <h2 className="my-10 font-bold text-2xl ml-2">Categories</h2>
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
