import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faAddressBook,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
export default function ProjectPage() {
  const [activeIndex, setActiveIndex] = useState(2);

  const AllButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className="min-h-screen bg-black">
        <h1 className="text-white text-[2.5rem] font-bold text-center py-[1.5rem]">
          MY <span className="text-orange-600">PROJECTS</span>
        </h1>
        <div className="text-white ">
          <p className="text-center  w-[900px] mx-auto  text-[1rem] font-bold text-zinc-400">
            To start a project, I think about its design first. Then I collect
            other informations relevant to it. Then I decide what should be the
            process, how I should build it. I choose technology depending on the
            project type. Let me show you some of my works.
          </p>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-11">
            <div className="flex  mx-auto  mt-10 space-x-10 pl-[440px]">
              <button></button>

              <button
                id="button-0"
                className={`text-white  px-[40px] py-[10px] text-center text-[20px] font-bold ${
                  activeIndex === 0 ? "bg-orange-700" : "bg-zinc-800"
                }`}
                onClick={() => AllButtonClick(0)}
              >
                Frontend
              </button>
              <button
                id="button-1"
                className={`text-white  px-[40px] py-[10px] text-center text-[20px] font-bold ${
                  activeIndex === 1 ? "bg-orange-700" : "bg-zinc-800"
                }`}
                onClick={() => AllButtonClick(1)}
              >
                Backend
              </button>
              <button
                id="button-2"
                className={`text-white  px-[40px] py-[10px] text-center text-[20px] font-bold ${
                  activeIndex === 2 ? "bg-orange-700" : "bg-zinc-800"
                }`}
                onClick={() => AllButtonClick(2)}
              >
                Fullstack
              </button>
            </div>
          </div>
          <div className=" navbar text-white ">
            <ul className="space-y-5   fixed right-5 ">
              <li></li>

              <li className="cursor-pointer">
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="text-[1.5rem] h-6 w-6  rounded-full p-3 bg-zinc-800"
                  />
                </Link>
              </li>
              <li className="">
                <Link to="/about">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-[1.5rem] h-6 w-6  rounded-full p-3 bg-zinc-800"
                  />
                </Link>
              </li>
              <li className="">
                <Link to="/contact">
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className="text-[1.5rem] h-6 w-6  rounded-full p-3 bg-zinc-800"
                  />
                </Link>
              </li>
              <li className="">
                <Link to="/project">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-[1.5rem] h-6 w-6  rounded-full p-3 bg-zinc-800"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
