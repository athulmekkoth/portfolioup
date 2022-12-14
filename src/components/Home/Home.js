import React from "react";
import "./Home.css";
import cd from "../images/home-main.svg";
import img from "../images/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
import { FaBeer, FaGithub, FaLinkedin, FaTwitch, FaTwitter } from 'react-icons/fa';

export default function Home()
{
    return(
        <div className="al">
    <div  className=" h-96" >

            <div className="  text-white text-left py-20 px-16">
            <h1 className=" text-3xlmd:flex font-semibold text-purple-600 text-5xl">
  Hi ,There <span className="animate-waving-hand inline-block animate-bounce w-6 h-6 ...">👋🏻</span></h1>
  
    
  <h1 className="text-3xl whitespace-nowrap md:text-9xl md:whitespace-nowrap" >I'm <span className="text-3xl md:text-9xl text-violet-900 inline-block animate-bounce w-6 h-6 ...">ATHUL SURESH </span></h1>
  <img className="w-44 mt-14 sm:w-1/4  rounded-2xl absolute right-16 top-56  "  src={cd} alt="img" />      
  
  
        </div >
     </div>
     
     <div className="  w-100   sm:h-102 sm:mt-48  ">
     <div className=" flex-[0.5] tracking-wider text-center md:text-justify text-white font-thin">
     <h1 className="  text-center text-4xl sm:text-6xl  ">LET ME<span className=" text-purple-600">INTRODUCE</span>  MYSELFF</h1>
    <p className="ml-5 inline-block text-xl sm:text-4xl">I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
    <p className="ml-5  text-xl sm:text-4xl">I am fluent in Languages like<span className=" text-purple-600">  C++, Javascript and Soldity.</span></p>

    <p className="ml-5 text-xl sm:text-4xl">My field of Interest's are building new <span className="text-purple-600"> Web Technologies </span> and <span className="text-purple-600">Blockchain Development </span></p>
  
     </div>
     <img  className=" relative top-3 mx-auto  w-36  hover:animate-pulse   md:w-80 md:relative " src={img} alt="avatr" />
     </div>
     <div className="ct">
     <div className=" mt-8 sm:mt-44  text-white text-center h-32  ">
        <h1 className="sm:text-4xl">CONNECT WITH ME ON</h1>
        
        <ul className="flex justify-center text-xl sm:text-2xl ">
            <li className="px-3"><a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FaGithub/>
                </a>
                </li>
                <li className="px-3"><a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FaTwitter/>
                </a>
                </li>
                <li className="px-3"><a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FaLinkedin/>
                </a>
                </li>
        </ul>
      
        
        

     </div>
     </div>
    </div>
  
    
         
           
           
         
 

    )
}
