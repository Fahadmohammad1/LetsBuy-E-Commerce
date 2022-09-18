import React from "react";

const DiscountBanner = () => {
  return (
    <div
      data-aos="flip-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="container mx-auto mt-16"
    >
      <div class="p-6 py-12 bg-pink-500 text-gray-900 rounded-full">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row items-center justify-between">
            <h2 class="text-center text-6xl tracking-tighter font-bold">
              Up to <br class="sm:hidden" />
              <span className="text-white">50</span>% Cashback
            </h2>
            <div class="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span class="font-bold text-lg">LETSBUY</span>
            </div>
            <a
              href="."
              rel="noreferrer noopener"
              class="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-[#FF4E16] dark:text-white font-bold dark:border-gray-400"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
