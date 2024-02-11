import React from "react";
import Manageproject from "../Components/Manageproject";

export default function AdminPage() {
  return (
    <>
      <section className="min-h-screen bg-black">
        <div className="bg-black">
          <p className="text-white text-[2rem] pl-[100px] pt-[20px] font-extralight">
            Welcome <span className="text-orange-500 font-bold">Mr Alvee!</span>
          </p>

          <div>
            <ul className="text-white  space-x-10 pt-[20px] flex justify-center">
              <li className="px-6 bg-zinc-800 text-[1rem] py-4 cursor-pointer">
                Manage your project
              </li>
              <li className="px-6 bg-zinc-800 text-[1rem] py-4 cursor-pointer">
                Manage your Experience
              </li>
              <li className="px-6 bg-zinc-800 text-[1rem] py-4 cursor-pointer">
                Manage your Education
              </li>
              <li className="px-6 bg-zinc-800 text-[1rem] py-4 cursor-pointer">
                Manage your Archivement
              </li>
              <li className="px-6 bg-zinc-800 text-[1rem] py-4 cursor-pointer">
                Client message
              </li>
              <li className="px-6 bg-zinc-800 text-[1rem] py-4 cursor-pointer">
                Add new skills
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Manageproject />
        </div>
      </section>
    </>
  );
}
