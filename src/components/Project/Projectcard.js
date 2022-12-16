import React from "react";

export default function projectcard(props)
{
console.log(props)
return(
<div>

<div className="grid grid-cols-3 " >
<div className=" h-auto border-violet-700 border-2">
<h1 className="text-3xl text-white">{props.item.name}</h1>
<p className="text-white text-3xl">{props.item.ct}</p>
</div>

</div>
</div>
)
}
                    









          