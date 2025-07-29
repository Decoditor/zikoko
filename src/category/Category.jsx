// import React, { useState } from "react";
import Header from "../components/Header";
import Quizzes from "./Quizzes";
import InsideLife from "./InsideLife";
import Citizen from "./Citizen";
import Money from "./Money";
import Her from "./Her";
import ManDem from "./ManDem";
import Pop from "./Pop";
import Ships from "./Ships";
import Chopist from "./Chopist";
import Aluta from "./Aluta";
import { useParams } from "react-router-dom";

function Category() {
  // const [togglecategory, setToggleCategory] = useState(0);
  const param = useParams();
  // console.log(param.category);
  return (
    <div>
      <Header />
      <div className="pt-30">
        {param.category == "quizzes" ? (
          <Quizzes />
        ) : param.category == "insidelife" ? (
          <InsideLife />
        ) : param.category == "citizen" ? (
          <Citizen />
        ) : param.category == "money" ? (
          <Money />
        ) : param.category == "her" ? (
          <Her />
        ) : param.category == "mandem" ? (
          <ManDem />
        ) : param.category == "pop" ? (
          <Pop />
        ) : param.category == "ships" ? (
          <Ships />
        ) : param.category == "chopist" ? (
          <Chopist />
        ) : param.category == "alutaandchill" ? (
          <Aluta />
        ) : null}
      </div>
    </div>
  );
}

export default Category;
