import { useQuery } from "@tanstack/react-query";



export const useFeeStatus=(studentId:string)=>{
    return useQuery(['status',studentId],fetchFeeStatus)
}