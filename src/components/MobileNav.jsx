import React from "react";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { MdMessage } from "react-icons/md";
import { TbMessage2Question } from "react-icons/tb";

function MobileNav() {
  return (
    <div className="bg-[#551abb] text-[#ffffff99] grid grid-cols-5 text-[12px]">
      <p className="flex flex-col justify-center items-center py-4  gap-2">
        <HiHome className="text-xl" /> Home
      </p>
      <p className="flex flex-col justify-center items-center py-4 border-l border-gray-500 gap-2">
        <TbMessage2Question className="text-xl" /> Quizzes
      </p>
      <p className="flex flex-col justify-center items-center py-4 border-l border-gray-500 gap-2">
        <AiOutlinePlaySquare className="text-xl" /> Videos
      </p>
      <p className="flex flex-col justify-center items-center py-4 border-l border-gray-500 gap-2">
        <BiCategory className="text-xl" /> Categories
      </p>
      <p className="flex flex-col justify-center items-center py-4 border-l border-gray-500 gap-2">
        <MdMessage className="text-xl" /> Newsletters
      </p>
    </div>
  );
}

export default MobileNav;
