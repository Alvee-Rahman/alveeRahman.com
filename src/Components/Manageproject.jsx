import React from "react";
import Project from "./Project";
export default function Manageproject() {
  return (
    <>
      <div className="grid grid-cols-2  text-white">
        <div className="border-r-[1px] border-solid border-zinc-700 mt-[5px] ">
          <h3 className="text-[1.4rem] uppercase font-bold  pt-[20px]  text-center">
            Add new project
          </h3>
          <div>
            <form className="ml-[80px] mt-10 ">
              <div className="flex">
                <p className="text-[1rem] uppercase font-bold">
                  Add categories
                </p>
                <button
                  className="text-white bg-gray-700 px-[100px] py-1 rounded-lg ml-[270px] mt-1"
                  type="submit"
                >
                  Save
                </button>
              </div>

              <div className="flex pt-3 space-x-6 text-red-600">
                <div>
                  <input
                    type="radio"
                    id="frontend"
                    name="category"
                    value="frontend"
                    className="text-red-500 focus:outline-none"
                    required
                  />
                  <label htmlFor="frontend">Frontend</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="backend"
                    name="category"
                    value="backend"
                    required
                  />
                  <label htmlFor="backend">Backend</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="fullstack"
                    name="category"
                    value="fullstack"
                    required
                  />
                  <label htmlFor="fullstack">Fullstack</label>
                </div>
              </div>
              <div className="space-y-10">
                <small></small>
                <div className="flex gap-x-10 gap-y-10">
                  <input
                    type="text"
                    placeholder="Add your project title here..."
                    className="  w-[300px] p-[10px]  rounded  bg-zinc-900 "
                    required
                  />

                  <input
                    type="text"
                    placeholder="Add a Note of your project..."
                    className=" w-[300px] p-[10px]  rounded   bg-zinc-900 "
                    required
                  />
                </div>
                <div className="flex gap-10">
                  <input
                    type="text"
                    placeholder="Add your project git link..."
                    className=" w-[300px] p-[10px]  rounded  bg-zinc-900 "
                    required
                  />
                  <input
                    type="text"
                    placeholder="Add  project live link..."
                    className=" w-[300px] p-[10px]  rounded  bg-zinc-900 "
                    required
                  />
                </div>
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write a short description of your project..."
                className="w-[640px] p-[10px] mt-8 rounded  bg-zinc-900"
                required
              ></textarea>
            </form>
          </div>
        </div>
        <div className="border-r-[1px] border-solid border-black mt-[5px]">
          <h3 className="text-[1.4rem] uppercase font-bold  py-[20px]  text-center">
            All your projects
          </h3>
          <div>
            <Project/>
          </div>
        </div>
      </div>
    </>
  );
}
