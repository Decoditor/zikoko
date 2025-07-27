import React from "react";
import CatContent from "./CatContent";
import man1 from "./../assets/man1.png";
import man2 from "./../assets/man2.png";

function ManDem() {
  let topContent =
    "Stories of men from all walks of life, here's all our content aimed at exploring the male experience. Get all the insider gist about what Nigerian men really think and talk about in the 21st century.";
  let links = ["Latest", "Man Like", "My Bro"];
  return (
    <CatContent
      topRightImg={man1}
      bottomImg={man2}
      category={"Man Dem"}
      topContent={topContent}
      links={links}
      bgColor="#9a2bc2"
    />
  );
}
export default ManDem;
