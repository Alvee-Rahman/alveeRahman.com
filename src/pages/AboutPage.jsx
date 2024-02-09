import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLightbulb,
  faHouse,
  faUser,
  faAddressBook,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Allskills from "../Components/Allskills";
import Frontend from "../Components/Frontend";
import BSkills from "../Components/BSkills";
import Fskills from "../Components/Fskills";
import Tools from "../Components/Tools";

export default function Aboutpage() {
  const [activeIndex, setActiveIndex] = useState(4);

  const components = [
    <Frontend key="fskills" />,
    <BSkills key="Bskills" />,
    <Fskills key="Fskills" />,
    <Tools key="Tools" />,
    <Allskills key="allskills" />,
  ];
  const AllButtonClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const allSkillsButton = document.getElementById("button-4");
    if (allSkillsButton) {
      allSkillsButton.classList.add("bg-orange-700");
    }
  }, []);

  return (
    <>
      <section className=" bg-black min-h-screen m-0 overflow-y-hidden ">
        <h1 className="text-[3.5rem] text-center pt-5 font-medium text-white">
          ABOUT <span className="text-orange-500">ME</span>
        </h1>
        <hr className="w-[700px] mx-auto" />

        <div className=" grid grid-cols-12 text-white">
          <div className="col-span-6  ">
            <p className="text-[2.5rem] pt-7 font-bold ml-20 mb-10">
              EDUCATION
            </p>
            <ol className="  space-y-16 leading-8 ml-20 pl-10 border-l relative">
              <li className="c">
                <span className="absolute -left-7 p-2 justify-center flex bg-blue-900 border-[10px] border-zinc-900 shadow-2xl shadow-zinc-500 rounded-full">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="text-[1.1rem]"
                  />
                </span>

                <h3 className="uppercase pt-10 text-[1rem] font-semibold">
                  Bsc in Computer Science and Engineering -
                  <span className="text-zinc-600">Aiub,Dhaka</span>
                </h3>
                <span className="text-orange-500">(2019-2023)</span>
                <p className="text-gray-400">
                  with a very good result, I've completed my bachelor degree on
                  civil engineering from this university.
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="absolute -left-7 p-2 justify-center flex bg-blue-900 border-[10px] border-zinc-900 shadow-2xl shadow-zinc-500 rounded-full"
                  />
                </span>
                <h3 className="uppercase pt-10 text-[1rem] font-semibold">
                  higher secondary certificate -
                  <span className="text-zinc-600">Gmmsc college,dhaka</span>
                </h3>
                <span className="text-orange-500">(2017-2019)</span>
                <p className="text-gray-400">
                  I've successfully earned a HSC Degree with 4.50 CGPA out of 5.
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="absolute -left-7 p-2 justify-center flex bg-blue-900 border-[10px] border-zinc-900 shadow-2xl shadow-zinc-500 rounded-full"
                  />
                </span>
                <h3 className="uppercase pt-10 text-[1rem] font-semibold">
                  secondary school certificate-
                  <span className="text-zinc-600">DGBHS dhaka</span>
                </h3>
                <span className="text-orange-500">2017</span>
                <p className="text-gray-400">
                  I've completed my school education from Science department
                  from this school.
                </p>
              </li>
            </ol>
          </div>
          <div className="col-span-5 text">
            <p className="text-[2.5rem] pt-7 font-bold ml-20 mb-10">
              EXPERRIENCE
            </p>
            <ol className="space-y-16 leading-8 ml-20 pl-10 border-l relative">
              <li>
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-[20px] absolute -left-6 p-2 justify-center flex bg-blue-900 border-[10px] border-zinc-900 shadow-2xl shadow-zinc-500 rounded-full"
                />
                <p className="pt-10 blue-900">
                  Currently I have no industrial experience . But i egarly
                  motivate myself for an internship
                </p>
              </li>
            </ol>
          </div>
          <div className=" navbar ">
            <ul className="space-y-5  mt-[95px] fixed right-5 ">
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
                <Link to="">
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
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-[1.5rem] h-6 w-6  rounded-full p-3 bg-zinc-800"
                />
              </li>
            </ul>
          </div>
        </div>

        <h1 className="text-white uppercase text-[2.5rem] font-bold text-center mt-[100px]">
          <span className="text-orange-500">my</span>skills
        </h1>
        <p className="text-center text-zinc-400 my-[50px] text-[1.5rem] mx-[100px] font-medium">
          Always eager to learn different technologies related to web
          development. Being a friendly person, I love to take challenges and
          always try to fulfill my responsibilities within the deadline.
        </p>
        <hr className=" text-white w-[700px] mx-auto my-2" />
        <div className="space-x-[80px] mt-[50px]">
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
          <button
            id="button-3"
            onClick={() => AllButtonClick(3)}
            className={`text-white  px-[40px] py-[10px] text-center text-[20px] font-bold ${
              activeIndex === 3 ? "bg-orange-700" : "bg-zinc-800"
            }`}
          >
            Tools
          </button>

          <button
            id="button-4"
            className={`text-white  px-[40px] py-[10px] text-center text-[20px] font-bold ${
              activeIndex === 4 ? "bg-orange-700" : "bg-zinc-800"
            }`}
            onClick={() => AllButtonClick(4)}
          >
            All Skills
          </button>
        </div>

        <div className="h-[300px]">{components[activeIndex]}</div>
      </section>
    </>
  );
}
