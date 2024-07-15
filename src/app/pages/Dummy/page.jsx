// pages/index.js
"use client";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const Count = () => {
  const countUpRef = useRef(null);
  const countUpRef1 = useRef(null);
  const countUpRef2 = useRef(null);
  const countUpRef3 = useRef(null);

  useEffect(() => {
    console.log("Component mounted");
    const countUp = new CountUp(countUpRef.current, 1000);
    const countUp1 = new CountUp(countUpRef1.current, 3000);
    const countUp2 = new CountUp(countUpRef2.current, 46);
    const countUp3 = new CountUp(countUpRef3.current, 4000);
    if (!countUp.error) {
      console.log("Starting CountUp");
      countUp.start();
    } else {
      console.error(countUp.error);
    }
    if (!countUp1.error) {
      countUp1.start();
    } else {
      console.error(countUp1.error);
    }

    if (!countUp2.error) {
      countUp2.start();
    } else {
      console.error(countUp2.error);
    }

    if (!countUp3.error) {
      countUp3.start();
    } else {
      console.error(countUp3.error);
    }
  }, []);

  return (
    <>
      <div className="container px-5 pb-24 mx-auto">
        <div className="text-4xl font-bold text-center">We are known for</div>
        <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
        <div className="flex flex-wrap -m-4 text-center mx-8 my-16">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-4 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-12 h-12 mb-3 inline-block"
              >
                <path
                  fill="#d81b60"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <div>
                <h2
                  className="title-font font-medium text-3xl text-gray-900"
                  ref={countUpRef}
                >
                  0
                </h2>
              </div>
              <p class="leading-relaxed">Visited Places</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-4 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-pink-600 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>

              <h2
                class="title-font font-medium text-3xl text-gray-900"
                ref={countUpRef1}
              >
                0
              </h2>
              <p class="leading-relaxed">Connects</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-4 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-12 h-12 mb-3 inline-block"
              >
                <path
                  fill="#d81b60"
                  d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM183 278.8c-27.9-13.2-48.4-39.4-53.7-70.8h39.1c1.6 30.4 7.7 53.8 14.6 70.8zm41.3 9.2l-.3 0-.3 0c-2.4-3.5-5.7-8.9-9.1-16.5c-6-13.6-12.4-34.3-14.2-63.5h47.1c-1.8 29.2-8.1 49.9-14.2 63.5c-3.4 7.6-6.7 13-9.1 16.5zm40.7-9.2c6.8-17.1 12.9-40.4 14.6-70.8h39.1c-5.3 31.4-25.8 57.6-53.7 70.8zM279.6 176c-1.6-30.4-7.7-53.8-14.6-70.8c27.9 13.2 48.4 39.4 53.7 70.8H279.6zM223.7 96l.3 0 .3 0c2.4 3.5 5.7 8.9 9.1 16.5c6 13.6 12.4 34.3 14.2 63.5H200.5c1.8-29.2 8.1-49.9 14.2-63.5c3.4-7.6 6.7-13 9.1-16.5zM183 105.2c-6.8 17.1-12.9 40.4-14.6 70.8H129.3c5.3-31.4 25.8-57.6 53.7-70.8zM352 192A128 128 0 1 0 96 192a128 128 0 1 0 256 0zM112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"
                />
              </svg>
              <h2
                class="title-font font-medium text-3xl text-gray-900"
                ref={countUpRef2}
              >
                0
              </h2>
              <p class="leading-relaxed">Passports</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-4 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-pink-600 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"></path>
                <path d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"></path>
              </svg>
              <h2
                class="title-font font-medium text-3xl text-gray-900"
                ref={countUpRef3}
              >
                0
              </h2>
              <p class="leading-relaxed">Photography</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
