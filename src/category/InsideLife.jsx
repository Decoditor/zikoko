import React from "react";
import CatContent from "./CatContent";
import life1 from "./../assets/life1.png";
import life2 from "./../assets/life2.png";

function InsideLife() {
  let topContent =
    "Inside Life offers a little bit of everything, all the wild and hilarious things we have to deal with every day. This is the melting pot of life, love, sex and nostalgia.";
  let links = [
    "Latest",
    "Creators",
    "Interview With...",
    "Lockdown Diary",
    "Nigeria Horror Story",
    "NYSC Diary",
    "Oldies",
  ];
  return (
    <CatContent
      topRightImg={life1}
      bottomImg={life2}
      category={"Inside Life"}
      topContent={topContent}
      links={links}
      bgColor="#4b57f6"
    />
  );
}
export default InsideLife;
