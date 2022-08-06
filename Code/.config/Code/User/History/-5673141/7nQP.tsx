import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FormikConfig, useFormik } from "formik";
import { Transaction } from "../../../gtypes";
import { useAddTransaction } from "../../../hooks/useTransaction";
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
    const newTransactionId = randomStrGen()
    const {mutate:addTransaction} = useAddTransaction()

    const formik= useFormik<Transaction>({
        initialValues: transaction,
        onSubmit:(values:Transaction)=>{
            console.log(values)
            addTransaction(values)
        }
    }as FormikConfig<Transaction>)
    console.log(typeToSubType.Supplies)
    return(
        
    )
}
export default TransactionAdd

