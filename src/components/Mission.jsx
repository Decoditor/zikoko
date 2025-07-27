import React from "react";
import Card, { CardContent } from "./ui/card";

function Mission() {
  return (
    <Card className="lg:mx-[6rem] mx-8 my-20 border-[#570095] rounded-none lg:px-10 lg:py-16">
      <CardContent className="flex flex-col  items-center md:items-baseline">
        <p className="text-[18px] border-b border-[#570095] text-[#570095] font-semibold mb-4 py-3 w-fit">
          OUR MISSION
        </p>
        <p className="lg:text-[20px] text-center lg:text-start text-[12px]">
          Zikoko amplifies African youth culture by curating and creating smart
          and joyful content for young Africans and the world.
        </p>
      </CardContent>
    </Card>
  );
}

export default Mission;
