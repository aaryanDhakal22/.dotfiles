import React from "react";

interface LinedTileProp{
    left : string
    center:string
    right:string
    onClick():void
}

const LinedTile = ({left,center,right,onClick}:LinedTileProp)=>{
    return (
        <div className="d-flex justify-content-between border mb-2" onClick={onClick} ><p>Left:{left}</p> <p>center:{center}</p> <p>right:{right}</p></div>
        
    )
}

export default LinedTile