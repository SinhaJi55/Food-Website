import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [active, setActive] = useState("delivery");
  
  
  return (
    <div className=" flex justify-between items-center p-4 bg-orange-400 text-black w-full">
      <div className="flex items-center">
        <div onClick={() => setnav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30}/>
        </div>
        <h1 className="text-base sm:text-3xl  lg:text-4xl px-3">
          Koko<span className="font-bold">Eats</span>
        </h1>
        <div className="hidden sm:flex items-center bg-gray-200 rounded-full p-1 text-[15px]">
          <p
            onClick={() => setActive("delivery")}
            className={`p-2 px-4 font-bold cursor-pointer rounded-full transition-all duration-300 ${
              active === "delivery"
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            }`}
          >
            Delivery
          </p>

          {/* PickUp */}
          <p
            onClick={() => setActive("pickup")}
            className={`p-2 px-4 font-bold cursor-pointer rounded-full transition-all duration-300 ${
              active === "pickup"
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            }`}
          >
            PickUp
          </p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[400px] sm:w-[100px] lg:w-[500px] ">
        <AiOutlineSearch size={2} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none rounded-full text-black font-bold"
          type="text"
          placeholder="Search foods"
        />
      </div>
      <button className="bg-black text-white w-[50px] md:flex">
        <BsFillCartFill size={35} className="mr-2  rounded-full" />
      </button>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
               ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 grid grid-rows-[auto_1fr_auto] gap-4 p-4"
      : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 hidden"
        }
      >
        <AiOutlineClose
          onClick={() => setnav(!nav)}
          size={35}
          className="absolute  right-4 cursor-pointer top-4 bg-black"
        />
        <h2 className="text-2xl p-4 text-black">
          KOKO <span className="font-bold text-black ">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl flex py-4  font-bold">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl flex py-5 font-bold">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl flex py-4 font-bold">
              <MdFavorite size={25} className="mr-4" />
              Favourite
            </li>
            <li className="text-xl flex py-4 font-bold">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl flex py-4 font-bold">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
            <li className="text-xl flex py-4 font-bold">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li>
              <li className="text-xl flex py-4 font-bold">
                <AiFillTag size={25} className="mr-4" />
                Promotions
              </li>
              <li></li>
            </li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
