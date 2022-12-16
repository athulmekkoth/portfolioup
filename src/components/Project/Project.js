import React from "react"
import Projectcard from "./Projectcard";
import projectdata from "./projectdata";


export default function proeject()
{
    const data=projectdata.map(item=>{
        return <Projectcard item={item} />
     })
    return(
        <div>
       {data}
      
    </div>
    )
}