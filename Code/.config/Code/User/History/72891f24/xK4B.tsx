import { Route, Routes } from "react-router-dom";

const TransactionPage = ()=>{


    return (
        
        <>
        <Routes>
            <Route path="/add/:studentId" element={<NotificationAdd/>}></Route>
            <Route path="/edit/:notificationId" element={<NotificationEdit/>} /> 
        </Routes>
        </>
    )
}

export default TransactionPage