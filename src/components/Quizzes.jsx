import React from "react";
import { quiz } from "../datas";
import Contents from "./Contents";

function Quizzes() {
  return (
    <div className="grid gap-8 my-24 px-4 md:px-[6rem]">
      <h1 className="text-2xl font-semibold">Quizzes</h1>
      <Contents content={quiz} />
      <button className="text-[18.8px] text-[#570095] border border-[#570095] hover:bg-[#570095] hover:text-white py-4 rounded cursor-pointer">
        Load More Quizzes
      </button>
    </div>
  );
}

export default Quizzes;
