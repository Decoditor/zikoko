import React from "react";
import CatContent from "./CatContent";
import aluta2 from "./../assets/aluta2.png";
import aluta1 from "./../assets/aluta1.png";

function Aluta() {
  let topContent =
    "Aluta Container (or whatever it is Gen Xers say), welcome to your source for everything to do with university and student life in Nigeria. We bring you personal experiences, gist and expo for upcoming university students.";
  let links = ["Latest", "Campus"];
  return (
    <CatContent
      topRightImg={aluta2}
      bottomImg={aluta1}
      category={"Aluta and Chill"}
      topContent={topContent}
      links={links}
      bgColor="#3c95fa"
    />
  );
}
export default Aluta;
