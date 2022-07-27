import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BannerStyle.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import image1 from "../../images/sale.jpg";

const Banner = () => {
  return (
    <div className="container ml-auto">
      <div class="">
        <>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex">
                <img src={image1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <img src={image1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <img src={image1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <img src={image1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <img src={image1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <img src={image1} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Banner;
