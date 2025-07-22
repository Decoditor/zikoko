import React, { useState } from "react";
import Logo from "./../assets/logo.png";
import { BiMenu, BiSearch, BiX } from "react-icons/bi";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsInstagram, BsLinkedin, BsTiktok, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="p-4 md:px-[6rem] lg:px-[12rem] bg-white  ">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="" className="w-[125px] h-[25px]" />

        <div className="flex gap-4 items-center">
          <BiSearch className="text-3xl" />
          <BiMenu
            className="text-4xl cursor-pointer"
            onClick={() => setOpenNav(true)}
          />
        </div>
      </div>

      <ul>
        <li>Quizzes</li>
        <li>Insiide Life</li>
        <li>Citizen</li>
        <li>Money</li>
        <li>Her</li>
        <li>Man Dem</li>
      </ul>
      {openNav && (
        <nav className="text-[#570095] fixed right-0 z top-0 z-1 h-full w-full flex">
          <div
            className="w-full h-full bg-gray-700 opacity-50"
            onClick={() => setOpenNav(false)}
          ></div>
          <div className="pt-18 pb-30 p-8 bg-white min-w-[20rem] relative h-full overflow-y-auto">
            <BiX
              className="absolute top-4 right-8 cursor-pointer text-xl"
              onClick={() => setOpenNav(false)}
            />
            <ul className="grid gap-8 font-semibold border-b border-gray-300 pb-10 mb-4 text-[14px]">
              <li className="border-b-gray-300 border-b pb-4">Quizzes</li>
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
              <li className="flex justify-between  items-center gap-10">
                Jollof Road <HiArrowUpRight className="text-xs font-bold" />
              </li>
              <li className="flex justify-between items-center gap-10">
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
