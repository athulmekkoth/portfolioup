import React from "react";
import { FaGithub } from 'react-icons/fa';
export default function projectcard(props) {
   
    return (
        <div className={props.gridClass} >
                
                <div  >
                <h1 className="text-5xl text-center text-white">{props.item.name}</h1>
                    <p className="text-white mx-1 text-3xl">blah blah</p>


                </div>
            </div>
        
    )
}
/*<div className={props.gridClass}  >
                <div className=" h-auto  border-violet-700  border-2">
                        <h1 className="text-5xl text-center text-white">{props.item.name}</h1>
                    <p className="text-white mx-1 text-3xl">blah blah</p>


                    









            </div>
        </div>*/