import React from "react";
import background from "../../images/sale.jpg";

const Banner = () => {
  return (
    <div className="container ml-auto">
      <div class="min-h-screen">
        <div>
          <img className="h-screen w-screen" src={background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
