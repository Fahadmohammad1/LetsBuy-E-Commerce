import React from "react";
import Slider from "react-slick";

const NewProduct = () => {
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
    <Slider {...settings}>
      <div className="card w-auto border-2">
        <figure className="px-8 pt-8 ">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p>(laptop) - Computer and Accessories</p>
          <div className="card-actions w-full pr-3 pb-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              LOGIN
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto border-2">
        <figure className="px-8 pt-8 ">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p>(laptop) - Computer and Accessories</p>
          <div className="card-actions w-full pr-3 pb-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              LOGIN
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto border-2">
        <figure className="px-8 pt-8 ">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p>(laptop) - Computer and Accessories</p>
          <div className="card-actions w-full pr-3 pb-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              LOGIN
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto border-2">
        <figure className="px-8 pt-8 ">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p>(laptop) - Computer and Accessories</p>
          <div className="card-actions w-full pr-3 pb-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              LOGIN
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto border-2">
        <figure className="px-8 pt-8 ">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p>(laptop) - Computer and Accessories</p>
          <div className="card-actions w-full pr-3 pb-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default NewProduct;
