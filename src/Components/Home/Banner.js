import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BannerStyle.css";
import { Autoplay, Pagination } from "swiper";
import image1 from "../../Assets/images/headphone.png";
import image2 from "../../Assets/images/xbox.png";
import image3 from "../../Assets/images/tv.png";
import bag from "../../Assets/images/banner/bag.jpg";
import watch from "../../Assets/images/banner/watch.jpg";
import shoes from "../../Assets/images/banner/shoes.jpg";
import headphone from "../../Assets/images/banner/headphone.jpg";

const Banner = () => {
  return (
    <div className="grid grid-cols-4 gap-3 px-5 h-screen ">
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
              <div>
                <div className="text-left">
                  <h1 className="text-5xl font-bold">Mega LCD TV For Sports</h1>
                  <p>
                    This is the best tv in the world for people who just want to
                    waste time in front of tv.
                  </p>
                  <h1 class="">$1200</h1>
                  <div class="btn bg-[#FF4E16]">Buy Now</div>
                </div>
              </div>
              <div className="w-1/2">
                <img className="py-10" src={image1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="text-left">
                  <h1 className="text-5xl font-bold">Mega LCD TV For Sports</h1>
                  <p>
                    This is the best tv in the world for people who just want to
                    waste time in front of tv.
                  </p>
                  <h1 class="">$1200</h1>
                  <div class="btn bg-[#FF4E16]">Buy Now</div>
                </div>
              </div>
              <div className="w-1/2">
                <img src={image2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="text-left">
                  <h1 className="text-5xl font-bold">Mega LCD TV For Sports</h1>
                  <p>
                    This is the best tv in the world for people who just want to
                    waste time in front of tv.
                  </p>
                  <h1 class="">$1200</h1>
                  <div class="btn bg-[#FF4E16]">Buy Now</div>
                </div>
              </div>
              <div className="w-1/2">
                <img src={image3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="text-left">
                  <h1 className="text-5xl font-bold">Mega LCD TV For Sports</h1>
                  <p>
                    This is the best tv in the world for people who just want to
                    waste time in front of tv.
                  </p>
                  <h1 class="">$1200</h1>
                  <div class="btn bg-[#FF4E16]">Buy Now</div>
                </div>
              </div>
              <div className="w-1/2">
                <img src={image1} alt="" />
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
