import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { Notification } from "../gtypes";
import { getReq } from "../utils/axios-utils";
import { dateFormatter } from "../utils/temp_dateformatter";


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
        select:(data)=>{ 
            return data.map((notification)=>{
                return {...notification,date:dateFormatter(notification.date)}
            })
        }
    })
}
