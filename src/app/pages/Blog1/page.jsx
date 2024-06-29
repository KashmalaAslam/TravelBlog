"use client";
import React from "react";
import Slider from "@madzadev/image-slider";
import "/public/style/index.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const CarouselPage = () => {
  const images = [
    { url: "/images/slider1.jpg" },
    { url: "/images/slider2.jpg" },
    { url: "/images/slider3.jpg" },
    { url: "/images/slider4.jpg" },
    { url: "/images/slider5.jpg" },
  ];
  return (
    <div className="mx-auto p-4">
      {/* Slider */}
      <div className="full-width-slider">
        <Slider
          imageList={images}
          width="100%"
          height={300}
          loop={true}
          autoPlay={true}
          autoPlayInterval={4000}
          showArrowControls={true}
          showDotControls={true}
          bgColor="none"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col md:flex-row">
        <div className="side_1 md:w-2/3 text-justify">
          <h1 className="text-3xl font-bold mt-3 text-gray-900 sm:text-4xl">
            Welcome to <span className="text-pink-600">Istanbul!</span> Travel
            tips + <br /> Our Experience
          </h1>
          <p className="my-6">
            In this blog you can read more about our time in Istanbul, Turkey. I
            also share some useful tips for Istanbul and I select the best
            hotels and hostels when you go backpacking and get through Istanbul!
          </p>
          <hr className="text-black" />
          <p className="my-6">
            We have arrived in Turkey! Following two delightful weeks in the
            Netherlands, where we could have happily extended our stay by
            another week, we are now on the move again after spending four
            months traveling through Africa. Our backpacks are exceptionally
            heavy this time as they contain party clothes for a wedding and warm
            attire for our upcoming trek in Nepal&apos;s Annapurna region. But
            first, we explore Istanbul!
          </p>
          <hr className="text-black" />
          <div className="my-6">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl my-4 text-center">
              Four days of exploring and dining in Istanbul!
            </h1>
            <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
            <p>
              After a long travel day, marked by disruptions due to strikes by
              Dutch farmers and issues with the Dutch railway system, we finally
              arrive, exhausted, at Sabiha Airport in Istanbul. An hour later,
              we check into Jumba Hostel, a charming and quirky place located in
              the bustling Taksim district. Surrounded by trendy restaurants, we
              soon find ourselves sitting in one with our friends Willemijn and
              Jiri. Willemijn, a friend from Maastricht, travels the world
              full-time as a digital nomad with Jiri. By chance, they were in
              Istanbul at the same time as us, and after nearly two years apart,
              we quickly arranged to meet for drinks. It turned out to be a
              delightful evening with plenty to catch up on.
            </p>
          </div>
          <hr className="text-black" />
          <Image
            src={"/images/streets.jpg"}
            width={800}
            height={300}
            alt="Streets of Istanbul"
          />
          <p className="my-6">
            Walking through the streets of Istanbul, you quickly find yourself
            immersed in a vibrant blend of cultures. The cobblestones beneath
            your feet carry the history of ancient empires, while the air is
            filled with the inviting scents of street food and the melodic calls
            to prayer. Every corner you turn reveals something new, from the
            bustling alleys of the Grand Bazaar with its array of colors and
            aromas to the serene courtyards of the Hagia Sophia adorned with
            beautiful mosaics. Exploring neighborhoods like the artistic Karaköy
            and the historic Sultanahmet, you get a true sense of the
            city&apos;s rich heritage. A stroll along the Bosphorus offers
            stunning views of the water and the city&apos;s illuminated skyline,
            making every moment in Istanbul a captivating experience.
          </p>
          <div>
            <hr className="text-black" />
            <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl my-4 text-center">
              Blue Mosque and Hagia Sophia
            </h1>
            <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
            <Image
              src={"/images/blue_mosque.jpg"}
              width={800}
              height={300}
              alt="Blue Mosque"
            />
            <p className="my-6">
              Visiting the Blue Mosque and Hagia Sophia in Istanbul is an
              awe-inspiring experience that encapsulates the city rich history
              and architectural grandeur. The Blue Mosque, with its cascading
              domes and six minarets, stands as a testament to Ottoman
              craftsmanship, its interior adorned with over 20,000 hand-painted
              blue tiles that create a serene and ethereal atmosphere. Just a
              short walk away, the Hagia Sophia boasts a remarkable history,
              having served as both a cathedral and a mosque. Its massive dome,
              supported by intricate Byzantine architecture, seems to float
              above the spacious nave, casting a sense of wonder on all who
              enter. The mosaics, some shimmering with gold, narrate centuries
              of religious and cultural transitions. Outside, the courtyards and
              gardens provide a tranquil retreat from the bustling city. As you
              stand between these two monumental structures, you feel a profound
              connection to the past, where empires rose and fell, and different
              faiths found expression under these majestic roofs. The experience
              is both humbling and uplifting, leaving you with a deep
              appreciation for Istanbul&apos;s unique place at the crossroads of
              history and culture.
            </p>
          </div>
          <div>
            <hr className="text-black" />
            <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl my-4 text-center">
              Topkapi Palace
            </h1>
            <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
            <Image
              src={"/images/Topkapi_palace.jpg"}
              width={800}
              height={300}
              alt="Topkapi Palace"
            />
            <p className="my-6">
              Topkapi Palace in Istanbul is a majestic symbol of Ottoman
              grandeur and history. Located in the heart of the city, it served
              as the main residence and administrative headquarters of the
              Ottoman sultans for nearly 400 years. The palace complex, which
              includes lavish courtyards, ornate rooms, and beautiful gardens,
              is a reflection of the empire&apos;s wealth and sophistication.
              Visitors can explore the Imperial Harem, where the sultan&apos;s
              family lived, and view the stunning collection of imperial
              treasures, including jewel-encrusted weapons, delicate porcelain,
              and the famous Topkapi Dagger. The palace also houses religious
              relics, such as the Prophet Muhammad&apos;s cloak and sword,
              adding to its historical and cultural significance. The views from
              the palace grounds are breathtaking, offering panoramic vistas of
              the Bosphorus and the Golden Horn. A visit to Topkapi Palace is a
              journey through the opulence and power of the Ottoman Empire, and
              it provides a deep insight into the rich history and heritage of
              Istanbul.
            </p>
          </div>
        </div>

        {/* Side Panel */}
        <div className="side_2 md:w-1/3 text-justify mt-8 md:mt-0 md:ml-4 ml-6">
          <div className="text-justify">
            <Image
              src={"/images/person.jpg"}
              width={300}
              height={200}
              alt="Author"
              className="mx-auto"
            />
            <p className="w-[300px] my-4 mx-auto text-justify">
              Welcome to Outdoor Adventure Blog! My name is Charlotte and I love
              to travel. My goal is to inspire you and help you plan your next
              trip. That&apos;s why I&apos;s sharing my personal travel
              experiences, the itineraries I made and my favourite hotels. Do
              you have any questions? Let me know!
            </p>
          </div>
          <div className="icons space-x-4 flex justify-center my-8">
            <h3 className="font-semibold">You can find me on: </h3>
            <FontAwesomeIcon icon={faYoutube} className="text-pink-700 mx-2" />
            <FontAwesomeIcon icon={faFacebook} className="text-pink-700 mx-2" />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-pink-700 mx-2"
            />
            <FontAwesomeIcon icon={faTwitter} className="text-pink-700 mx-2" />
          </div>
          <div className="my-12 mx-auto w-[300px]">
            <hr className="text-black" />
            <h3 className="text-md font-semibold mt-4">
              Subscribe Outdoor Adventure!
            </h3>
            {/* Subscribe */}
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold my-3">Email</h4>
              <div className="relative bg-inherit">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="peer bg-transparent h-10 w-full rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-pink-700 focus:outline-none focus:border-rose-600"
                  placeholder="Email Address"
                />
                <label
                  htmlFor="username"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-pink-700 peer-focus:text-sm transition-all"
                >
                  Email Address
                </label>
              </div>
              <div className="language mt-16">
                <hr className="text-black" />
                <p className="font-semibold mt-4">
                  Which language do you speak?
                </p>
                <div>
                  <input type="checkbox" name="dutch" className="mr-2" /> Dutch
                  <input
                    type="checkbox"
                    name="english"
                    className="ml-8 mr-2"
                  />{" "}
                  English
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900 mx-auto my-6 flex  justify-center items-center"
                >
                  Subscribe
                </button>
              </div>

              {/* SearchBar */}
              <div className="relative max-w-sm mx-auto mt-20">
                <hr className="text-black" />
                <input
                  className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-500"
                  type="search"
                  placeholder="Search"
                />
                <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                    />
                  </svg>
                </button>
              </div>

              {/* Collage */}
              <div className="my-8">
                <hr className="text-black" />
                <h4 className="font-bold mt-3 text-center text-xl">
                  Follow me
                </h4>
                <div className="bg-pink-600 w-16 h-1 mx-auto rounded-xl my-2"></div>
                <ul>
                  <li>
                    <Link href={"https://www.instagram.com/"}>
                      <Image
                        src={"/images/collage.png"}
                        width={300}
                        height={300}
                        alt="Instagram Collage"
                        className="my-4 mx-auto"
                      />
                    </Link>
                  </li>
                </ul>
                <p className="text-center" style={{ fontFamily: "cursive" }}>
                  Connect with me through Instagram also
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Istanbul Travel Tips
                </h2>
                <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
                <ul className="list-disc list-inside">
                  <li className="mb-2">
                    <strong>Best Time to Visit:</strong> Spring (April to June)
                    and Autumn (September to November) for mild weather and
                    fewer crowds.
                  </li>
                  <li className="mb-2">
                    <strong>Currency:</strong> Turkish Lira (TRY). Credit cards
                    are widely accepted, but it&apos;s always good to have some
                    cash.
                  </li>
                  <li className="mb-2">
                    <strong>Language:</strong> Turkish. English is commonly
                    spoken in tourist areas.
                  </li>
                  <li className="mb-2">
                    <strong>Transport:</strong> Istanbul has an extensive public
                    transport system including trams, buses, and ferries. Get an
                    Istanbulkart for convenient travel.
                  </li>
                  <li className="mb-2">
                    <strong>Local Cuisine:</strong> Don&apos;t miss trying
                    kebabs, mezes, baklava, and Turkish tea. Visit local markets
                    for fresh produce.
                  </li>
                  <li className="mb-2">
                    <strong>Dress Code:</strong> While Istanbul is modern,
                    it&apos;s respectful to dress modestly, especially when
                    visiting mosques.
                  </li>
                  <li className="mb-2">
                    <strong>Bargaining:</strong> It&apos;s common in markets and
                    bazaars. Don&apos;t be afraid to negotiate prices.
                  </li>
                  <li className="mb-2">
                    <strong>Safety:</strong> Istanbul is generally safe, but be
                    mindful of your belongings in crowded areas.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_2"></div>
    </div>
  );
};

export default CarouselPage;
