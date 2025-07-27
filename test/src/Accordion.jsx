import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowUpward } from "react-icons/md";
import { accordion } from "./data";
import { IoMdArrowDropup } from "react-icons/io";

function Accordion() {
  const [showText, setShowText] = useState(-1);
  const imgRef = useRef(null);
  useEffect(() => {
    const img = imgRef.current;

    function onLoad() {
      img.classList.add("opacity-100");
    }

    img.addEventListener("load", onLoad);

    return () => {
      img.removeEventListener("load", onLoad);
    };
  });
  return (
    <div className="mt-100 w-full p-20 lg:w-2/3 border">
      {accordion.map((item, idx) => (
        <div className={` ${idx === 0 ? "" : "border-t"} py-4`} key={idx}>
          <div
            className="pb-2 flex items-center justify-between"
            onClick={() => setShowText((prev) => (prev === idx ? -1 : idx))}
          >
            <p className=" hover:underline"> {item.title} </p>
            {idx === showText ? (
              <IoMdArrowDropup />
            ) : (
              <MdOutlineArrowDropDown />
            )}
          </div>
          {idx === showText && <p className=""> {item.content} </p>}
        </div>
      ))}

      <div className="bg-[url('/img1.jpg')] bg-cover h-50">
        <img
          src="/img.jpeg"
          alt="image here"
          className="w-full opacity-0"
          ref={imgRef}
        />
      </div>
    </div>
  );
}

export default Accordion;
