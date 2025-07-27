import React, { useEffect, useRef, useState } from "react";
import Logo from "./../assets/logo.png";
import { BiMenu, BiSearch, BiX } from "react-icons/bi";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsInstagram, BsLinkedin, BsTiktok, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import Input from "./ui/input";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const searchRef = useRef(null);
  function onFormSubmit() {
    setIsInputVisible((prev) => !prev);
  }
  useEffect(() => {
    searchRef.current?.focus();
  }, [isInputVisible]);
  return (
    <div className="grid bg-white fixed w-full z-20">
      <div className="flex justify-between lg:px-[6rem] px-4 py-1 items-center md:border-b border-gray-300">
        <img src={Logo} alt="" className="w-[125px] h-[25px]" />

        <div className="flex gap-2 items-center">
          <form className="h-[3rem] relative lg:w-[40rem] md:w-[20rem]">
            {isInputVisible && (
              <Input
                name="search"
                className="h-full border-none bg-gray-200 w-full focus-visible:ring-0 "
                ref={searchRef}
              />
            )}
            <button type="button" onClick={onFormSubmit}>
              <BiSearch className="text-3xl absolute h-full top-0 right-2 opacity-40" />
            </button>
          </form>
          <BiMenu
            className="text-4xl cursor-pointer"
            onClick={() => setOpenNav(true)}
          />
        </div>
      </div>

      <ul className="md:flex hidden md:px-4 sm:hidden lg:px-[6rem] text-gray-600 md:block justify-center text-sm lg:text-lg">
        <li className="lg:px-8 md:px-4 hover:bg-purple-200 cursor-pointer py-3">
          Quizzes
        </li>
        <li className="lg:px-8 md:px-4 hover:bg-purple-100 cursor-pointer py-4">
          Inside Life
        </li>
        <li className="lg:px-8 md:px-4 hover:bg-purple-100 cursor-pointer py-4">
          Citizen
        </li>
        <li className="lg:px-8 md:px-4 hover:bg-purple-100 cursor-pointer py-4">
          Money
        </li>
        <li className="lg:px-8 md:px-4 hover:bg-purple-100 cursor-pointer py-4">
          Her
        </li>
        <li className="lg:px-8 md:px-4 hover:bg-purple-100 cursor-pointer py-4">
          Man Dem
        </li>
        <li className="lg:px-8 md:px-4 hover:bg-purple-100 cursor-pointer py-4">
          Pop
        </li>
        <li className="lg:px-8 md:px-4 hover:bg-purple-100 cursor-pointer py-4">
          Ships
        </li>
        <li className="lg:px-8 md:px-4 hover:bg-purple-100 cursor-pointer py-4">
          Chopist
        </li>
        <li className="lg:px-8 md:px-4 hover:bg-purple-100 cursor-pointer py-4">
          Aluta and Chill
        </li>
      </ul>
      {openNav && (
        <nav className="text-[#570095] fixed right-0 z top-0 z-1 h-full w-full flex">
          <div
            className="w-full h-full bg-gray-700 opacity-50"
            onClick={() => setOpenNav(false)}
          ></div>
          <div className="pt-18 pb-30 p-8 md:px-[64px] bg-white w-[18rem] md:w-[26rem] relative h-full overflow-y-auto">
            <BiX
              className="absolute top-4 right-8 cursor-pointer text-xl"
              onClick={() => setOpenNav(false)}
            />
            <ul className="grid gap-8 font-semibold border-b border-gray-300 pb-10 mb-4 text-[14px] lg:text-[40px]">
              <li className="border-b-gray-300 border-b pb-4 text-[14px]">
                Quizzes
              </li>
              <li className="">Stacks</li>
              <li className="">Shows</li>
              <li className="">Podcasts</li>
              <li className="">Newsletter</li>
            </ul>

            <ul className="grid gap-4 text-[12px]">
              <li className="pb-4 border-b border-gray-300">Naira Life</li>
              <li className="pb-4 border-b border-gray-300">Love Life</li>
              <li className="pb-4 border-b border-gray-300">Hustleprint</li>
              <li className="pb-4 border-b border-gray-300">Love Currency</li>
              <li className="pb-4 border-b border-gray-300">Sunken Ships</li>
              <li className="pb-4 border-b border-gray-300">What She Said</li>
              <li className="pb-4 border-b border-gray-300">My Bro</li>
              <li className="pb-4 border-b border-gray-300">
                So You Don't Have To
              </li>
              <li className="pb-4 border-b border-gray-300">
                Interview With...
              </li>
              <li className="pb-9 border-b border-[#570095] ">Zikopko Memes</li>
            </ul>

            <ul className="text-[14px] grid my-4 gap-4 font-bold">
              <li className="flex justify-between  items-center gap-8">
                Jollof Road <HiArrowUpRight className="text-xs font-bold" />
              </li>
              <li className="flex justify-between items-center gap-8">
                Cholera Outbreak Update{" "}
                <HiArrowUpRight className="text-xs font-bold" />
              </li>
            </ul>

            <div className="my-20 text-[14px] grid gap-10">
              <p className="">Follow our socials</p>

              <div className="flex items-center gap-5">
                <BsTwitterX className="text-xl" />
                <BsInstagram className="text-xl" />
                <BsTiktok className="text-xl" />
                <LiaLinkedinIn className="text-xl" />
                <FaFacebookF className="text-xl" />
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;
