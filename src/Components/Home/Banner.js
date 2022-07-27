import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BannerStyle.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import image1 from "../../images/headphone.png";
import image2 from "../../images/xbox.png";
import image3 from "../../images/tv.png";

const Banner = () => {
  return (
    <div className="container ml-auto">
      <div className="">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
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
                <img
                  src="https://www.pngall.com/wp-content/uploads/5/Samsung-TV-PNG-File-Download-Free.png"
                  alt=""
                />
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
    </div>
  );
};

export default Banner;
