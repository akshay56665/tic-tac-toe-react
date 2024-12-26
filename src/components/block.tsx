import React from "react";

interface BlockProps{
    value?:string,
    onClick:()=>void
}
const Block:React.FC<BlockProps>=({value,onClick})=>{
    return(
        <div className="block" onClick={onClick}>{value}</div>
    )
}

export default Block;