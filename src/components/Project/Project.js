import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";
import { Fade, Slide } from "react-awesome-reveal";

import { FaGithub } from "react-icons/fa";
import {Link} from "react-router-dom"

export default function Project() {
  const projectCards = ProjectData.map((item) => (
    <ProjectCard key={item.id} item={item} />
  ));

  return (
    <div>
      <div className="py-20 tracking-widest text-center">
        <h1 className="leading-6 text-white text-3xl sm:text-5xl">
          My Recent <span className="text-violet-900">Works</span>{" "}
        </h1>
        <h2 className="text-white leading-6 text-xl sm:text-3xl font-small">
          Here are some of my recent projects
        </h2>
      </div>
      <Slide left>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-12 mt-20">
        {projectCards}
      </div>
      </Slide>
      <div className="flex flex-col gap-7 text-white border-4 border-indigo-500 .. p-6 w-[60%] gap-7 mx-auto lg:flex-row lg:justify-between lg:items-center px-8" >
<h1 className=" text-xl lg:text-3xl">Check All My Projects Here</h1>
<Link to="https://github.com/athulmekkoth" target="_blank" rel="noopener noreferrer"  className="px-6 py-2 text-lg text-white bg-violet-900 hover:bg-violet-800 rounded-md transition duration-300 ease-in-out">
        <FaGithub className="inline-block mr-2" />
        GitHub
      </Link>

      </div>
    </div>
   
  );
}
