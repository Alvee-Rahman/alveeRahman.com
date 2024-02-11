import React from "react";

export default function AdminPage() {
  return (
    <>
      <section>
        <div className="bg-black">
          <p className="text-white text-[2rem] pl-[100px] pt-[20px] font-extralight">
            Welcome <span className="text-orange-500">Mr Alvee!</span>
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

        <div className="grid grid-cols-2 min-h-screen bg-black text-white">
          <div className="border-r-[1px] border-solid border-zinc-700 mt-[5px] ">
            <h3 className="text-[1.4rem] uppercase font-bold  pt-[20px] pl-[30px] text-center">
              Add new project
            </h3>
            <div>
              <form action="post" className="ml-10 mt-10 ">
                <p className="text-[1.5rem]">Add categories</p>
                <div className="flex">
                  <div>
                    <input
                      type="radio"
                      id="frontend"
                      name="category"
                      className="text-red-500 focus:outline-none"
                    />
                    <label htmlFor="frontend">Frontend</label>
                  </div>
                  <div>
                    <input type="radio" id="backend" name="category" />
                    <label htmlFor="backend">Backend</label>
                  </div>
                  <div>
                    <input type="radio" id="fullstack" name="category" />
                    <label htmlFor="fullstack">Fullstack</label>
                  </div>
                </div>
                <div className="space-y-10">
                  <small></small>
                  <div className="flex gap-x-10 gap-y-10">
                    <input
                      type="text"
                      placeholder="Add your project title here!"
                      className="  w-[300px] p-[10px] border-solid border-b-2 border-zinc-800 border-opacity-50 bg-zinc-900 "
                    />

                    <input
                      type="text"
                      placeholder="Add a Note of your project"
                      className=" w-[300px] p-[10px]  border-solid border-b-2 border-zinc-800 border-opacity-50"
                    />
                  </div>
                  <div className="flex gap-10">
                    <input
                      type="text"
                      placeholder="Add your project git link."
                      className=" w-[300px] p-[10px]  border-solid border-b-2 border-zinc-800 border-opacity-50"
                    />
                    <input
                      type="text"
                      placeholder="Add  project live link."
                      className=" w-[300px] p-[10px]   border-solid border-b-2 border-zinc-900 border-opacity-50"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="border-r-[1px] border-solid border-black mt-[5px]">
            <h3 className="text-[1.4rem] uppercase font-bold  pt-[20px] pl-[30px] text-center">
              All your projects
            </h3>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
