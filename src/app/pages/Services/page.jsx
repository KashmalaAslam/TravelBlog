"use client";
import React from "react";
import Image from "next/image";
import { Transition } from "../../transition";
import { useRef } from "react";
import { TypingEffect } from "../../page_transition";

const Services = () => {
  const servicesSectionRef = useRef(null);
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    servicesSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const service1 = useRef(null);
  const handleService1 = (e) => {
    e.preventDefault();
    service1.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Transition>
      <section className="main_section">
        <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          {/* Hero image and content */}
          <div class="absolute inset-0">
            <Image
              src="/images/bg-img.jpg"
              alt="Background Image"
              class="object-cover object-center w-full h-full"
              width={1000}
              height={300}
            />
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              <TypingEffect
                strings={[
                  "Explore our Services to trust us",
                  "Your satisfaction is our priority",
                  "Building trust through exceptional service",
                ]}
              />
            </h1>
            <p class="text-lg text-gray-300 mb-8">
              Discover amazing features and services that await you.
            </p>
            <a
              href="#services"
              class="bg-pink-600 text-white-900 hover:bg-pink-500 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              onClick={handleLearnMoreClick}
            >
              Get Started
            </a>
          </div>
        </div>
        {/* services */}
        <section className="travel" id="services" ref={servicesSectionRef}>
          <div className="sponsors pt-12">
            <h1 className="font-bold text-3xl text-center">
              Services we provide
            </h1>
            <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
          </div>
          {/* cards */}
          <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
              <div
                class="relative w-full flex items-end justify-start text-left bg-cover bg-center transform transition duration-500 hover:scale-110"
                style={{
                  height: "450px",
                  backgroundImage: "url(/images/adventure.jpg)",
                }}
              >
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                  <button>
                    <a
                      href="#service1"
                      class="text-xs bg-pink-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-pink-600 transition ease-in-out duration-500"
                      onClick={handleService1}
                    >
                      Explore
                    </a>
                  </button>
                </div>
                <main class="p-5 z-10">
                  <a
                    href="#"
                    class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
                    onClick={handleService1}
                  >
                    Embark on thrilling Adventure Tours
                  </a>
                </main>
              </div>

              <div
                class="relative w-full flex items-end justify-start text-left bg-cover bg-center h-[450px] transform transition duration-500 hover:scale-110"
                style={{
                  height: "450px",
                  backgroundImage: "url(/images/cultural.jpg)",
                }}
              >
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                  <a
                    href="#"
                    class="text-xs bg-pink-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-pink-600 transition ease-in-out duration-500"
                  >
                    Explore
                  </a>
                </div>
                <main class="p-5 z-10">
                  <a
                    href="#"
                    class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
                  >
                    Immerse yourself in diverse cultures with us
                  </a>
                </main>
              </div>

              <div
                class="relative w-full flex items-end justify-start text-left bg-cover bg-center transform transition duration-500 hover:scale-110"
                style={{
                  height: "450px",
                  backgroundImage: "url(/images/Itineraries.jpg)",
                }}
              >
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                  <a
                    href="#"
                    class="text-xs bg-pink-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-pink-600 transition ease-in-out duration-500"
                  >
                    Explore
                  </a>
                </div>
                <main class="p-5 z-10">
                  <a
                    href="#"
                    class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
                  >
                    Enjoy personalized journeys tailored to your preferences
                  </a>
                </main>
              </div>

              <div
                class="relative w-full flex items-end justify-start text-left bg-cover bg-center transform transition duration-500 hover:scale-110"
                style={{
                  height: "450px",
                  backgroundImage: "url(/images/assist.jpg)",
                }}
              >
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                  <a
                    href="#"
                    class="text-xs bg-pink-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-pink-600 transition ease-in-out duration-500"
                  >
                    Explore
                  </a>
                </div>
                <main class="p-5 z-10">
                  <a
                    href="#"
                    class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
                  >
                    Worry-free with our comprehensive Assistance
                  </a>
                </main>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          id="features"
          class="container mx-auto px-4 space-y-6 bg-gray-100"
        >
          <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <div className="pt-12">
              <h1 className="font-bold text-3xl text-center">Our Values</h1>
              <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
            </div>

            <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              The product can personalize user experiences by understanding
              individual preferences and tailoring recommendations or content
              based on user behavior and historical data.
            </p>
          </div>

          <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 pb-12">
            <div class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-pink-400 p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="w-8 h-8"
                >
                  <path
                    fill="#000000"
                    d="M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512H381.1h75H578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"
                  />
                </svg>
                <div class="space-y-2">
                  <h3 class="font-bold text-pink-600">
                    Adventure and Exploration
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Thrill of discovering new places and the joy of embarking
                  </p>
                </div>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-pink-400 p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="w-10 h-10"
                >
                  <path
                    fill="#000000"
                    d="M400 0c5 0 9.8 2.4 12.8 6.4c34.7 46.3 78.1 74.9 133.5 111.5l0 0 0 0c5.2 3.4 10.5 7 16 10.6c28.9 19.2 45.7 51.7 45.7 86.1c0 28.6-11.3 54.5-29.8 73.4H221.8c-18.4-19-29.8-44.9-29.8-73.4c0-34.4 16.7-66.9 45.7-86.1c5.4-3.6 10.8-7.1 16-10.6l0 0 0 0C309.1 81.3 352.5 52.7 387.2 6.4c3-4 7.8-6.4 12.8-6.4zM288 512V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H192c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32H608c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H560V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H448V454c0-19-8.4-37-23-49.2L400 384l-25 20.8C360.4 417 352 435 352 454v58H288zM70.4 5.2c5.7-4.3 13.5-4.3 19.2 0l16 12C139.8 42.9 160 83.2 160 126v2H0v-2C0 83.2 20.2 42.9 54.4 17.2l16-12zM0 160H160V296.6c-19.1 11.1-32 31.7-32 55.4V480c0 9.6 2.1 18.6 5.8 26.8c-6.6 3.4-14 5.2-21.8 5.2H48c-26.5 0-48-21.5-48-48V176 160z"
                  />
                </svg>
                <div class="space-y-2 mt-3">
                  <h3 class="font-bold text-pink-600">Cultural Respect </h3>
                  <p class="text-sm">
                    Importance of respecting and understanding the diverse
                    cultures
                  </p>
                </div>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-pink-400 p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-10 h-10"
                >
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                </svg>
                <div class="space-y-2">
                  <h3 class="font-bold text-pink-600">Sustainable Travel</h3>
                  <p class="text-sm text-muted-foreground">
                    Committed to promoting sustainable travel practices to
                    protect planet
                  </p>
                </div>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-pink-400 p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="w-10 h-10"
                >
                  <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
                </svg>
                <div class="space-y-2">
                  <h3 class="font-bold text-pink-600">
                    Authenticity and Integrity
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Provide authentic and honest travel experiences, sharing
                    genuine insights
                  </p>
                </div>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-pink-400 p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="w-10 h-10 mb-3"
                >
                  <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                </svg>
                <div class="space-y-2">
                  <h3 class="font-bold text-pink-600">
                    Community and Connection
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Value the connection made with travelers and the local
                    communities
                  </p>
                </div>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-pink-400 p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-10 h-10"
                >
                  <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM247.4 283.8c-3.7 3.7-6.2 4.2-7.4 4.2s-3.7-.5-7.4-4.2c-3.8-3.7-8-10-11.8-18.9c-6.2-14.5-10.8-34.3-12.2-56.9h63c-1.5 22.6-6 42.4-12.2 56.9c-3.8 8.9-8 15.2-11.8 18.9zm42.7-9.9c7.3-18.3 12-41.1 13.4-65.9h31.1c-4.7 27.9-21.4 51.7-44.5 65.9zm0-163.8c23.2 14.2 39.9 38 44.5 65.9H303.5c-1.4-24.7-6.1-47.5-13.4-65.9zM368 192a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM145.3 208h31.1c1.4 24.7 6.1 47.5 13.4 65.9c-23.2-14.2-39.9-38-44.5-65.9zm31.1-32H145.3c4.7-27.9 21.4-51.7 44.5-65.9c-7.3 18.3-12 41.1-13.4 65.9zm56.1-75.8c3.7-3.7 6.2-4.2 7.4-4.2s3.7 .5 7.4 4.2c3.8 3.7 8 10 11.8 18.9c6.2 14.5 10.8 34.3 12.2 56.9h-63c1.5-22.6 6-42.4 12.2-56.9c3.8-8.9 8-15.2 11.8-18.9z" />
                </svg>
                <div class="space-y-2">
                  <h3 class="font-bold text-pink-600">
                    Passion for Storytelling
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    We are passionate about storytelling, capturing the essence
                    of our journeys
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service_1 */}
        <div class=" dark:bg-gray-800 py-8 mt-10" id="service1" ref={service1}>
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div class="h-[360px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <Image
                    class="w-full h-full object-cover"
                    src="/images/astro.jpg"
                    alt="Product Image"
                    width={300}
                    height={300}
                  ></Image>
                </div>
                <div class="flex -mx-2 mb-4"></div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Adventure Tours
                </h2>
                <div className="bg-pink-600 w-20 h-1 my-4 rounded-xl"></div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Embark on thrilling adventures with our guided tours. Whether
                  you are a seasoned adventurer or a first-time explorer, we
                  have something for everyone:
                  <h3 className="font-semibold">Hiking and Trekking:</h3>{" "}
                  Explore stunning landscapes and conquer challenging trails.
                  <h3 className="font-semibold">Mountain Climbing:</h3>
                  Scale the heights of majestic peaks with our expert guides.
                  <h3 className="font-semibold">White-Water Rafting:</h3>
                  Experience the rush of navigating through exhilarating rapids.
                  <h3 className="font-semibold">Safari Expeditions:</h3>
                  Get up close and personal with wildlife in their natural
                  habitats.
                </p>
                <div class="w-1/2 px-2">
                  <button class="w-full bg-pink-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Sign Up with us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default Services;
