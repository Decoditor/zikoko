import { Dot } from "lucide-react";
import React from "react";
import { textReducer } from "../datas";
import { Link } from "react-router-dom";

function Boxes({ categories, category }) {
  const items = categories.filter((item) => item.category == category);
  const categoryText =
    category[0].toUpperCase() + category.slice(1).toLowerCase();
  return (
    <div className="md:px-[6rem] px-4">
      <h1 className="font-semibold mb-4 text-[20px] md:text-[40px] my-10 md:mt-20">
        {categoryText}
      </h1>
      <div className="text-[20px] grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 space-y-12">
        {items.map((item) => (
          <Link
            to={`/${item.category.toLowerCase().split(" ").join("")}/${
              item.id
            }`}
            key={item.id}
            className="flex-col flex gap-5 "
          >
            <img
              src={item.img}
              alt=""
              className="w-full aspect-square object-cover rounded-lg"
            />

            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-semibold text-green-700">
                {item.category}
              </p>
              <p className="text-[16px] md:text-[20px]">{item.title}</p>
              <p className="text-[8px] flex items-center md:text-[13px]">
                {item.creator} <Dot width={14} />{" "}
                <span className="opacity-50"> {item.date} </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
      <button className="text-[18.8px] text-[#570095] border border-[#570095] mb-10 hover:bg-[#570095] hover:text-white py-4 w-full rounded cursor-pointer">
        See More Articles
      </button>
    </div>
  );
}

export default Boxes;
