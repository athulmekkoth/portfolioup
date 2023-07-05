import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";

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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-12 mt-20">
        {projectCards}
      </div>
    </div>
  );
}
