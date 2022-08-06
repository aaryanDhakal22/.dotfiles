import { useMutation, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";

import { Notification } from "../gtypes";
import { getReq, putReq } from "../utils/axios-utils";
import { dateFormatter } from "../utils/temp_dateformatter";

const updateNotification = (notification:Notification):Promise<Notification>=>{
    return putReq({url:`/notification/details/${notification.notificationId}`, method:"put",data:notification})
}

const addNotification = (notification:Notification):Promise<Notification>=>{
    return putReq({url:'/notification/', method:"post",data:notification})
}

const fetchNotification = (studentId:string|undefined):Promise<Notification[]>=>{
    if(studentId===undefined){
        throw Error
    }
    console.log(studentId)
   return getReq({url:`/notification/?studentId=${studentId}`})
    // return axios.get<Notification[]>("https://anmolsec.com/api/notification/").then(response => response.data)
}

export const usePerNotificationQuery = ()=>{
    return useQuery
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
    return useMutation(updateNotification,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['students'])
        }
    })
}
export const useAddNotification = ()=>{
    const queryClient = useQueryClient()
    return useMutation(addNotification,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['students'])
        }
    })
}
