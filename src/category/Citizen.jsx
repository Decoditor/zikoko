import React from "react";
import CatContent from "./CatContent";
import cit1 from "./../assets/cit1.png";
import cit2 from "./../assets/cit2.png";

function Citizen() {
  let topContent =
    "Welcome to Citizen. We will help you easily understand politics, policy, and governance — and take action. Follow us while we follow the news.";
  let links = [
    "Latest",
    "1000 Ways to Japa",
    "Abroad Life",
    "Citizen History",
    "Game of Votes",
    "Navigating Nigeria",
    "The Nigeria Voter",
    "Wait First!",
  ];
  return (
    <CatContent
      topRightImg={cit1}
      bottomImg={cit2}
      category={"Citizen"}
      topContent={topContent}
      links={links}
      bgColor="#1f8662"
    />
  );
}
export default Citizen;
