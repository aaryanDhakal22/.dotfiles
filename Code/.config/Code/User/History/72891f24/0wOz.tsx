import { Route, Routes } from "react-router-dom";
import NotificationEdit from "../../component/notification/notificationedit/notificationedit.component";
import TransactionAdd from "../../component/transaction/transactionadd/transactionadd.componenet";

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