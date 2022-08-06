import React from "react";
import StudentTile from "../../component/studenttile/studenttile.component";
import StudentSearch from "../../component/studentsearch/studentsearch.component";
import STUDENT_DATA from "../../studentData.js";
import {StudentProfile } from "../../gtypes";
import  Box  from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const StudentCollection = ()=>{

    const [profiles,setProfiles] = React.useState<StudentProfile[]>(STUDENT_DATA)
    const [searchstd,setSearchStd] = React.useState<string></string>
    return <div>
    <TextField id="outlined-basic" label="Student Search" variant="outlined"  />
    {profiles.map((profile)=>{
        return  <StudentTile profile={profile}/>
    })} 
   
    </div>
}

export default StudentCollection