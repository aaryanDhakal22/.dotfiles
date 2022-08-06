import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import { useParams } from "react-router-dom";
import { Transaction } from "../../../gtypes";
import { useAddTransaction, useTransactionQuery } from "../../../hooks/useTransaction";
import randomStrGen from "../../../utils/randomAlNumGen";


const typeToSubType :{
    Donation:string[],
    SchoolMaintainance:string[]
    Supplies:string[]
    Bills:string[]
    Kitchen:string[]
} = {
    Donation:["Invidual","Company"],
    SchoolMaintainance :["Building","Reconstruction","Fixing","Furniture"],
    Supplies:["Stationaries","Toys"],
    Bills:["Electricity","Water","Telephone"],
    Kitchen:["Food","Beverages","Utensils","Pots and Pans"],
}
const TransactionEdit= ()=>{
    const transactions = useTransactionQuery()
    const transactionId = useParams()["transactionId"]?useParams()["transactionId"]:""
    const {mutate:addTransaction} = useAddTransaction()
    const formik= useFormik<Transaction>({
        initialValues: transaction,
        onSubmit:(values:Transaction)=>{
            console.log(values)
            addTransaction(values)
        }
    }as FormikConfig<Transaction>)
    if (transactions.isLoading  ){
        return <p>Loading...</p>
    }
    if (transactions.isError){
        if(transactions.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {transactions.error.message}</p>
        }
    }
    if(transactions.isSuccess){
        console.log("isSuccess")
        const notification = transactions.data.filter((item)=>{
            return item.transactionId === transactionId
        })[0]
        return(
            <>
            <Button color = "error" onClick={()=>deleteNotification(notification.notificationId,()=>navigate(-1))} >(X) Delete</Button>
            <Button onClick={()=>navigate(-1)} > Back</Button>
            <NotificationEditForm notification = {notification} />
            </>
        )
        
        
    
        }
    return <p>Unknown error occured on ythe </p>
    
    return(
        
    )
}
export default TransactionEdit

