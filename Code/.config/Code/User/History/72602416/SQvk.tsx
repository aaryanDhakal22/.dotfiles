import React from "react";

interface LinedTileProp{
    left : string
    center:string
    right:string
}

const LinedTile = ({left,center,right}:LinedTileProp)=>{
    return (
        <>
        <div className="d-flex justify-content-between"><p>Left:{left}</p> <p>center:{center}</p> <p>right:{right}</p></div>
        
        </>
    )
}

export default LinedTile