import React from "react";
import "./Home.css";
import cd from "../images/cd.gif";

export default function Home()
{
    return(
        <div className="body" >
            <div className="  text-white text-left py-20 px-16">
            <h1 className=" text-3xlmd:flex font-semibold text-purple-600 text-5xl">
  Hi ,There <span className="animate-waving-hand">👋🏻</span></h1>
  <h1 className="text-3xl whitespace-nowrap md:whitespace-nowrap text-9xl">I'm <span className="text-3xl md:text-9xl text-violet-900 inline-block animate-bounce w-6 h-6 ...">ATHUL SURESH </span></h1>
        </div>

        <img className="w-48 ml-20 mt-28 sm:w-1/4 rounded-2xl absolute right-16 top-56  "  src={cd} alt="img" />
  
        
            </div>
         
            

           

    )
}