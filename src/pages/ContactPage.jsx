import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faAddressBook,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <>
      <section className="bg-black text-white min-h-screen m-0 overflow-y-hidden">
        <h1 className="text-[2.5rem] text-center py-[50px] font-bold">
          <span className="text-orange-600">CONTACT</span> WITH ME
        </h1>
        <div className=" grid grid-cols-12">
          <div className=" col-span-11 ">
            <div className="grid grid-cols-12">
              <div className="col-span-6 pl-[100px] ">
                <h3 className="text-[1.5rem] font-bold text-orange-700">
                  NEVER HESITATE, PLEASE!
                </h3>
                <p className="pt-3">
                  Feel free to get in touch with me. I'm always open to
                  discussing new projects or opportunities to be part of your
                  visions.
                </p>
                <p className="pt-3 text-orange-700">
                  I am free to be hired today !
                </p>
              </div>
              <form action="" className="min-w-fit ">
                <div className="flex  space-x-10">
                  <input
                    type="text"
                    placeholder="your name"
                    className=" w-[240px] p-[10px] rounded bg-zinc-900"
                  />
                  <input
                    type="text"
                    placeholder="your email"
                    className=" w-[240px] p-[10px] rounded  bg-zinc-900"
                  />
                </div>

                <div className="my-[30px]">
                  <input
                    type="text"
                    placeholder="subject"
                    className="w-[520px] p-[10px] rounded  bg-zinc-900"
                  />
                </div>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write here"
                  className="w-[520px] p-[10px] rounded  bg-zinc-900"
                ></textarea>

                <button
                  type="Submit"
                  className="bg-orange-600 px-[30px] py-1 text-[1.3rem] font-bold rounded mt-4"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className=" navbar">
            <ul className="space-y-5  mt-[40px] fixed right-5  text-white ">
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
              <li className="/contact">
                <Link>
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
