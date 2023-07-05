import React from "react";
import './about.css'
import { CgCPlusPlus } from "react-icons/cg";
import { SiMongodb, SiSolidity ,SiTailwindcss,SiMongoose} from "react-icons/si";
import { FaSuitcaseRolling ,FaAws } from 'react-icons/fa';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiLinux,
    DiHtml5,
    DiVisualstudio,
    DiGit,
       DiCss3Full,
       
   
  } from "react-icons/di";
  import{LuHardHat} from "react-icons/lu"
export default function Languages()
{
    return(
   
    <div className="mt-24 md:">
        <h1 className=" text-center text-6xl font-mono text-white">Skill Set</h1>
  
         <div className="grid grid-cols-1 mt-5 h-auto gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 mb-12">   
         <div className="res">
          <DiJavascript1 />
        </div>
        <div className="res">
          <CgCPlusPlus />
        </div>
        <div className="res">
          <DiNodejs />
        </div>
        <div className="res">
          <DiReact />
        </div>
        <div className="res">
          <DiGit />
        </div>
        <div className="res">
          <DiHtml5 />
        </div>
        <div className="res">
          <DiCss3Full />
        </div>
        <div className="res">
          <DiVisualstudio />
        </div>
        <div className="res">
          <DiLinux />
        </div>
        <div className="res">
          <DiLinux />
        </div>
        <div className="res">
          <SiSolidity />
        </div>
        <div className="res">
          <SiTailwindcss />
        </div>
        <div className="res">
          <SiMongodb />
        </div>
        <div className="res">
          <LuHardHat />
        </div>
        <div className="res">
          <FaAws />
        </div>






</div>

</div>

    )
}

