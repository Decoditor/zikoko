import React from "react";
import { Link } from "react-router-dom";

function Contents({ content }) {
  return (
    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
      {content.map((item) => (
        <Link
          to={`/${item.category.toLowerCase().split(" ").join("")}/${item.id}`}
          className="flex md:grid gap-3 items-center md:content-start"
          key={item.id}
        >
          <img
            src={item.img}
            alt=""
            className="w-[120px] md:w-full aspect-square md:rounded-t-lg"
          />
          <div className="grid gap-2 md:self-start">
            <p className="text-[13.7px] font-bold text-blue-800">
              {item.category}
            </p>
            <p className="text-[16px] font-bold"> {item.title} </p>
            <p className="text-[10px]">
              {item.creator}{" "}
              <span className="text-[8px] opacity-50">{item.date}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Contents;
