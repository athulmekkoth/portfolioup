import React from "react-dom"
import Aboutcard from './Aboutcard.js'
import Languages from "./Languages.js"
import GitHubCalendar from 'react-github-calendar';
import 'animate.css';
export default function About()
{

   




    return(
   <div className="text-center">
  

<Aboutcard />
<Languages />
<div className="w-[90%] hover:animate-pulse bg-slate-100 lg:w-[50%] rounded-lg p-5 mx-auto flex justify-center items-center">
<GitHubCalendar   className=""
 username="athulmekkoth" />

</div>



    </div>

   
    )
}