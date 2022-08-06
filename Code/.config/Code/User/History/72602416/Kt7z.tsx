import React from "react";
import { Notification, Transaction } from "../../gtypes";

interface LinedTileProp{
    left : string
    center:string
    right:string
    relatedObject: Notification | Transaction
    mapUrl:string
}

const LinedTile = ({left,center,right,relatedObject,mapUrl}:LinedTileProp)=>{
    return (
        <>
        <div className="d-flex justify-content-between border mb-2"  ><p>Left:{left}</p> <p>center:{center}</p> <p>right:{right}</p></div>
        
        </>
    )
}

export default LinedTile