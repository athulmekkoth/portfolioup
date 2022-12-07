import React from "react";
import "./Home.css";
import cd from "../images/home-main.svg";

export default function Home()
{
    return(
    <div  >
            <div className="  text-white text-left py-20 px-16">
            <h1 className=" text-3xlmd:flex font-semibold text-purple-600 text-5xl">
  Hi ,There <span className="animate-waving-hand">👋🏻</span></h1>
  <h1 className="text-3xlwhitespace-nowrap md:text-9xl whitespace-nowrap" >I'm <span className="text-3xl md:text-9xl text-violet-900 inline-block animate-bounce w-6 h-6 ...">ATHUL SURESH </span></h1>
       

   
        <img className="w-44 ml-16 mt-28 sm:w-1/4 rounded-2xl absolute right-16 top-56  "  src={cd} alt="img" />
  
        </div>
            </div>
         
            

           

    )
} 