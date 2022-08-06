import { useMutation, useQuery, UseQueryResult, useQueryClient } from "@tanstack/react-query";
import {Transaction} from '../gtypes'
import { getReq,putReq } from "../utils/axios-utils";
import { dateFormatter } from "../utils/temp_dateformatter";


const updateTransaction = (transaction:Transaction):Promise<Transaction>=>{
    return putReq({url:`/transaction/details/${transaction.transactionId}`, method:"put",data:transaction})
}
const addTransaction = (transaction:Transaction):Promise<Transaction>=>{
    return putReq({url:'/transaction/', method:"post",data:transaction})
}

const fetchTransaction = ():Promise<Transaction[]>=>{
   return getReq({url:'/transaction'})
}

export const useTransactionQuery = ():UseQueryResult<Transaction[]>=>{
    return useQuery<Transaction[],Error>(['transactions'],fetchTransaction,{
        // cacheTime:5000,
        refetchOnWindowFocus:false,
        select:(data)=>{
            return data.map((transaction)=>{
                return {...transaction,date:dateFormatter(transaction.date)}
            })
        },
        onError:(error)=>{
            console.log(error)
        }
        }
    )
}
export const useUpdateTransactionData = ()=>{
    const queryClient = useQueryClient()
    return useMutation(updateTransaction,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['transactions'])
        }
    })
}
export const useAddTransactionData = ()=>{
    const queryClient = useQueryClient()
    return useMutation(addTransaction,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['transactions'])
        }
    })
}
