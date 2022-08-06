import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import {Student} from '../gtypes'


const fetchStudent = (studentId:string):Promise<Student>=>{
    return axios.get<Student>(`https://anmolsec.com/api/student/details/${studentId}`).then(response => response.data)
}

export const useStudentQuery = (studentId:string):UseQueryResult<Student>=>{
    return useQuery<[Student],Error>(['students',studentId],fetchStudent)
}
