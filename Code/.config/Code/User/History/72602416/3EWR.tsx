import React from "react";

interface LinedTileProp{
    left : string
    center:string
    right:string
}

const LinedTile = ({left,center,right}:LinedTileProp)=>{
    return (
        <>
        <div>Left:{left}</div>
        center:{center}
        right:{right}
        </>
    )
}

export default LinedTile