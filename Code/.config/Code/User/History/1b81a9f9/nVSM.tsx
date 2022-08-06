import React from "react";
import { Student } from "../../gtypes";
const Collection = (profiles:Student[], searchStd:string,)=>{

    

    const filtered_profiles = profiles.filter((item)=>{
        return item.name.toLocaleLowerCase().includes(searchStd.toLocaleLowerCase())
    }) 

    
    return <div>
    <div className="row gy-5" >
    {filtered_profiles.map((profile)=>{
        return  <StudentTile key ={profile.unid} profile={profile}/>
    })} 

    </div>
   
    </div>
}

export default Collection