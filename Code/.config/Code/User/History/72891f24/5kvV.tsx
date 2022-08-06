import { Route, Routes } from "react-router-dom";

const TransactionPage = ()=>{


    return (
        
        <>
        <Routes>
            <Route path="/add/:studentId" element={<TransactionAdd/>}></Route>
            <Route path="/edit/:notificationId" element={<NotificationEdit/>} /> 
        </Routes>
        </>
    )
}

export default TransactionPage