import React from "react";
import CatContent from "./CatContent";
import quizImg1 from "./../assets/quizImg1.png";
import quizImg2 from "./../assets/quizImg2.png";

function Quizzes() {
  let topContent =
    "What kind of bread are you? Are you smarter than a five year old? Will you ever find love? These are the kinds of important questions Zikoko Quizzes will answer for you.";
  let links = [
    "Latest",
    "Funds",
    "Gbedu",
    "Generation Wars",
    "Green White Quiz",
    "I Too Sabi",
    "In Your Feels",
    "Long Throat",
    "Movie Buff",
  ];
  return (
    <CatContent
      topRightImg={quizImg1}
      bottomImg={quizImg2}
      category={"Quizzes"}
      topContent={topContent}
      links={links}
      bgColor="#570095"
    />
  );
}
export default Quizzes;
