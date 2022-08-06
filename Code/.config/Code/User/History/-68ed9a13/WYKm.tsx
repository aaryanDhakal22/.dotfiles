import React from "react";
import StudentTile from "../studenttile/studenttile.component";
import STUDENT_DATA from "../../studentData";
import {StudentProfile } from "../../gtypes";

const StudentCollection = ({searchStd}:{searchStd :string})=>{

    const [profiles,setProfiles] = React.useState<StudentProfile[]>(STUDENT_DATA)
    

    const filtered_profiles = profiles.filter((item)=>{
        return item.name.toLocaleLowerCase().includes(searchStd.toLocaleLowerCase())
    }) 


    return <div>
    <div className="row gy-5">
    {filtered_profiles.map((profile)=>{
        return  <StudentTile profile={profile}/>
    })} 

    </div>
   
    </div>
}

export default StudentCollection