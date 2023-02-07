import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/productAction";

const ProductCard = (product) => {
  const { name, image, brand } = product.product;
  const dispatch = useDispatch();
  return (
    <div className="card w-auto relative rounded-none">
      <span className="badge absolute right-3 top-0 uppercase bg-red-200 text-red-600 border-0">
        sale
      </span>
      <figure className="px-8 pt-8">
        <img src={image} alt="product" className="rounded-xl" />
      </figure>
      <div className="pt-3 pl-3 lg:pl-8">
        <h2 className="card-title">M2 Bionic - {brand}</h2>
        <p className="pb-1">{name} - Computer and Accessories</p>
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
            checked={onchange}
          />
        </div>
        <div className="font-serif mb-1">
          <del>$1020</del> from
          <span className="text-secondary font-bold text-lg"> $796</span>{" "}
          <span className="text-red-600 bg-red-200 px-2 py-1 rounded-l-2xl rounded-r-sm font-thin border-0 ml-2">
            -20%
          </span>
        </div>

        <div className="card-actions w-full py-3 flex">
          <button className="btn btn-sm rounded-3xl text-primary bg-white hover:text-white">
            Quick View
          </button>
          <button
            onClick={() => dispatch(addToCart(product.product))}
            className="btn btn-sm rounded-3xl text-primary bg-white hover:text-white"
          >
            <AiOutlineShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
