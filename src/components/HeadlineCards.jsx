import React from "react";
import backimg from "../assets/burger.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import burger from '../assets/burger.jpg';
import cake2 from '../assets/cake2.jpg';
import berry from '../assets/berry.jpg';
import biscuit from '../assets/biscuit.jpg';
import cake from '../assets/cake.jpg';
import pasta from '../assets/pasta.jpg';

const data = [
  {
    image: burger,
    desc1: "Grill & Chill Time!",
    desc2: "Only this weekend!",
    button: "Order Now",
  },
  {
    image: cake2,
    desc1: "Double Patty, Double Fun",
    desc2: "Free fries till 8/26",
    button: "Order Now",
  },
  {
    image: berry,
    desc1: "Juicy Deals Inside",
    desc2: "Flat 30% Off",
    button: "Order Now",
  },
  {
    image: biscuit,
    desc1: "Bite into Bliss",
    desc2: "Limited Time Offer",
    button: "Order Now",
  },
  {
    image: cake,
    desc1: "Burger Fest is Back!",
    desc2: "From 25–30 Aug",
    button: "Order Now",
  },
  {
    image: pasta,
    desc1: "Midweek Munch Madness",
    desc2: "Buy 1 Get 1 Free",
    button: "Order Now",
  }
];


const HeadlineCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className=" mx-auto px-15 py-12  max-w-full bg-orange-400">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-2 bg-orange-400">
            <div className="relative rounded-xl overflow-hidden flex flex-col h-[280px] sm:h-[300px] md:h-[320px] bg-orange-400 shadow-md">
              {/* Image + Overlay */}
              <div className="relative h-[200px] sm:h-[220px]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-3xl "
                />
                <div className="absolute inset-0 bg-black/70 rounded-3xl"></div>
                <div className="absolute inset-0 text-white flex items-center justify-center px-2">
                  <p className="text-base sm:text-lg md:text-xl font-bold text-center">
                    {item.desc1}
                  </p>
                </div>

              </div>

              {/* Button */}
              <div className="flex-1 flex items-end justify-center p-2">
                <button className="bg-black text-white px-4 py-2 text-sm sm:text-base rounded-full font-semibold hover:bg-gray-800  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-500">
                  {item.desc2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeadlineCards;