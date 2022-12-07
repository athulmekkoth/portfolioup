import React from "react";
import  {Link}  from "react-router-dom";
export default function Navbar()
{
    return(
      
     


       <nav className="bg-transparent border-gray-400">
           
        <ul className="flex flex-row flex-nowrap justify-between ">  
        <h1 className="text-5xl px-4 py-3 text-stone-50  sm:text-slate-500">AS</h1>
        <div className=" text-sm md:text-3xl py-4 pr-28 text-stone-50  sm:text-1xl">
        <Link className="px-6 py-3" to='/'> Home</Link>
        <Link  className="px-6 to=/projcts">Projects</Link>
        <Link className="px-86 "to='/about'>About</Link>
        </div>
        </ul>  
      </nav>
      
    
    )
}