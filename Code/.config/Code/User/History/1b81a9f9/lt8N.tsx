import React from "react";
import { JsxElement } from "typescript";
import { Student } from "../../gtypes";

interface CollectionProps{
    profiles:Student[]
    searchStd:string
    tileComponent(): JSX.Element
}

const Collection = ({profiles,searchStd,tileComponent}:CollectionProps)=>{

    const Tile = tileComponent    

    const filtered_profiles = profiles.filter((item)=>{
        return item.name.toLocaleLowerCase().includes(searchStd.toLocaleLowerCase())
    }) 

    
    return <div>
    <div className="row gy-5" >
    {filtered_profiles.map((profile)=>{
        return  <Tile key ={profile.studentId} profile={profile}/>
    })} 

    </div>
   
    </div>
}

export default Collection