import React from "react";
import CatContent from "./CatContent";
import her1 from "./../assets/her1.png";
import her2 from "./../assets/her2.png";

function Her() {
  let topContent =
    "She? no HER, the community of African women from all walks of life. Because you're not alone in your experience as an African woman, welcome to HER.";
  let links = ["Latest", "Talk True", "What She Said"];
  return (
    <CatContent
      topRightImg={her1}
      bottomImg={her2}
      category={"Her"}
      topContent={topContent}
      links={links}
      bgColor="#a196ff"
    />
  );
}
export default Her;
