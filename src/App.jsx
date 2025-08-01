import React, { useActionState, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Videos from "./components/Videos";
import Subscribe from "./components/Subscribe";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import Quizzes from "./components/Quizzes";
import Mission from "./components/Mission";
import Search from "./components/Search";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [state, dipatch, isPending] = useActionState(handleSubmit, "");
  function handleSubmit(prev, formdata) {
    if (formdata) {
      console.log(formdata.get("search"));
      return formdata.get("search");
    }
    return;
  }
  return (
    <div className="bg-[#fdfbff] pb-10 scroll h-screen overflow-auto">
      <Header
        setShowResult={setShowResult}
        dispatch={dipatch}
        isPending={isPending}
      />
      {showResult && (
        <div className="">
          <div className="px-4 lg:px-[6rem] my-30 grid gap-20">
            <Hero />
            <Latest />
          </div>
          <Videos />
          <Subscribe />
          <Categories />
          <Subscribe />
          <Quizzes />
          <Mission />
          <Footer />
          <div className="w-full fixed bottom-0">
            <MobileNav />
          </div>
        </div>
      )}

      {!showResult && <Search word={state} />}
    </div>
  );
}

export default App;
