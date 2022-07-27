import React from "react";

const DiscountBanner = () => {
  return (
    <div className="container ml-auto lg:px-6 mt-14">
      <div class="p-6 py-12 dark:bg-pink-500 dark:text-gray-900 rounded-full">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row items-center justify-between">
            <h2 class="text-center text-6xl tracking-tighter font-bold">
              Up to <br class="sm:hidden" />
              50% Off
            </h2>
            <div class="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span class="font-bold text-lg">LETSBUY</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              class="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
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
