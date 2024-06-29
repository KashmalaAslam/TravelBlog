"use client";
import Image from "next/image";
import Link from "next/link";
import { Syncopate } from "next/font/google";
import { TypingEffect } from "src/app/page_transition";
import { Transition } from "../../transition";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <header className="bg-gray-900 text-white relative">
        <div
          className="h-screen w-full bg-cover bg-center opacity-85"
          style={{
            backgroundImage: "url(/images/hero_Image.jpg)",
            opacity: "50%",
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-2xl font-bold">
            Explore the Colorful World
          </h1>
          <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <TypingEffect
              strings={[
                "Wonderful Gift",
                "Remarkable Tour",
                "Daring Trip",
                "Epic Aventure",
                "Fantastic Event",
                "Marvelous Trek",
              ]}
            />
          </h2>
          <button className="bg-pink-600 hover:bg-pink-500 font-bold py-2 px-4 rounded-xl mt-8">
            Learn More
          </button>
        </div>
      </header>
      <section className="travel">
        <div className="sponsors py-12 h-auto lg:h-[90vh] mb-8">
          <h1 className="font-bold text-3xl text-center">Featured By</h1>
          <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl mb-6"></div>
          <div class="grid grid-flow-col grid-col-4 justify-center gap-3">
            <Image
              src="/images/logo1.png"
              alt="sponsor1"
              width={150}
              height={150}
              class="mx-auto object-center transform transition duration-500 hover:scale-110"
            />
            <Image
              src="/images/logo2.png"
              alt="sponsor2"
              width={150}
              height={150}
              class="mx-auto object-center transform transition duration-500 hover:scale-110"
            />
            <Image
              src="/images/logo3.png"
              alt="sponsor3"
              width={150}
              height={150}
              class="mx-auto object-center transform transition duration-500 hover:scale-110"
            />
            <Image
              src="/images/logo4.png"
              alt="sponsor4"
              width={150}
              height={150}
              class="mx-auto object-center transform transition duration-500 hover:scale-110"
            />
          </div>
          <Transition>
            <p className="text-justify px-4 md:px-20 py-8">
              We extend our heartfelt gratitude to our sponsors for their
              generous support and commitment. Your contributions have been
              invaluable in making our event a resounding success. Your
              partnership not only provides essential resources but also
              inspires us to reach new heights. We deeply appreciate your
              dedication and belief in our mission. Your involvement has made a
              significant impact, allowing us to create memorable experiences
              and achieve our goals. Thank you for your unwavering support and
              for being a crucial part of our journey. We look forward to
              continuing this fruitful collaboration and making even greater
              strides together in the future. Your trust and encouragement
              empower us to strive for excellence and make a positive
              difference. Your support has not only enabled us to host this
              event but has also strengthened our community and fostered a
              spirit of unity and progress. Each milestone we reach is a
              testament to your generosity and vision. Together, we have laid a
              strong foundation for future successes, and we are excited about
              the possibilities that lie ahead. Your commitment is the driving
              force behind our efforts, and we are honored to have you by our
              side.
            </p>
          </Transition>
        </div>
        <Transition>
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-300 bg-opacity-50 py-16 px-8 mt-16">
            <div className="w-full pl-8 p-10">
              <h1 className="font-bold text-3xl text-center">Travel With Us</h1>
              <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
              <p className="text-justify">
                Embark on an unforgettable journey with us, where adventure and
                luxury converge to create extraordinary travel experiences. Our
                meticulously crafted itineraries are designed to cater to your
                unique interests and preferences, ensuring that every moment of
                your trip is nothing short of spectacular. Whether you are
                seeking the thrill of exploring uncharted territories, the
                serenity of pristine landscapes, or the rich cultural immersion
                in exotic destinations, our expert team is dedicated to making
                your travel dreams a reality. We prioritize your comfort and
                satisfaction, providing personalized services that go above and
                beyond.
              </p>
            </div>
            <div class="container mx-auto py-8">
              <div class="-m-1 flex flex-wrap md:-m-2">
                <div class="flex w-1/2 flex-wrap">
                  <div class="w-1/2 p-1 md:p-2">
                    <Image
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center transform transition duration-500 hover:scale-110"
                      src={"/images/astro.jpg"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <Image
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center transform transition duration-500 hover:scale-110"
                      src={"/images/slider1.jpg"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <Image
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center transform transition duration-500 hover:scale-110"
                      src={"/images/photo2.jpg"}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div class="flex w-1/2 flex-wrap">
                  <div class="w-full p-1 md:p-2">
                    <Image
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center transform transition duration-500 hover:scale-110"
                      src={"/images/mountain.jpg"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <Image
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center transform transition duration-500 hover:scale-110"
                      src={"/images/about_us.jpg"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <Image
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center transform transition duration-500 hover:scale-110"
                      src={"/images/photo3.jpg"}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </section>

      {/* Latest Blogs */}
      <section className="latest_blogs my-10">
        <div>
          <div className="container mx-auto px-4">
            <h2 className="text-center font-bold tracking-wider text-3xl">
              Latest Blog Posts
            </h2>
            <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden group">
                  <Image
                    className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
                    src="/images/card1.jpg"
                    alt="Product"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  Istanbul
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Exploring Istanbul is a journey through history and culture.
                  This vibrant city, straddling Europe and Asia, offers a unique
                  blend of the old and new. Visit the majestic Hagia Sophia and
                  the Blue Mosque to marvel at their stunning architecture.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <ul>
                    <li className="bg-pink-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-700 hover:text-white mt-8">
                      <Link href={"../pages/Blog1"}>Explore More</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden group">
                  <Image
                    className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
                    src="/images/content.jpg"
                    alt="Product"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  Mountains
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Exploring mountains offers a unique blend of adventure,
                  challenge, and serenity. As you ascend, the air grows cooler
                  and the vistas more breathtaking, revealing nature raw beauty.
                  Each trail, filled with rugged terrain and diverse wildlife,
                  tells a story of its own.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <button className="bg-pink-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-700 mt-8">
                    Explore More
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden group">
                  <Image
                    className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
                    src="/images/hero_Image.jpg"
                    alt="Product"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  Deep Seas
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Exploring the deep seas is a fascinating venture into Earth
                  final frontier. This underwater world, largely unexplored,
                  holds countless mysteries and unique ecosystems. Using
                  advanced submersibles and remote-operated vehicles.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <button className="bg-pink-500 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-700 mt-8">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Places */}
      <h2
        class="text-center tracking-wider text-3xl mt-20"
        style={{ fontFamily: "fantasy" }}
      >
        Best Places To Visit
      </h2>
      <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-8 overflow-hidden my-10 ">
        <article
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-full cursor-pointer hover:opacity-85 group"
          style={{ width: "80%" }}
        >
          <Image
            src="/images/hero_Image.jpg"
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            City of love
          </div>
        </article>
        <article
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-full cursor-pointer hover:opacity-85 group"
          style={{ width: "80%" }}
        >
          <Image
            src="/images/place2.jpg"
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">Brazil</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            City of love
          </div>
        </article>
        <article
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-full cursor-pointer hover:opacity-85 group"
          style={{ width: "80%" }}
        >
          <Image
            src="/images/place3.jpg"
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">Austria</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            City of love
          </div>
        </article>
      </section>
    </div>
  );
}
