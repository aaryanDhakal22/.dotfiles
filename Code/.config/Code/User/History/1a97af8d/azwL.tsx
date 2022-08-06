
import { Route, Routes, useParams } from "react-router-dom";
import NotificationEdit from "../../component/notification/notificationedit/notificationedit.component";

const NotificationPage = ()=>{
    console.log("In noti page")
    return (

        <>
        <Routes>
            <Route path="/add/" element={<NotificationEdit/>}></Route>
            <Route path="/edit/:notificationId" element={<NotificationEdit/>} /> 
        </Routes>
        </>
    )
    
    
}
export default NotificationPage