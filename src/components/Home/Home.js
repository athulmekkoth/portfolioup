import React from "react";
import "./Home.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
export default function Home() {
  return (
    <div className="mt-16">
      <div className="">
        <div className="text-white">
          <h1 className="pl-20 text-3xl md:flex font-semibold text-purple-600 md:text-5xl">
            Hi, There <span className="animate-wave">👋🏻</span>
          </h1>

          <h1 className="text-center text-3xl whitespace-nowrap md:text-7xl md:whitespace-nowrap lg:text-9xl mt-7">
            I'm <span className="text-violet-900 inline-block animate-pulse">ATHUL SURESH</span>
          </h1>

          <div className="mx-auto mb-7 md:w-1/2 lg:w-1/3">
          <Slide left>
          <LazyLoadImage
      src={process.env.PUBLIC_URL + 'home-main (1).svg'}
      alt="img"
      effect="blur"
    />
            </Slide>
          </div>
        </div>
      </div>

      <div className="mt-32  mx-auto w-[80%]">
        <div className="flex-[0.5] text-center lg:text-justify text-white font-thin">
          <h1 className="text-center text-4xl sm:text-6xl">
            LET ME<span className="text-purple-600"> INTRODUCE</span> MYSELF
          </h1>
          <p className="ml-5 inline-block text-xl sm:text-4xl">
            I fell in love with programming and I have at least learned something, I think… 🤷‍♂️
          </p>
          <p className="ml-5 text-xl sm:text-4xl">
            I am fluent in languages like<span className="text-purple-600"> C++, JavaScript, and Solidity.</span>
          </p>
          <p className="ml-5 text-xl sm:text-4xl">
            I am currently learning<span className="text-purple-600">TypeScript and Docker.</span>
          </p>
          <p className="ml-5 text-xl sm:text-4xl">
            My field of interests is building new <span className="text-purple-600">Web Technologies</span> and{" "}
            <span className="text-purple-600">Blockchain Development</span>
          </p>
        </div>
        <div className="w-[100%] flex flex-row justify-center items-center">
        <LazyLoadImage
 
  className=" mx-auto  hover:animate-pulse "
  src={process.env.PUBLIC_URL + 'avatar.svg'}
  alt="avatar"
  effect="blur"
/>
</div>
      </div>

      <div className="ct">
        <div className="mt-20 text-white text-center h-32">
          <h1 className="sm:text-4xl">CONNECT WITH ME ON</h1>

          <ul className="flex justify-center text-xl sm:text-2xl">
            <li className="card">
              <a href="https://github.com/athulmekkoth" rel="noopener noreferrer" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li className="card">
              <a href="https://twitter.com/athulmekkoth22" rel="noopener noreferrer" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li className="card">
              <a href="https://www.linkedin.com/in/athul-suresh-603b29187/" rel="noopener noreferrer" target="_blank">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
