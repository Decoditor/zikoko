import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle, BsPlay } from "react-icons/bs";
import { vidcontent, videos } from "../datas";
function Videos() {
  const [index, setIndex] = useState(0);

  function nextItem() {
    index < videos.length - 1 ? setIndex((prev) => prev + 1) : setIndex(0);
    console.log(index);
  }
  function prevItem() {
    // setIndex((prev) => prev - 1);
    index > 0 ? setIndex((prev) => prev - 1) : setIndex(2);
    console.log(index);
  }

  const items = videos[index];
  return (
    <div className="mt-90 bg-black relative pt-[32rem] text-white px-3 pb-10">
      <div className="absolute -top-[15rem] w-full right-0 px-3 z-1">
        <div className="">
          <h1 className="text-[24px] text-black font-semibold">Videos</h1>
          <img
            src={items.vid}
            alt=""
            className="min-h-[382px] max-h-[388px] w-full object-cover"
          />
        </div>
        <div className="bg-[#570095] px-7 py-6 grid gap-4">
          <p className="text-[#FFB415] text-[14px]">LATEST VIDEOS</p>
          <div className="flex gap-4 items-center">
            <BsArrowLeftCircle className="text-lg" onClick={prevItem} />
            <BsArrowRightCircle className="text-lg" onClick={nextItem} />
          </div>

          <p className="text-[10px]"> {items.source} </p>
          <p className="text-[18px]"> {items.title} </p>

          <button className="text-[14px] mt-3 flex items-center border text-center justify-center gap-2 py-4 rounded cursor-pointer">
            <BsPlay className="text-lg" /> Watch This Episode Now
          </button>
        </div>
      </div>

      <div className="">
        <h1 className="">Zikoko Originals</h1>

        <div className="grid grid-cols-2 space-x-4 space-y-8">
          {vidcontent.map((item, idx) => (
            <div className="" key={idx}>
              <img src={item.img} alt="" className="rounded-t-xl mb-2" />
              <div className="grid gap-2">
                <p className="text-[18px] font-bold"> {item.title} </p>
                <p className="text-[12px] font-thin opacity-70 ">
                  {" "}
                  {item.content}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="my-8 w-full py-4 rounded border cursor-pointer">
          See All Zikoko Originals
        </button>
      </div>
    </div>
  );
}

export default Videos;
