import { TextField } from "@mui/material";
import React, { ChangeEvent, ChangeEventHandler, EventHandler } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import NotificationAdd from "../../component/notification/notificationadd/notificationadd.component";
import NotificationDetail from "../../component/notification/notificationdetail/notificationdetail.componen";
import TiledCollection from "../../component/notification/notification_collection/notificationcollection.component";
import { useNotificationQuery } from "../../hooks/useNotification";

const NotificationPage = ()=>{
    console.log("In noti page")
    return (

        <>
        <Routes>
            <Route path="/add/" element={<NotificationAdd/>}></Route>
            <Route path="/details/:notificationId" element={<NotificationDetail/>} /> 
        </Routes>
        </>
    )
    
    
}
export default NotificationPage