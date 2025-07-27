import React from "react";
import { hero } from "../datas";
import { BsDot } from "react-icons/bs";

function Hero() {
  return (
    <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
      {hero.map((item, idx) => (
        <div className="grid gap-4  py-8 border-b-4" key={idx}>
          <img src={item.img} alt="" className="aspect-square rounded-lg" />
          <div className="grid gap-4">
            <p className="text-[14px] font-bold text-blue-700">
              {item.category}
            </p>
            <p className="text-[24px] font-bold leading-tight">{item.title}</p>
            <p className="flex items-center text-[13px]">
              {item.creator} <BsDot />{" "}
              <span className="text-[11px] opacity-50"> {item.date} </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
