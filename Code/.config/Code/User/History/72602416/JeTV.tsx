import React from "react";

interface LinedTileProp{
    left : string
    center:string
    right:string
}

const LinedTile = ({left,center,right}:LinedTileProp)=>{
    return (
        <>
        Left:{left}
        center:{center}
        right:{right}
        </>
    )
}

export default LinedTile