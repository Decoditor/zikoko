import React, { useState } from "react";
import Header from "../components/Header";
import Quizzes from "./Quizzes";
import InsideLife from "./InsideLife";
import Citizen from "./Citizen";
import Money from "./Money";
import Her from "./Her";

function Category() {
  const [togglecategory, setToggleCategory] = useState(0);
  return (
    <div>
      <Header />
      <div className="pt-30">
        {/* <Quizzes /> */}
        {/* <InsideLife /> */}
        {/* <Citizen /> */}
        {/* <Money /> */}
        <Her />
      </div>
    </div>
  );
}

export default Category;
