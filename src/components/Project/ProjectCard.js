import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <div className="h-96 overflow-hidden font-robotoslab text-center my-12 hover:scale-105 shadow-lg rounded-lg shadow-violet-100 bg-gradient-to-r from-violet-900 to-violet-800">
      <h1 className="text-3xl text-white font-bold mt-6">{props.item.name}</h1>
      <p className="py-9 text-white text-lg">{props.item.ct}</p>
      <button className="px-6 py-2 text-lg text-white bg-violet-900 hover:bg-violet-800 rounded-md transition duration-300 ease-in-out">
        <FaGithub className="inline-block mr-2" />
        GitHub
      </button>
    </div>
  );
}





          