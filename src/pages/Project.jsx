import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faAddressBook,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
export default function Project() {
  return (
    <>
      <section className="min-h-screen bg-black">
        <h1 className="text-white text-[2.5rem] font-bold text-center py-[1.5rem]">
          MY <span className="text-orange-600">PROJECTS</span>
        </h1>
        <div className="text-white ">
          <p className="text-center  w-[900px] mx-auto ">
            To start a project, I think about its design first. Then I collect
            other informations relevant to it. Then I decide what should be the
            process, how I should build it. I choose technology depending on the
            project type. Let me show you some of my works.
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-11"></div>
          <div className=" navbar text-white ">
            <ul className="space-y-5  mt-[44px] fixed right-5 ">
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
      </section>
    </>
  );
}
