import React from "react";
import CatContent from "./CatContent";
import mon1 from "./../assets/mon1.png";
import mon2 from "./../assets/mon2.png";

function Money() {
  let topContent =
    "We establish if money struggles are the same all over the world, in a fun, relatable way, of course. Savings or Current? How do people make, spend, protect and grow their money? Let's help you make the most out of money.";
  let links = [
    "Latest",
    "A Week in the Life",
    "Hustle",
    "Hustleprint",
    "Game of Votes",
    "love Currency",
    "Naira Life",
    "Personal Finance",
  ];
  return (
    <CatContent
      topRightImg={mon2}
      bottomImg={mon1}
      category={"Money"}
      topContent={topContent}
      links={links}
      bgColor="#1f8662"
    />
  );
}
export default Money;
