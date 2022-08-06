import React from "react";
import { Notification } from "../../gtypes";

interface LinedTileProp{
    left : string
    center:string
    right:string
    relatedObject: Notification | Transaction
}

const LinedTile = ({left,center,right}:LinedTileProp)=>{
    return (
        <>
        <div className="d-flex justify-content-between border mb-2"  ><p>Left:{left}</p> <p>center:{center}</p> <p>right:{right}</p></div>
        
        </>
    )
}

export default LinedTile