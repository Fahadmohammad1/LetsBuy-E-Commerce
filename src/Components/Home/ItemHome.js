import React from "react";

const ItemHome = () => {
  return (
    <div>
      <html lang="en" class="">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Tailwind CSS Card with Material Design 3</title>
          <link
            href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            rel="stylesheet"
          />
        </head>
        <body>
          <div class="min-h-screen from-pink-200 via-pink-400 to-pink-600 bg-gradient-to-br pb-10">
            <div class="w-full md:w-7/12 pt-5 px-4 mx-auto text-center">
              <div class="text-sm text-white py-1">
                This components requires
                <a
                  href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents"
                  class="text-white font-semibold"
                  target="_blank"
                >
                  Material Tailwind CSS & JS
                </a>
                for the shadows, ripple effects and card classes. <br />
                <br />A component by
                <a
                  href="https://www.creative-tim.com?ref=tailwindcomponents"
                  class="text-white font-semibold"
                  target="_blank"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>

            <div class="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
              <div class="card">
                <div class="card-header mx-4 -mt-6">
                  <a
                    href="https://www.material-tailwind.com"
                    blur-shadow-image="true"
                  >
                    <img
                      class="w-auto rounded-lg"
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                      alt="tailwind-card-image"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <a href="#">
                    <h4 class="font-semibold">Material Design 3</h4>
                  </a>
                  <p class="opcacity-60 mb-4">
                    The time is now for it to be okay to be great. People in
                    this world shun people for being great. For being a bright
                    color. For standing out.
                  </p>
                  <button class="button button-pink" data-ripple-light="true">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
          <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/colored-shadow.js"></script>
        </body>
      </html>
    </div>
  );
};

export default ItemHome;
