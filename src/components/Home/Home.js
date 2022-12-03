import React from "react";
import "./Home.css";
import cd from "../images/cd.gif";

export default function Home()
{
    return(
        <div className="body" >
            <div className="  text-white text-left py-20 px-16">
            <h1 className="flex font-semibold text-purple-600">
  Hi ,There <span className="animate-waving-hand">👋🏻</span></h1>
  <h1 className=" whitespace-nowrap text-4xl">I'm <span className="text-4xl text-violet-900 inline-block animate-bounce w-6 h-6 ...">ATHUL SURESH </span></h1>
        </div>

        <img  className="" src={cd} alt="img" />
            </div>
         
            

           

    )
}