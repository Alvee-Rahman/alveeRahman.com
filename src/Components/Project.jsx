import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
export default function Project() {
  return (
    <>
      <div className="mx-auto w-[650px] h-[300px] border-[1px] border-red-600 rounded-2xl">
        <h3 className="uppercase pl-[20px] pt-[20px] font-bold text-[1rem] text-orange-600">
          prd management System
        </h3>
        <ul className="flex  pl-[20px] space-x-3 pt-[10px] mt-2">
          <li className="bg-gray-800 rounded-full px-4 font-semibold text-white">
            html
          </li>
          <li className="bg-gray-800 rounded-full px-4 font-semibold text-white">
            tailwind css
          </li>
          <li className="bg-gray-800 rounded-full px-4 font-semibold text-white">
            react
          </li>
          <li className="bg-gray-800 rounded-full px-4 font-semibold text-white">
            next.js
          </li>
          <li className="bg-gray-800 rounded-full px-4 font-semibold text-white">
            postgresql
          </li>
        </ul>
        <p className=" pl-[20px] pt-4 font-bold text-orange-600">
          Develope for project requirement documentation automation
        </p>
        <p className="pl-[20px] pt-4 text-gray-400">
          User Dashboard Admin Dashboard Booking Stripe-Payment Review
          Authentication Authorization Responsive
        </p>
        <div className="pl-[20px]  space-x-3 pt-4 ">
          <a href="">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-orange-800 text-[1.5rem]"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faEye}
              className="text-gray-500 text-[1.5rem]"
            />
          </a>
        </div>
      </div>
    </>
  );
}
