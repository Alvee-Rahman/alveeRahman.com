import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHouse,
  faUser,
  faAddressBook,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <>
      <section
        className="Container grid grid-cols-12 min-h-screen"
        style={{
          backgroundImage: "url('../src/assets/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="col-span-5 items-end">
          <img
            src="../src/assets/alvee.png"
            alt="alvee"
            className="h-[650px] w-[600px] object-cover  mx-auto mt-[100px] shadow-2xl shadow-zinc-800 border-solid border-black rounded"
          />
        </div>
        <div className=" col-span-6  self-center">
          <div>
            <p className="text-[1.8rem] text-white">
              Hello! I'm
              <span className="text-orange-500"> Alvee Rahman.</span>
            </p>

            <h1 className="text-[2.8rem] font-bold text-orange-500">
              A Web Application Developer.
            </h1>
            <p className="leading-6 text-white">
              With 1+ years of self and academic knowledge in web development,
              I'm the right person here to develop a modern and killer looking
              fully responsive website for you. I'm fluent in English, a quick
              responder and friendly person. I am committed to deliver my
              projects within the deadline.
            </p>
            <button className="bg-orange-500 py-3 px-10 my-4 rounded-[30px] text-[20px] font-semibold text-white">
              Download my Resume
            </button>
          </div>
        </div>
        <div className=" navbar">
          <ul className="space-y-5  mt-[200px] fixed right-5  text-white ">
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
              <Link to="about">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-[1.5rem] h-6 w-6  rounded-full p-3 bg-zinc-800"
                />
              </Link>
            </li>
            <li className="">
              <Link to="contact">
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="text-[1.5rem] h-6 w-6  rounded-full p-3 bg-zinc-800"
                />
              </Link>
            </li>
            <li className="">
              <Link to="project">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-[1.5rem] h-6 w-6  rounded-full p-3 bg-zinc-800"
                />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
