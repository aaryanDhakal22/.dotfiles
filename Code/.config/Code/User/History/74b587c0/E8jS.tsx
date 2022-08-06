import { useMutation, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";

import { Notification } from "../gtypes";
import { getReq } from "../utils/axios-utils";
import { dateFormatter } from "../utils/temp_dateformatter";

const updateStudent = (student:Student):Promise<Student>=>{
    return putReq({url:`/student/details/${student.studentId}`, method:"put",data:student})
}
const addStudent = (student:Student):Promise<Student>=>{
    return putReq({url:'/student/', method:"post",data:student})
}

const fetchNotification = (studentId:string|undefined):Promise<Notification[]>=>{
    if(studentId===undefined){
        throw Error
    }
    console.log(studentId)
   return getReq({url:`/notification/?studentId=${studentId}`})
    // return axios.get<Notification[]>("https://anmolsec.com/api/notification/").then(response => response.data)
}

export const useNotificationQuery = (studentId:string|undefined):UseQueryResult<Notification[]>=>{
    
    return useQuery<Notification[],Error>(['notificationOfOneStudent'],()=>fetchNotification(studentId),{
        staleTime:5000,
        refetchOnWindowFocus:false,
        select:(data)=>{ 
            return data.map((notification)=>{
                return {...notification,date:dateFormatter(notification.date)}
            })
        }
    })
}
export const useUpdateNotification = ()=>{
    const queryClient = useQueryClient()
    return useMutation(updateStudent,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['students'])
        }
    })
}
export const useAddNotification = ()=>{
    const queryClient = useQueryClient()
    return useMutation(addStudent,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['students'])
        }
    })
}
