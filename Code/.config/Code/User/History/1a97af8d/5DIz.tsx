import { TextField } from "@mui/material";
import React, { ChangeEvent, EventHandler } from "react";
import { useParams } from "react-router-dom";
import { useNotificationQuery } from "../../hooks/useNotification";

const NotificationPage = ()=>{
    const params = useParams()
    const searchedStudentId = params["studentId"]
    const [date,setDate] = React.useState<string[]>(["",""])
    const notsOfStudent = useNotificationQuery(searchedStudentId)

    const handleChange = (data:{"type":number,"value":string})=>{
        const newDate = date[data.type]
        console.log(data)
    }

    return (
        <>
        <TextField
        id="outlined-name"
        label="Year"
        value={date[0]}
        onChange={(e)=>handleChange({"type":0,"value":e.currentTarget.value})}
        />
        <TextField
        id="outlined-name"
        label="For Month"
        value={date[1]}
        onChange={(e)=>handleChange({"type":1,"value":e.currentTarget.value})}
        />

        <NavLink to="/student/add/" replace={false}><button>Add</button></NavLink>

        <Routes>
            <Route path="/" element={<Collection searchStd={searchstd} />} />
            <Route path="/add/" element={<Details/>}></Route>
            <Route path="/details/:studentId" element={<Details/>} /> 
            {/* <Route path="/details/:unid" element= {<StudentDetails profiles={ImageData} />}/> */}
        </Routes>
        </>
    )
    
    
}
export default NotificationPage