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
      <div className="card w-auto relative rounded-none">
        <span className="badge absolute right-0 top-0 uppercase bg-red-200 text-red-600 border-0">
          sale
        </span>
        <figure className="px-8 pt-8">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p className="pb-1">(laptop) - Computer and Accessories</p>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
              checked
            />
          </div>
          <div className="font-serif">
            <del>$1020</del> from
            <span className="text-pink-500 font-bold text-lg"> $796</span>{" "}
            <span className="text-red-600 bg-red-200 px-2 py-1 rounded-l-2xl rounded-r-sm font-thin border-0">
              -20%
            </span>
          </div>

          <div className="card-actions w-full pr-3 py-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto relative rounded-none">
        {/* <span className="badge absolute right-0 top-0 uppercase bg-red-200 text-red-600 border-0">
          sale
        </span> */}
        <figure className="px-8 pt-8">
          <img
            src="https://freepngdownload.com/image/thumb/fan-png-image-download.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p className="pb-1">(laptop) - Computer and Accessories</p>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
              checked
            />
          </div>
          <div className="font-serif">
            <del>$1020</del> from
            <span className="text-pink-500 font-bold text-lg"> $796</span>{" "}
            <span className="text-red-600 bg-red-200 px-2 py-1 rounded-l-2xl rounded-r-sm font-thin border-0">
              -20%
            </span>
          </div>

          <div className="card-actions w-full pr-3 py-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto relative rounded-none">
        <span className="badge absolute right-0 top-0 uppercase bg-red-200 text-red-600 border-0">
          sale
        </span>
        <figure className="px-8 pt-8">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p className="pb-1">(laptop) - Computer and Accessories</p>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
              checked
            />
          </div>
          <div className="font-serif">
            <del>$1020</del> from
            <span className="text-pink-500 font-bold text-lg"> $796</span>{" "}
            <span className="text-red-600 bg-red-200 px-2 py-1 rounded-l-2xl rounded-r-sm font-thin border-0">
              -20%
            </span>
          </div>

          <div className="card-actions w-full pr-3 py-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto relative rounded-none">
        <span className="badge absolute right-0 top-0 uppercase bg-red-200 text-red-600 border-0">
          sale
        </span>
        <figure className="px-8 pt-8">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p className="pb-1">(laptop) - Computer and Accessories</p>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
              checked
            />
          </div>
          <div className="font-serif">
            <del>$1020</del> from
            <span className="text-pink-500 font-bold text-lg"> $796</span>{" "}
            <span className="text-red-600 bg-red-200 px-2 py-1 rounded-l-2xl rounded-r-sm font-thin border-0">
              -20%
            </span>
          </div>

          <div className="card-actions w-full pr-3 py-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto relative rounded-none">
        {/* <span className="badge absolute right-0 top-0 uppercase bg-red-200 text-red-600 border-0">
          sale
        </span> */}
        <figure className="px-8 pt-8">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p className="pb-1">(laptop) - Computer and Accessories</p>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
              checked
            />
          </div>
          <div className="font-serif">
            <del>$1020</del> from
            <span className="text-pink-500 font-bold text-lg"> $796</span>{" "}
            <span className="text-red-600 bg-red-200 px-2 py-1 rounded-l-2xl rounded-r-sm font-thin border-0 ">
              -20%
            </span>
          </div>

          <div className="card-actions w-full pr-3 py-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto relative rounded-none">
        <span className="badge absolute right-0 top-0 uppercase bg-red-200 text-red-600 border-0">
          sale
        </span>
        <figure className="px-8 pt-8">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p className="pb-1">(laptop) - Computer and Accessories</p>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
              checked
            />
          </div>
          <div className="font-serif">
            <del>$1020</del> from
            <span className="text-pink-500 font-bold text-lg"> $796</span>{" "}
            <span className="text-red-600 bg-red-200 px-2 py-1 rounded-l-2xl rounded-r-sm font-thin border-0">
              -20%
            </span>
          </div>

          <div className="card-actions w-full pr-3 py-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto relative rounded-none">
        {/* <span className="badge absolute right-0 top-0 uppercase bg-red-200 text-red-600 border-0">
          sale
        </span> */}
        <figure className="px-8 pt-8">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p className="pb-1">(laptop) - Computer and Accessories</p>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
              checked
            />
          </div>
          <div className="font-serif">
            <del>$1020</del> from
            <span className="text-pink-500 font-bold text-lg"> $796</span>{" "}
            <span className="text-red-600 bg-red-200 px-2 py-1 rounded-l-2xl rounded-r-sm font-thin border-0">
              -20%
            </span>
          </div>

          <div className="card-actions w-full pr-3 py-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card w-auto relative rounded-none">
        <span className="badge absolute right-0 top-0 uppercase bg-red-200 text-red-600 border-0">
          sale
        </span>
        <figure className="px-8 pt-8">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-File.png"
            alt="laptop"
            className="rounded-xl"
          />
        </figure>
        <div className="pt-3 pl-3">
          <h2 className="card-title">M2 Bionic - Apple</h2>
          <p className="pb-1">(laptop) - Computer and Accessories</p>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-amber-300"
              checked
            />
          </div>
          <div className="font-serif">
            <del>$1020</del> from
            <span className="text-pink-500 font-bold text-lg"> $796</span>{" "}
            <span className="text-red-600 bg-red-200 px-2 py-1 rounded-l-2xl rounded-r-sm font-thin border-0">
              -20%
            </span>
          </div>

          <div className="card-actions w-full pr-3 py-3">
            <button className="btn w-full rounded-3xl text-[#FF4E16] bg-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default NewProduct;
