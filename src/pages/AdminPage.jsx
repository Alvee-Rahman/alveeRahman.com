import React from "react";

export default function AdminPage() {
  return (
    <>
      <section className="bg-black ">
        <p className="text-white text-[2rem] pl-[100px] pt-[20px] font-extralight">
          Welcome <span className="text-orange-500">Mr Alvee!</span>
        </p>

        <div>
            <ul className="text-white  space-x-10 pt-[20px] flex justify-center">
              <li className="px-6 bg-zinc-800 text-[1rem] py-4">Manage your project</li>
              <li className="px-6 bg-zinc-800 text-[1rem] py-4">Manage your Experience </li>
              <li className="px-6 bg-zinc-800 text-[1rem] py-4">Add new Skill</li>
              <li className="px-6 bg-zinc-800 text-[1rem] py-4">Client message</li>
            </ul>
          </div>
      </section>
    </>
  );
}
