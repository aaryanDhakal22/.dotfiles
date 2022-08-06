import { useLocation, useParams } from "react-router-dom";
import { useTransactionQuery } from "../../../hooks/useTransaction";

const TransactionCollection = ()=>{
    const toShow = useLocation()
    const filter_key = toShow.pathname.substring(1)
    const transactions = useTransactionQuery()
    return (
        <>
        {filter_key}
        </>
    )   
}

export default TransactionCollection