import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import {Student} from '../gtypes'


const dateFormatter= (date:string)=>{
    const dateArray = date.split("/").map((item)=>{
      if (item.length===1){
        return item.padStart(2,"0")
      }
      return item
    })
    return dateArray[0]+"-"+dateArray[1]+'-'+dateArray[2]
}

const addStudent = ():Promise<Student>=>{
    return axios.post<Student,Error>("https://anmolsec.com/api/student")
}

const fetchStudent = ():Promise<Student[]>=>{
    return axios.get<Student[]>("https://anmolsec.com/api/student").then(response => response.data)
}

export const useStudentQuery = ():UseQueryResult<Student[]>=>{
    return useQuery<Student[],Error>(['students'],fetchStudent,{
        // cacheTime:5000,
        staleTime:10000,
        select:(data)=>{
            return data.map((student)=>{
                return {...student,dob:dateFormatter(student.dob)}
            })
        }
        }
    )
}
export const useAddStudentData = ()=>{
    return useMutation()
}
