import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BannerStyle.css";
import { Autoplay, Pagination } from "swiper";
import bag from "../../Assets/images/banner/bag.jpg";
import watch from "../../Assets/images/banner/watch.jpg";
import shoes from "../../Assets/images/banner/shoes.jpg";
import headphone from "../../Assets/images/banner/headphone.jpg";
import discount from "../../Assets/images/banner/discount-3.png";
import discount2 from "../../Assets/images/banner/discount-1.png";
import tv from "../../Assets/images/banner/tv.png";
import headset from "../../Assets/images/banner/headset.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-4 px-5 gap-3 h-screen">
      <div className="">
        <div className="card w-auto bg-emerald-50 shadow-xl mb-3">
          <img src={bag} alt="bag" />
        </div>
        <div className="card w-auto bg-orange-50 shadow-xl">
          <img src={watch} alt="watch" />
        </div>
      </div>
      <div className="col-span-2">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="rounded-2xl" src={discount} alt="" />
            </SwiperSlide>
            <SwiperSlide className="pl-5">
              <div className="">
                <div className="w-2/3 mx-auto pb-5">
                  <img src={tv} alt="" />
                </div>
                <div>
                  <div className="">
                    <h1 className="text-5xl font-bold">
                      Mega LCD TV For Sports
                    </h1>
                    <p>
                      This is the best tv in the world for people who just want
                      to waste time in front of tv.
                    </p>
                    <h1 class="text-pink-500">$1200</h1>
                    <div class="btn bg-[#FF4E16]">Buy Now</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-2xl" src={discount2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="pl-5">
              <div>
                <div className="w-2/3 mx-auto pb-5">
                  <img src={headset} alt="" />
                </div>
                <div>
                  <div className="text-justify">
                    <h1 className="text-5xl font-bold">
                      Kotion Gaming Headset
                    </h1>
                    <p>
                      This is the best tv in the world for people who just want
                      to waste time in front of tv.
                    </p>
                    <h1 class="text-pink-500">$1200</h1>
                    <div class="btn bg-[#FF4E16]">Buy Now</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div className="">
        <div className="card w-auto bg-lime-50 shadow-xl mb-3">
          <img src={headphone} alt="headphone" />
        </div>
        <div className="card w-auto bg-sky-50 shadow-xl">
          <img src={shoes} alt="shoes" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
