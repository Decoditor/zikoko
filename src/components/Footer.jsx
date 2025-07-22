import React from "react";
import logo from "./../assets/footLogo.png";
import { BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-[#19002e] text-white grid px-4 items-center">
      <div className="w-full flex justify-center py-10 border-b">
        <img src={logo} alt="" className="w-[188px]" />
      </div>

      <ul className="py-10 flex justify-center item flex-wrap gap-8 border-b text-[12px] border-gray-100">
        <li>About</li>
        <li>Advertise with us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms & Condition</li>
      </ul>

      <div className="flex py-10 border-b gap-4 justify-center text-xl">
        <BsTwitterX />
        <BsInstagram />
        <BsTiktok />
        <LiaLinkedinIn />
        <FaFacebookF />
      </div>
      <p className="pt-8 pb-20 text-center text-[12px]">
        Copyright &copy; 2018 - 2025. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
