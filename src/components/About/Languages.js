import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { SiSolidity ,SiTailwindcss} from "react-icons/si";
import { FaSuitcaseRolling } from 'react-icons/fa';
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
  
export default function Languages()
{
    return(
   
    <div >
        <h1 className=" text-center text-6xl text-white">Skill Set</h1>
  
         <div className="grid-cols-1 mt-5 h-auto gap-4 justify-items-center md: grid md:grid-cols-3 ">   

<div className=" flex justify-center items-center  border-violet-700  text-center  text-white text-5xl m border-2 w-48   h-28"><DiJavascript1/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2 w-48  h-28  text-white text-5xl">< CgCPlusPlus/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2 w-48  h-28  text-white text-5xl">< DiNodejs/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2 text-white text-5xl w-48   h-28">  <DiReact/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2    text-white text-5xl w-48   h-28"> <DiGit/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2 w-48  h-28  text-white text-5xl">< DiHtml5/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2 w-48  h-28  text-white text-5xl">< DiCss3Full/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2 w-48  h-28  text-white text-5xl">< DiVisualstudio/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2 w-48  h-28  text-white text-5xl">< DiLinux/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2 w-48  h-28  text-white text-5xl">< DiLinux/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2 w-48  h-28  text-white text-5xl">< SiSolidity/></div>
<div className=" flex justify-center items-center  border-violet-700  border-2 w-48  h-28  text-white text-5xl">< SiTailwindcss/></div>



</div>

</div>

    )
}

