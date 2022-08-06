import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFeeStatus = ()=>{
    axios.get('')
}

export const useFeeStatus=(studentId:string)=>{
    return useQuery(['status',studentId],fetchFeeStatus)
}