import React from "react";
import { latest } from "../datas";

function Latest() {
  return (
    <div className="grid gap-8">
      {latest.map((item, idx) => (
        <div className="flex gap-3 items-center" key={idx}>
          <img src={item.img} alt="" className="w-[120px] aspect-square" />
          <div className="grid gap-2">
            <p className="text-[13.7px] font-bold text-blue-800">
              {item.category}
            </p>
            <p className="text-[16px] font-bold"> {item.title} </p>
            <p className="text-[10px]">
              {item.creator}{" "}
              <span className="text-[8px] opacity-50">{item.date}</span>
            </p>
          </div>
        </div>
      ))}

      <button className="text-[18.8px] font-bold text-[#570095] border border-[#570095] py-4 rounded cursor-pointer">
        See More Fresh Content
      </button>
    </div>
  );
}

export default Latest;
