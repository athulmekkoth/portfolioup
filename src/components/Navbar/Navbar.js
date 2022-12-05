import React from "react";
import  {Link}  from "react-router-dom";
export default function Navbar()
{
    return(
      
     


       <nav className="bg-black">
           
        <ul className="flex flex-row flex-nowrap justify-between ">  
        <h1 className="text-5xl px-4 py-3 text-stone-50  sm:text-slate-500">AS</h1>
        <div className=" text-sm md:text-2xl py-4 px-6   text-stone-50  sm:text-1xl">
        <Link className="px-3 py-3" to='/'> Home</Link>
        <Link className="px-3"to='/projects'>Projects</Link>
        <Link className="px-3" to='/about'>About</Link>
        </div>
        </ul>  
      </nav>
      
    
    )
}