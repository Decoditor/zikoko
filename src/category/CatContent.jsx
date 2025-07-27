import React, { useState } from "react";
import catBg from "./../assets/catBg.png";
import Boxes from "../components/Boxes";
import { latest } from "../datas";
import Subscribe from "../components/Subscribe";
import Mission from "../components/Mission";
import Footer from "../components/Footer";

function CatContent({
  topRightImg,
  bottomImg,
  category,
  topContent,
  bgColor,
  links,
}) {
  const [activeLink, setActiveLink] = useState(0);
  console.log(bgColor);
  return (
    <div className="mb-40">
      <div
        className={`bg-[${bgColor}] h-[20rem] md:h-[25rem] relative flex flex-col items-center lg:px-[6rem]`}
      >
        <img src={catBg} alt="" className="h-full object-cover absolute" />
        <img
          src={topRightImg}
          alt=""
          className="w-[10rem] md:w-[15rem] absolute  -top-5 left-0"
        />
        <img
          src={bottomImg}
          alt=""
          className="w-[10rem] absolute md:w-[15rem]  bottom-0 right-0"
        />

        <div className="text-white z-2 px-14 flex items-center justify-end md:justify-center sm:w-[45rem] h-full pb-10 flex-col gap-8">
          <h1 className="text-[40px] border-b-2 child z-10 md:text-[64px] opacity-90 md:border-b-4 md:border-opacity-20 border-b-gray-300">
            {category}
          </h1>
          <p className="text-[18px] text-center z-10 md:text-[14px]">
            {topContent}
          </p>
        </div>
        <ul className="w-full py-4 rounded shadow-md bg-white z-10 translate-y-1/2 md:flex justify-center gap-4 px-20 hidden md:block">
          {links.map((item, id) => (
            <li
              onClick={() => setActiveLink(id)}
              className={`px-2 py-2 cursor-pointer ${
                activeLink == id ? "border-b-2 border-b-black font-bold" : ""
              }`}
              key={id}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Boxes categories={latest} category={"Latest Stories"} />
      <Subscribe />
      <Boxes categories={latest} category={"FUNDS"} />
      <Boxes categories={latest} category={"GBEDU"} />

      <div className="">
        <Mission />
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
}

export default CatContent;
