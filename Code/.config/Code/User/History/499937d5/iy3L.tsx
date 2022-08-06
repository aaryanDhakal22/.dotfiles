import { Button, TextField } from "@mui/material"
import { FormikConfig, useFormik } from "formik"
import { useParams } from "react-router-dom";
import { Student } from "../../../gtypes"
import { useNotificationQuery, useUpdateNotification } from "../../../hooks/useNotification";
import { useAddStudentData, useUpdateStudentData } from "../../../hooks/useStudentQuery"

const NotificationEdit = ()=>{
    const params = useParams()
    const studentId = params["notificationId"]
    const {mutate:addStudent} = useUpdateNotification()
    const notsOfStudent = useNotificationQuery()
    if (notsOfStudent.isLoading  ){
        return <p>Loading...</p>
    }
    if (notsOfStudent.isError){
        if(notsOfStudent.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {notsOfStudent.error.message}</p>
        }
    }
    if(notsOfStudent.isSuccess){
        console.log("isSuccess")
        const notification = notsOfStudent.data.filter((item)=>{
            return item.studentId === studentId
        })
        return(
            <div>
                {notification.map((item)=>{
                    return <div>{item.amount}</div>
                })}
            </div>
        )
        
        
    
        }
    return <p>Unknown error occured on ythe </p>
}
export default NotificationEdit