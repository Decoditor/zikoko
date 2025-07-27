import React from "react";
import Card, { CardHeader, CardTitle } from "./ui/card";
import { categories } from "../datas";

function Categories() {
  return (
    <div className="my-12 px-4 md:px-[6rem]">
      <h1 className="md:text-[48px] text-xl mb-4 font-semibold">Categories</h1>
      <p className="text-[18px] hidden lg:block my-4">
        Here's a rabbit hole of stories to lose yourself in:
      </p>

      <div className="text-[20px] grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 space-y-12">
        {categories.map((item, id) => (
          <div key={id} className="grid gap-5">
            <img
              src={item.img}
              alt=""
              className="w-full md:h-[282px] aspect-square object-cover rounded-lg"
            />
            {item.categories}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
