import TextField from "@mui/material/TextField";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import PerStudentFeeCollection from "../../component/fees/perstudentfeecollection/perstudentfeecollection.component";

import Collection from "../../component/student/collection/collection.component";
// import Details from "../../component/details/details.component";

const FeesPage = ()=>{
    // The Search query State
    const [searchstd,setSearchStd] = React.useState<string>("")


    // Handles the search Query callback
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
    }

    // Handle the add and details
    return (
        <>
        <TextField
        id="outlined-name"
        label="Search Student"
        value={searchstd}
        onChange={handleChange}
        />

        <NavLink to="/student/add/" replace={false}><button>Add</button></NavLink>

        <Routes>
            <Route path="/" element={<Collection searchStd={searchstd} />} />
            <Route path="/:studentId" element={<PerStudentFeeCollection/>} />
        </Routes>
        </>
    )
    
    
}
export default FeesPage