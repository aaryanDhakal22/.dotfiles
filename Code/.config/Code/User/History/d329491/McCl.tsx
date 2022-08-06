import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import {Student} from '../gtypes'


const fetchStudent = ():Promise<Student>=>{
    return axios.get<Student>("https://anmolsec.com/api/student").then(response => response.data)
}

export const useStudentQuery = (studentId:string):UseQueryResult<Student[]>=>{
    return useQuery<Student,Error>(['students',studentId],fetchStudent,{
        staleTime:10000
    })
}
