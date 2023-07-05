import React from "react";
import "./Home.css";
<<<<<<< HEAD
import cd from "../images/home-main (1).svg";
import img from "../images/avatar.5852f40fbb38aa284829fa3fb7722225.svg";
=======
import cd  from '../images/home-main (1).svg'
import img from "../images/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
>>>>>>> 0e95987503ace9298482acad362e6e4f619225f3
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="mt-16">
      <div className="h-96">
        <div className="text-white">
          <h1 className="pl-20 text-3xl md:flex font-semibold text-purple-600 md:text-5xl">
            Hi, There <span className="animate-wave">👋🏻</span>
          </h1>

<<<<<<< HEAD
          <h1 className="text-center text-3xl whitespace-nowrap md:text-7xl md:whitespace-nowrap lg:text-9xl mt-7">
            I'm <span className="text-violet-900 inline-block animate-pulse">ATHUL SURESH</span>
          </h1>
=======
            <div className="  text-white  ">
            <h1 className="pl-20 text-3xl md:flex font-semibold text-purple-600 md:text-5xl">
  Hi ,There <span className="animate-wave">👋🏻</span></h1>
  
    
  <h1 className=" text-center text-3xl whitespace-nowrap  md:text-7xl md:whitespace-nowrap lg:text-9xl mt-7" >I'm <span className=" text-violet-900 inline-block animate-pulse">ATHUL SURESH </span></h1>
  <div className= " mx-auto md:w-1/2 lg:w-1/3  ">
  <img className=""  src={cd} alt="img" /> 
     
  
  </div>
        </div >
     </div>
     
     <div className=" mt-32  w-100  tracking-wide ... sm:h-102 md:mx-10 lg:mt-96 ">
     <div className=" flex-[0.5]  text-center lg:text-justify text-white font-thin">
     <h1 className="  text-center text-4xl sm:text-6xl  ">LET ME<span className=" text-purple-600">INTRODUCE</span>  MYSELFF</h1>
    <p className="ml-5 inline-block text-xl sm:text-4xl">I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
    <p className="ml-5  text-xl sm:text-4xl">I am fluent in Languages like<span className=" text-purple-600">  C++, Javascript and Soldity.</span></p>
>>>>>>> 0e95987503ace9298482acad362e6e4f619225f3

          <div className="mx-auto md:w-1/2 lg:w-1/3">
            <img className="" src={cd} alt="img" />
          </div>
        </div>
      </div>

      <div className="mt-40 lg:mt-96">
        <div className="flex-[0.5] text-center lg:text-justify text-white font-thin">
          <h1 className="text-center text-4xl sm:text-6xl">
            LET ME<span className="text-purple-600">INTRODUCE</span> MYSELF
          </h1>
          <p className="ml-5 inline-block text-xl sm:text-4xl">
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          </p>
          <p className="ml-5 text-xl sm:text-4xl">
            I am fluent in languages like<span className="text-purple-600"> C++, Javascript, and Solidity.</span>
          </p>
          <p className="ml-5 text-xl sm:text-4xl">
            My field of interests is building new <span className="text-purple-600">Web Technologies</span> and{" "}
            <span className="text-purple-600">Blockchain Development</span>
          </p>
        </div>
        <img className="relative top-3 mx-auto w-36 hover:animate-pulse lg:w-80 md:relative" src={img} alt="avatar" />
      </div>

      <div className="ct">
        <div className="mt-20 text-white text-center h-32">
          <h1 className="sm:text-4xl">CONNECT WITH ME ON</h1>

          <ul className="flex justify-center text-xl sm:text-2xl">
            <li className="card">
              <a href="https://github.com/athulmekkoth" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
            <li className="card">
              <a href="https://twitter.com/athulmekkoth22" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li className="card">
              <a href="https://www.linkedin.com/in/athul-suresh-603b29187/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
