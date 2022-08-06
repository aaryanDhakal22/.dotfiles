import React from "react";
import StudentTile from "../../component/studenttile/studenttile.component";
import StudentSearch from "../../component/studentsearch/studentsearch.component";
import STUDENT_DATA from "../../studentData.js";
import {StudentProfile } from "../../gtypes";


const StudentCollection = ()=>{

    const [profiles,setProfiles] = React.useState<StudentProfile[]>(STUDENT_DATA)

    return <div>
    <StudentSearch/>    
    {profiles.map((profile)=>{
        return  <StudentTile profile={profile}/>
    })} 
   
    </div>
}

export default StudentCollection