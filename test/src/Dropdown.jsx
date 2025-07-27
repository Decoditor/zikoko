import React, { useEffect, useRef, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Dropdown() {
  const box = useRef(null);
  const [hide, setHide] = useState(true);
  useEffect(() => {
    function handleClick(e) {
      //   e.preventDefault();
      if (!box.current.contains(e.target)) {
        setHide(true);
        console.log("clicked");
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div className=" w-fit h-fit relative" ref={box}>
      <button
        className="border px-4 py-2 rounded-lg cursor-pointer"
        onClick={() => setHide(!hide)}
      >
        Open
      </button>

      {!hide && (
        <ul className="p-4 border w-fit rounded-lg pr-0 grid gap-4 absolute whitespace-nowrap">
          <li className="">My Account</li>
          <li className="">My Account</li>
          <li className="">My Account</li>
          <li className="">My Account</li>
          <li className="relative flex items-center pr-2 gap-4 group">
            My Menus <MdOutlineArrowDropDown />
            <div className="absolute left-full top-2 p-4 bg-gray-200 hidden group-hover:block">
              <p className="">Menu1</p>
              <p className="">Menu2</p>
              <p className="">Menu3</p>
              <p className="">Menu4</p>
            </div>
          </li>
          <li className="">My Account</li>
          <li className="">My Account</li>
          <li className="">My Account</li>
          <li className="">My Account</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
