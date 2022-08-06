import { useLocation, useParams } from "react-router-dom";
import { useTransactionQuery } from "../../../hooks/useTransaction";

const TransactionCollection = ({type,subType}:Tran)=>{
    const toShow = useLocation()
    const filter_key = toShow.pathname.substring(1)
    const transactions = useTransactionQuery()
    if(transactions.isLoading){
        return <div>Loading...</div>
    }
    if(transactions.isError){
        if(transactions.error instanceof Error){
            return <div>Error Occured: {transactions.error.message}</div>
        }
    }
    if(transactions.isSuccess){
        const allFiltered = transactions.data.filter((item)=>{
            return item.mode === filter_key
        })

        return (
            <>
            {filter_key}
            </>
        )   
    }
    return <div>An Unkonwn Error Occured in Collection</div>
}

export default TransactionCollection