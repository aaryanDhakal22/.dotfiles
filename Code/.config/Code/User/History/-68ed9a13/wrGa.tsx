import React from "react";
import StudentTile from "../../component/studenttile/studenttile.component";
import 
import STUDENT_DATA from "../../studentData.js";
import {StudentProfile } from "../../gtypes";
const StudentCollection = ()=>{

    const [profiles,setProfiles] = React.useState<StudentProfile[]>(STUDENT_DATA)

    return <div>
    {profiles.map((profile)=>{
        return  <StudentTile profile={profile}/>
    })} 
   
    </div>
}

export default StudentCollection