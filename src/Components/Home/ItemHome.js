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
      <h2 className="my-5 font-bold text-2xl">Category</h2>
      <Slider {...settings}>
        <div className="">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Ladies Bag</span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Ladies Bag</span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Ladies Bag</span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Ladies Bag</span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Ladies Bag</span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Purse-PNG-Pic.png"
            alt=""
            className="mx-auto w-44"
          />
          <span className="font-bold py-3">Ladies Bag</span>
        </div>
      </Slider>
    </div>
  );
};

export default ItemHome;
