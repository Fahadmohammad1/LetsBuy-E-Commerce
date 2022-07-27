import React, { useState } from "react";

const Gallery = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringTwo, setIsHoveringTwo] = useState(false);
  const [isHoveringThree, setIsHoveringThree] = useState(false);
  const [isHoveringFour, setIsHoveringFour] = useState(false);
  return (
    <div className="container ml-auto mt-10">
      <h2 className="font-bold text-3xl ml-2 text-gray-800">New Collection</h2>
      <div class="flex justify-center items-center">
        <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div class="flex flex-col jusitfy-center items-center space-y-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-8 w-full">
              <div class="relative group flex justify-center items-center h-full w-full">
                {isHovering && (
                  <h3 className="absolute uppercase font-bold text-xl">
                    wear good, looks good
                  </h3>
                )}
                <img
                  onMouseOver={() => setIsHovering(true)}
                  onMouseOut={() => setIsHovering(false)}
                  class="object-center object-cover h-full w-full hover:opacity-50"
                  src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
                  alt="girl"
                />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Clothes
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>

              <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div class="relative group flex justify-center items-center h-full w-full">
                  {isHoveringTwo && (
                    <h3 className="absolute uppercase font-bold text-xl">
                      Choose your best shoes
                    </h3>
                  )}
                  <img
                    onMouseOver={() => setIsHoveringTwo(true)}
                    onMouseOut={() => setIsHoveringTwo(false)}
                    class="object-center hover:opacity-50 object-cover h-full w-full"
                    src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
                    alt="shoe"
                  />
                  <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Shoes
                  </button>
                  <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
                <div class="relative group flex justify-center items-center h-full w-full">
                  {isHoveringThree && (
                    <h3 className="absolute uppercase font-bold text-xl">
                      The beauty of your hands
                    </h3>
                  )}
                  <img
                    onMouseOver={() => setIsHoveringThree(true)}
                    onMouseOut={() => setIsHoveringThree(false)}
                    class="object-center hover:opacity-50 object-cover h-full w-full"
                    src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                    alt="watch"
                  />
                  <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Watches
                  </button>
                  <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>

              <div class="relative group justify-center items-center h-full w-full hidden lg:flex">
                {isHoveringFour && (
                  <h3 className="absolute uppercase font-bold text-xl">
                    New fashion, New jewellery
                  </h3>
                )}
                <img
                  onMouseOver={() => setIsHoveringFour(true)}
                  onMouseOut={() => setIsHoveringFour(false)}
                  class="object-center hover:opacity-50 object-cover h-full w-full"
                  src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                  alt="girl-"
                />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Accessories
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
              <div class="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img
                  class="object-center object-cover h-full w-full hidden md:block"
                  src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                  alt="girl"
                />
                <img
                  class="object-center object-cover h-full w-full md:hidden"
                  src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Accessories
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>
            <div class="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <img
                class="object-center object-cover h-full w-full hidden md:block"
                src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                alt="girl"
              />
              <img
                class="object-center object-cover h-full w-full sm:hidden"
                src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Accessories
              </button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
