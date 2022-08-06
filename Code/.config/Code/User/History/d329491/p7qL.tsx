import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import {Student} from '../gtypes'


const fetchStudent = ():Promise<Student[]>=>{
    return axios.get<Student>("https://anmolsec.com/api/student").then(response => response.data)
}

export const useStudentQuery = ():UseQueryResult<Student[]>=>{
    return useQuery<Student[],Error>(['students'],fetchStudent,{
        // cacheTime:5000,
        staleTime:10000
    })
}
