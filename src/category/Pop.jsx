import React from "react";
import CatContent from "./CatContent";
import pop1 from "./../assets/pop1.png";
import pop2 from "./../assets/pop2.png";

function Pop() {
  let topContent =
    "Here, we talk about everything you watch, read or listen to at the moment. Get your daily fix of everything entertainment and pop culture.";
  let links = [
    "Latest",
    "#Bumpthis",
    "Fashion",
    "Just Imagine",
    "Made in Nigeria",
    "Queens of Nollywood",
    "So You Don't Have To",
  ];
  return (
    <CatContent
      topRightImg={pop1}
      bottomImg={pop2}
      category={"Pop"}
      topContent={topContent}
      links={links}
      bgColor="#ff627b"
    />
  );
}
export default Pop;
