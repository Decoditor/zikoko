import React from "react";
import CatContent from "./CatContent";
import her1 from "./../assets/her1.png";
import her2 from "./../assets/her2.png";

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
      topRightImg={her1}
      bottomImg={her2}
      category={"Pop"}
      topContent={topContent}
      links={links}
      bgColor="#ff627b"
    />
  );
}
export default Pop;
