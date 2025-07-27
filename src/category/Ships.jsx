import React from "react";
import CatContent from "./CatContent";
import ship1 from "./../assets/ship1.png";
import ship2 from "./../assets/ship2.png";

function Ships() {
  let topContent =
    "Do you want to go “God, when?” or shout “God forbid”? Ships has all of that and more for whatever relationship you find yourself in. All the stories about love, friendships, family and various other relationships among young Nigerians.";
  let links = ["Latest", "Love Life", "Sex Life", "Sunken Ships"];
  return (
    <CatContent
      topRightImg={ship1}
      bottomImg={ship2}
      category={"Ships"}
      topContent={topContent}
      links={links}
      bgColor="#b61313"
    />
  );
}
export default Ships;
