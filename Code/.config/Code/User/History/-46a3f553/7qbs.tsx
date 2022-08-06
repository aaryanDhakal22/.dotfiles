import React from "react";
import type {Item} from '../../gtypes.d'
interface CPprop{
    title:string;
    items:Item;
}
const CollectionPreview =({title,items}:CpuInfo)=>{
    return(
        <div className ="collection-preview">
            <div className="title">Help</div>
            <div className="preview">

            </div>
        </div>
    )
}
export default CollectionPreview