import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Videos from "./components/Videos";
import Subscribe from "./components/Subscribe";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <div className="bg-[#fdfbff] pb-10 scroll h-screen overflow-auto">
      <div className="fixed w-full top-0 z-20">
        <Header />
      </div>
      <div className="px-4 my-30 grid gap-20">
        <Hero />
        <Latest />
      </div>
      <Videos />
      <Subscribe />
      {/* <Categories /> */}
      <Footer />
      <div className="w-full fixed bottom-0">
        <MobileNav />
      </div>
    </div>
  );
}

export default App;
