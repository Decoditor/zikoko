import React from "react";
import CatContent from "./CatContent";
import chop1 from "./../assets/chop1.png";
import chop2 from "./../assets/chop2.png";

function Chopist() {
  let topContent = "Everything food, everything enjoyment. That's Chopist.";
  let links = ["Latest", "Drink", "Eat", "Jollof Road", "Ranked"];
  return (
    <CatContent
      topRightImg={chop1}
      bottomImg={chop2}
      category={"Chopist"}
      topContent={topContent}
      links={links}
      bgColor="#ff8e15"
    />
  );
}
export default Chopist;
