import React from "react";
import type {Item} from '../../gtypes.d'
interface CPprop{
    title:string;
    items:Item[];
}
const CollectionPreview =({title,items}:CPprop)=>{
    return(
        <div className ="collection-preview">
            <div className="title">{title.toUpperCase()}</div>
            <div className="preview">
                {items
                .filter((thing,id)=>{
                    return id < 5
                })
                .map((item)=>{
                    return <p>{item.name}</p>
                })}
            </div>
        </div>
    )
}
export default CollectionPreview