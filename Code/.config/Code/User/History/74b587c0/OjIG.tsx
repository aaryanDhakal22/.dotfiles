import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { Notification } from "../gtypes";
import { getReq } from "../utils/axios-utils";


const fetchNotification = (studentId:string):Promise<Notification[]>=>{
 
   return getReq({url:'/notification',data:{"studentId":studentId}})
    // return axios.get<Notification[]>("https://anmolsec.com/api/notification/").then(response => response.data)
}

export const useNotificationQuery = (studentId:string):UseQueryResult<Notification[]>=>{
    return useQuery<Notification[],Error>(['notificationOfOneStudent'],fetchNotification(studentId))
}
