import React from "react";
import logo from "./../assets/footLogo.png";
import { BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-[#19002e] text-white grid px-4 items-center lg:py-14">
      <div className="w-full flex justify-center py-10 border-b md:border-none md:py-0">
        <img src={logo} alt="" className="w-[188px]" />
      </div>
      <div className="pt-8 lg:block hidden">
        <p className=" text-center text-[12px]">
          Zikoko is a Big Cabal Media brand.
        </p>
        <p className=" text-center text-[12px]">
          Copyright &copy; 2018 - 2025. All rights reserved.
        </p>
      </div>
      <ul className="py-10 flex justify-center block md:hidden item flex-wrap gap-8 border-b text-[12px] border-gray-100">
        <li>About</li>
        <li>Advertise with us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms & Condition</li>
      </ul>

      <div className="flex py-10 md:py-10 border-b md:border-0 gap-4 justify-center text-xl">
        <BsTwitterX />
        <BsInstagram />
        <BsTiktok />
        <LiaLinkedinIn />
        <FaFacebookF />
      </div>
      <p className="pt-8 pb-20 text-center text-[12px] md:hidden block">
        Copyright &copy; 2018 - 2025. All rights reserved.
      </p>
      <ul className="py-6 md:flex justify-center item flex-wrap gap-8 text-[12px] opacity-30 hidden md:block">
        <li>About</li>
        <li>Advertise with us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms & Condition</li>
      </ul>
    </div>
  );
}

export default Footer;
