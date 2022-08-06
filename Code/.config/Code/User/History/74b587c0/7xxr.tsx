import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { Notification } from "../gtypes";
import { getReq } from "../utils/axios-utils";


const fetchNotification = ():Promise<Notification[]>=>{
 
   return getReq({url:'/notification',data={}})
    // return axios.get<Notification[]>("https://anmolsec.com/api/notification/").then(response => response.data)
}

export const useNotificationQuery = ():UseQueryResult<Notification[]>=>{
    return useQuery<Notification[],Error>(['notificationOfOneStudent'],fetchNotification)
}
