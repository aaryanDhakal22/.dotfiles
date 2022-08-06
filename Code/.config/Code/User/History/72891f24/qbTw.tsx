import { Route, Routes } from "react-router-dom";
import TransactionEdit from "../../component/notification/notificationedit/notificationedit.component";
import TransactionAdd from "../../component/transaction/transactionadd/transactionadd.componenet";

const TransactionPage = ()=>{


    return (
        
        <>
        <Routes>
            
            <Route path="/edit/:transactionId" element={<TransactionEdit/>} /> 
            <Route path="/add/" element={<TransactionAdd/>}></Route>
        </Routes>
        </>
    )
}

export default TransactionPage