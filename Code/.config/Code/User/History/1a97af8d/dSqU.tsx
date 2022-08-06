import { TextField } from "@mui/material";
import React, { ChangeEvent, ChangeEventHandler, EventHandler } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import NotificationAdd from "../../component/notification/notificationadd/notificationadd.component";
import NotificationDetail from "../../component/notification/notificationdetail/notificationdetail.componen";
import TiledCollection from "../../component/notificationcollection/notificationcollection.component";
import { useNotificationQuery } from "../../hooks/useNotification";

const NotificationPage = ()=>{
    const params = useParams()
    const searchedStudentId = params["studentId"]
    const [year,setYear] = React.useState<string>("")
    const [month,setMonth] = React.useState<string>("")
    const notsOfStudent = useNotificationQuery(searchedStudentId)

    const handleYearChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setYear(e.currentTarget.value)
    }
    const handleMonthChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setMonth(e.currentTarget.value)
    }

    return (
        <>
        <TextField
        id="outlined-name"
        label="Year"
        value={year}
        onChange={handleYearChange}
        />
        <TextField
        id="outlined-name"
        label="For Month"
        value={month}
        onChange={handleMonthChange}
        />

        {/* <NavLink to="/student/add/" replace={false}><button>Add</button></NavLink> */}

        <Routes>
            <Route path="/" element={<TiledCollection/>} />
            <Route path="/add/" element={<NotificationAdd/>}></Route>
            <Route path="/details/:studentId" element={<NotificationDetail/>} /> 
        </Routes>
        </>
    )
    
    
}
export default NotificationPage