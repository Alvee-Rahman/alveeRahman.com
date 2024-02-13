import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Project({projectDataList}) {
  console.log("projectDataList:", projectDataList);
  return (
    <>
      {projectDataList.map((project, index) => (
        <div className="mx-auto w-[650px] h-[300px] border-[1px] border-red-600 rounded-2xl" key={index}>
          <h3 className="uppercase pl-[20px] pt-[20px] font-bold text-[1rem] text-orange-600">
            {project.title}
          </h3>
          <p className="pl-[20px] pt-4 font-bold text-orange-600">
            {project.Note}
          </p>
          <p className="pl-[20px] pt-4 text-gray-400">
            {project.discription}
          </p>
          <div className="pl-[20px]  space-x-3 pt-4 ">
            <a href={project.gitLink}>
              <FontAwesomeIcon
                icon={faGithub}
                className="text-orange-800 text-[1.5rem]"
              />
            </a>
            <a href={project.liveLink}>
              <FontAwesomeIcon
                icon={faEye}
                className="text-gray-500 text-[1.5rem]"
              />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}