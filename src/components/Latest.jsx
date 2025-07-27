import React from "react";
import { latest } from "../datas";
import Contents from "./Contents";

function Latest() {
  return (
    <div className="grid gap-8">
      <Contents content={latest} />
      <button className="text-[18.8px] text-[#570095] border border-[#570095] hover:bg-[#570095] hover:text-white py-4 rounded cursor-pointer">
        See More Fresh Content
      </button>
    </div>
  );
}

export default Latest;
