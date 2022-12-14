import React from "react"
import Projectcard from "./Projectcard";
import projectdata from "./projectdata";


export default function proeject()
{
    const data=projectdata.map(item=>{
        return <Projectcard gridClass="grid grid-cols-3 border-violet-700  border-2" item={item} />
     })
    return(
        <div>
       {data}
      
    </div>
    )
}