"use client";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { Transition } from "src/app/transition";
import Image from "next/image";

const About = () => {
  const countUpRef = useRef(null);
  const countUpRef1 = useRef(null);
  const countUpRef2 = useRef(null);
  const countUpRef3 = useRef(null);

  // Function to set up IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this value based on when you want the animation to start
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
        }
      });
    }, observerOptions);

    // Start observing each reference
    observer.observe(countUpRef.current);
    observer.observe(countUpRef1.current);
    observer.observe(countUpRef2.current);
    observer.observe(countUpRef3.current);

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const aboutSectionRef = useRef(null);
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Transition>
        <div className="relative overflow-hidden bg-white">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-32 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="font text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Adventures are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new achievement will shelter you from the harsh
                  elements of a world that does not care if you develop or die.
                </p>
              </div>
              <div>
                <div>
                  {/* <!-- Decorative image grid --> */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <Image
                              src="/images/slider1.jpg"
                              alt=""
                              width={300}
                              height={300}
                              className="h-full w-full object-cover object-center"
                            ></Image>
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/images/slider2.jpg"
                              alt=""
                              width={300}
                              height={300}
                              className="h-full w-full object-cover object-center"
                            ></Image>
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/images/photo2.jpg"
                              alt=""
                              width={300}
                              height={300}
                              className="h-full w-full object-cover object-center"
                            ></Image>
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/images/slider4.jpg"
                              alt=""
                              width={300}
                              height={300}
                              className="h-full w-full object-cover object-center"
                            ></Image>
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/images/slider5.jpg"
                              alt=""
                              width={300}
                              height={300}
                              className="h-full w-full object-cover object-center"
                            ></Image>
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/images/astro.jpg"
                              alt=""
                              width={300}
                              height={300}
                              className="h-full w-full object-cover object-center"
                            ></Image>
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/images/pic.jpg"
                              alt=""
                              width={300}
                              height={300}
                              className="h-full w-full object-cover object-center"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#about"
                    className="inline-block rounded-md border border-transparent bg-pink-600 py-3 px-8 text-center font-medium text-white hover:bg-pink-700 mt-6"
                    onClick={handleLearnMoreClick}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      {/* About Me */}
      <section className="bg-gray-100" id="about" ref={aboutSectionRef}>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mx-8">
              <h2 className="font text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <div className="bg-pink-600 w-20 h-1 mx-8 my-4 rounded-xl"></div>
              <p className="mt-4 text-gray-600 text-lg">
                Welcome to Travel Blog! We are avid travelers with a passion for
                exploring the world and sharing our adventures. Our journey
                began in 2024, when we decided to turn our wanderlust into a way
                of life and document every step along the way. We believe that
                travel is not just about ticking off places from a bucket list,
                but about immersing ourselves in diverse cultures, making
                meaningful connections, and creating unforgettable memories.
              </p>
              <br />
              {isReadMore && (
                <div>
                  <p className="mt-4 text-gray-600 text-lg">
                    Our love for travel started with a spontaneous trip to
                    [Destination] that opened our eyes to the beauty and
                    diversity of the world. Since then, we’ve traveled to over
                    [Number] countries and countless cities, each with its own
                    unique charm and stories. Our blog is a culmination of years
                    of adventure, learning, and a desire to inspire others to
                    explore the globe.
                  </p>
                </div>
              )}
              <button
                onClick={toggleReadMore}
                className="text-pink-600 hover:text-blue-600 font-medium"
              >
                {isReadMore ? "Show less" : "Learn more about us →"}
              </button>
            </div>
            <div className="mt-12 md:mt-0 mx-8 md:mx-0">
              <Image
                src="/images/about_us.jpg"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
                width={400}
                height={400}
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section>
        <page_transition>
          <blockquote className="border-l-4 border-pink-600 italic my-16 pl-4 md:pl-8 py-4 ml-4 md:ml-[4.2rem] max-w-md">
            <p className="text-lg font-medium">
              The world is a book and those who do not travel read only one
              page.
            </p>
            <cite className="block text-right mt-4 text-gray-600">
              - Augustine of Hippo
            </cite>
          </blockquote>
        </page_transition>

        <p className="my-16 pl-8 md:pl-8 py-4 mx-4 md:mx-10">
          My passion is travel, I just love visiting new places, immersing
          myself into local cultures of life around the world and discovering
          the unexpected! Stepping off a plane, I’m always in a hurry to get my
          passport stamped, reclaim my luggage and walk out of the arrivals hall
          ready to begin a new adventure. <br />I love the planning, the
          anticipation, the journey, be it by plane, train, bus or boat and of
          course, the actual holiday and finally all the wonderful memories and
          experiences I bring home that live with me forever. That was the
          original reason why I created this blog so that I could have an online
          diary of my recent trips to look back on in the future. I’ve been
          surprised but thrilled that so many of you have taken an interest in
          my travels and enjoy reading about my trips – it’s very encouraging
          and makes me very happy! From starting as a hobby my blog has evolved
          into an award winning online travel resource providing inspiration to
          fellow travellers.
        </p>
        {/* My Journey */}
        <div className="relative h-screen w-full">
          <Image
            src={"/images/my_journey.jpg"}
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover filter blur-sm"
            layout="fill"
            objectFit="cover"
            quality={100}
          ></Image>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0">
            <h1 className="text-4xl text-white font-bold">My Journey</h1>
            <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
            <p className="text-xl text-white mt-4 max-w-lg">
              Welcome to my corner of the internet! My journey into the world of
              vlogging began in 2024, driven by an insatiable curiosity and a
              desire to capture the essence of the places I visit and the people
              I meet. Traveling has always been about more than just the
              destination for me. It about the thrill of the unknown, the joy of
              discovery, and the connections made along the way. On this site,
              you&apos;ll find a diverse collection of vlogs that capture the
              beauty and diversity of our world.
            </p>
          </div>
        </div>
      </section>

      {/* Most Loved Places */}
      <Transition>
        <section className="loved_places my-20">
          <div className="text-4xl font-bold text-center">Some Photographs</div>
          <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
          <div className="relative overflow-hidden w-full">
            <div className="slide-track grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-5">
              <Image
                src={"/images/photo1.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo1"
              />
              <Image
                src={"/images/photo2.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo2"
              />
              <Image
                src={"/images/photo3.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo3"
              />
              <Image
                src={"/images/card1.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo4"
              />
              <Image
                src={"/images/my_journey.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo5"
              />
              <Image
                src={"/images/photo4.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo6"
              />
              <Image
                src={"/images/photo1.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo1"
              />
              <Image
                src={"/images/photo2.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo2"
              />
              <Image
                src={"/images/photo3.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo3"
              />
              <Image
                src={"/images/card1.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo4"
              />
              <Image
                src={"/images/my_journey.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo5"
              />
              <Image
                src={"/images/photo4.jpg"}
                width={400}
                height={400}
                className="hover:opacity-75 rounded-xl object-cover"
                alt="photo6"
              />
            </div>
          </div>
        </section>
      </Transition>

      {/* Achievements */}
      <div className="container px-5 pb-24 mx-auto">
        <div className="text-4xl font-bold text-center">We are known for</div>
        <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
        <div className="flex flex-wrap -m-4 text-center mx-8 my-16">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-4 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
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
              <p className="leading-relaxed">Visited Places</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-4 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="text-pink-600 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>

              <h2
                className="title-font font-medium text-3xl text-gray-900"
                ref={countUpRef1}
              >
                0
              </h2>
              <p className="leading-relaxed">Connects</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-4 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
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
                className="title-font font-medium text-3xl text-gray-900"
                ref={countUpRef2}
              >
                0
              </h2>
              <p className="leading-relaxed">Passports</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-4 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-pink-600 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"></path>
                <path d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"></path>
              </svg>
              <h2
                className="title-font font-medium text-3xl text-gray-900"
                ref={countUpRef3}
              >
                0
              </h2>
              <p className="leading-relaxed">Photography</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
