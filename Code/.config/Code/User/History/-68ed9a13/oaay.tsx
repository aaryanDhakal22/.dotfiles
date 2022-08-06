import React from "react";
import StudentTile from "../../component/studenttile/studenttile.component";
import StudentSearch from "../../component/studentsearch/studentsearch.component";
import STUDENT_DATA from "../../studentData.js";
import {StudentProfile } from "../../gtypes";
import  Box  from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const StudentCollection = ()=>{

    const [profiles,setProfiles] = React.useState<StudentProfile[]>(STUDENT_DATA)
    const [searchstd,setSearchStd] = React.useState<string>("")
    
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
        const filtered_profiles = profiles.filter((item)=>{
            return item.name.toLocaleLowerCase().includes(new_search.toLocaleLowerCase())
        }) 
    }


    return <div>
    <TextField id="outlined-name" label="Student Search" variant="outlined" value={searchstd} onChange={handleChange}  />
    {filtered_profiles.map((profile)=>{
        return  <StudentTile profile={profile}/>
    })} 
   
    </div>
}

export default StudentCollection