import React from "react";
import { JsxElement } from "typescript";
import { Student } from "../../gtypes";
import { useStudentQuery } from "../../hooks/useStudentQuery";
import Tile from "../tile/tile.component";
interface CollectionProps{
    profiles:Student[]
    searchStd:string
    tileComponent({profile}:{profile:Student}): JSX.Element
}

const Collection = ({searchStd}:CollectionProps)=>{
    const profile = useStudentQuery()

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