import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ProjectCard(props) {
  console.log(props)
  return (
    <div className="py-10 overflow-hidden font-robotoslab text-center my-12 hover:scale-105 shadow-lg rounded-lg shadow-violet-100 bg-gradient-to-r from-violet-900 to-violet-800">
      <LazyLoadImage
        className="my-4 w-[80%] mx-auto"
        src={process.env.PUBLIC_URL + `${props.item.url}`}
        alt={props.item.alt}
        effect="blur"
      />
      <h1 className="text-3xl text-white font-bold mt-6">{props.item.name}</h1>
      <p className="py-9 text-white text-lg">{props.item.ct}</p>
      <Link
        to={`${props.item.urle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-7 text-lg text-white bg-violet-900 hover:bg-violet-800 rounded-md transition duration-300 ease-in-out"
      >
        <FaGithub className="inline-block mr-2" />
        GitHub
      </Link>
    </div>
  );
}
