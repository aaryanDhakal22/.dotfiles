import TextField from "@mui/material/TextField";
import React from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";

import Collection from "../../component/student/collection/collection.component";
import Details from "../../component/student/details/details.component";
import {MdAddCircleOutline} from 'react-icons/md'


const StudentPage = ()=>{
    // The Search query State
    const [searchstd,setSearchStd] = React.useState<string>("")
    const navigate = useNavigate()

    // Handles the search Query callback
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
    }

    // Handle the add and details
    return (
        <>

        <div className=" flex gap-5 items-center max-w-full bg-background h-28">
                <button className="btn ml-4" onClick={()=>navigate('/student/add')}><MdAddCircleOutline style={{"display":"inline","fontSize":"25px"}} />ADD</button>
                <button className="btn ml-4" > FILTER</button>
                <TextField className="" id="outlined-name" label="Search Student" value={searchstd}onChange={handleChange}/>
            
                    
        </div>

        <Routes>
            <Route path="/" element={<Collection searchStd={searchstd} />} />
            <Route path="/add/" element={<Details/>}></Route>
            <Route path="/details/:studentId" element={<Details/>} /> 
            {/* <Route path="/details/:unid" element= {<StudentDetails profiles={ImageData} />}/> */}
        </Routes>
        </>
    )
    
    
}
export default StudentPage