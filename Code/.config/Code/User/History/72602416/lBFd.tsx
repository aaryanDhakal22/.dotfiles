import React from "react";

interface LinedTileProp{
    left : string
    center:string
    right:string
}

const LinedTile = ({left,center,right}:LinedTileProp)=>{
    return (
        <>
        <div>Left:{left} center:{center} right:{right}</div>
        
        </>
    )
}

export default LinedTile