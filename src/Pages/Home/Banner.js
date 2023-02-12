import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./BannerStyle.css";
import bag from "../../Assets/images/banner/bag.jpg";
import watch from "../../Assets/images/banner/watch.jpg";
import shoes from "../../Assets/images/banner/shoes.jpg";
import headphone from "../../Assets/images/banner/headphone.jpg";
import banner1 from "../../Assets/images/banner/banner1.jpg";
import banner2 from "../../Assets/images/banner/banner2.jpg";
import banner3 from "../../Assets/images/banner/banner3.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="w-full">
        <img className="w-full h-screen" src={banner2} alt="" />
      </div>
      <div className="md:grid grid-cols-4 gap-5 container mx-auto md:-mt-24">
        <div className="card w-auto shadow-xl">
          <img src={headphone} alt="headphone" />
        </div>
        <div className="card w-auto shadow-xl">
          <img src={shoes} alt="shoes" />
        </div>

        <div className="card w-auto shadow-xl">
          <img src={bag} alt="bag" />
        </div>
        <div className="card w-auto shadow-xl">
          <img src={watch} alt="watch" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
