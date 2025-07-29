import React from "react";
import { useParams } from "react-router-dom";
import { latest } from "../datas";
import Header from "../components/Header";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Subscribe from "../components/Subscribe";
import { UserCircleIcon } from "lucide-react";
import Contents from "../components/Contents";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
function Post() {
  const param = useParams();
  const post = latest.find((item) => item.id == param.post);
  const paragraphs = post.content.split("\n\n");
  const more = latest.filter((item) => item.creator === post.creator);
  return (
    <div className="">
      <Header />
      <div className="">
        <div className="flex lg:px-[6rem] lg:h-screen">
          <div className="h-full lg:flex flex-col justify-center text-xl items-center gap-8 hidden lg:block">
            <p className="text-[14px] text-gray-500">Share</p>
            <BsWhatsapp /> <BsTwitterX /> <FaFacebookF /> <FaLinkedinIn />
          </div>
          <div className="w-full h-full overflow-y-scroll pt-35">
            <div className="px-4">
              <h2 className="text-[12px] font-bold text-green-800">
                {post.category}
              </h2>
              <h1 className="text-[32px] md:text-[56px] mb-8 font-bold text-gray-700">
                {post.title}
              </h1>
              <div className="text-[14px] text-gray-400">
                <p className="flex gap-4">
                  Written By:{" "}
                  <span className="underline cursor-pointer">
                    {post.creator}
                  </span>
                </p>
                <p className="">Last Updated {post.date}</p>
                <p className="flex gap-4 items-center mt-4">
                  Share this story{" "}
                  <span className="text-black flex gap-4 text-lg">
                    <BsWhatsapp /> <BsTwitterX /> <FaFacebookF />{" "}
                    <FaLinkedinIn />
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-14 font-i flex flex-col items-center gap-4 px-4">
              <p className="border-b-2 border-b-black pb-4 mb-2 italic">
                {paragraphs[0]}{" "}
              </p>
              <p className=""> {paragraphs[1]} </p>
              <img
                src={post.img}
                alt=""
                className="w-full my-4 max-w-[25rem]"
              />
              <p className="">{paragraphs.slice(2, 8)}</p>
              <Subscribe />
              <p className="">{paragraphs.slice(9)}</p>
            </div>

            <div className="py-8 bg-white px-12 grid gap-8 my-20">
              <p className="flex flex-col w-full text-[14px] bg-white text-gray-400 gap-8 items-center mt-4">
                Share this story{" "}
                <span className="text-black flex gap-6 text-xl">
                  <BsWhatsapp /> <BsTwitterX /> <FaFacebookF /> <FaLinkedinIn />
                </span>
              </p>
              <ul className="text-[12px] flex gap-4 w-full items-center justify-center">
                <li className="">Abroad life</li>
                <li className="">Citizen</li>
                <li className="">Break Up</li>
                <li className="">Relationship</li>
                <li className="">uk</li>
              </ul>
            </div>

            <div className="px-16 flex flex-col items-center text-[14px] bg-white py-8 gap-8 mb-60">
              <p className="">About the Authors</p>
              <UserCircleIcon className="text-9xl w-25 h-25" />
              <p className="text-center flex flex-col text-[18px] font-bold">
                {post.creator}{" "}
                <span className="px-8 text-[14px] w-72 font-normal">
                  Misogyny and social injustice hate to see me coming
                </span>
              </p>
            </div>
          </div>

          <div className="w-[30rem] hidden lg:block"></div>
        </div>

        <div className="px-4 text-[24px] font-semibold grid gap-8 lg:px-[6rem]">
          <h1 className="">More By This Author</h1>
          <Contents content={more} />
        </div>

        <Mission />

        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}

export default Post;
