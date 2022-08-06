import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFeeStatus = ()=>{
    return getReq({url:'/fees/'})
}

export const useFeeStatus=(studentId:string)=>{
    return useQuery(['status',studentId],()=>fetchFeeStatus(studentId))
}