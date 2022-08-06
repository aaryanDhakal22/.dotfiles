import { Button, TextField } from "@mui/material"
import { FormikConfig, useFormik } from "formik"
import { useNavigate, useParams } from "react-router-dom";
import { Student } from "../../../gtypes"
import { useNotificationQuery, useUpdateNotification } from "../../../hooks/useNotification";
import { useAddStudentData, useUpdateStudentData } from "../../../hooks/useStudentQuery"
import NotificationEditForm from "../notification_edit_form/notificationeditform.component";
import { deleteNotification } from "../../../hooks/useNotification";

const initialNotificationValues = {
    import { FormikConfig, useFormik } from "formik";
import { useUpdateNotification } from "../../../hooks/useNotification";
import { Notification } from "../../../gtypes";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import {v4 as uuid } from 'uuid';
const initialValues = {
    studentId: "",
    transactionId:'',
    notificationId:'',
    date:'',
    amount:0,
    month:'',
    speechTherapy:0,
    therapy: 0 ,
    transportation: 0 ,
    extras:0,
    note : '',
    tuition:0,
    snacks:0,
    paid:'',
}

const NotificationAdd = ()=>{
    const notification = initialValues
    const {mutate:updateNotification} = useUpdateNotification()
    const formik= useFormik<Notification>({
        initialValues: notification,
        onSubmit:(values:Notification)=>{
            updateNotification(values)
        }
    }as FormikConfig<Notification>)
    return (
        
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="date">DATE</label>
            <TextField  variant="outlined" id="date" name= "date" type= "date" onChange={formik.handleChange}value={formik.values.date}/><br></br>
            <label htmlFor="month">MONTH</label>
            <TextField  variant="outlined" id="month" name= "month" type= "text" onChange={formik.handleChange}value={formik.values.month}/><br></br>
            <label htmlFor="speechTherapy">SPEECH</label>
            <TextField  variant="outlined" id="speechTherapy" name= "speechTherapy" type= "number" onChange={formik.handleChange}value={formik.values.speechTherapy}/><br></br>
            <label htmlFor="therapy">THERAPY</label>
            <TextField  variant="outlined" id="therapy" name= "therapy" type= "number" onChange={formik.handleChange}value={formik.values.therapy}/><br></br>
            <label htmlFor="transportation">TRANSPORTATION</label>
            <TextField  variant="outlined" id="transportation" name= "transportation" type= "number" onChange={formik.handleChange}value={formik.values.transportation}/><br></br>
            <label htmlFor="snacks">SNACKS</label>
            <TextField  variant="outlined" id="snacks" name= "snacks" type= "number" onChange={formik.handleChange}value={formik.values.snacks}/><br></br>
            <label htmlFor="extras">EXTRA</label>
            <TextField  variant="outlined" id="extras" name= "extras" type= "number" onChange={formik.handleChange}value={formik.values.extras}/><br></br>
            <label htmlFor="note">NOTE</label>
            <TextField  variant="outlined" id="note" name= "note" type= "text" onChange={formik.handleChange}value={formik.values.note}/><br></br>
            <label htmlFor="tuition">TUITION</label>
            <TextField  variant="outlined" id="tuition" name= "tuition" type= "number" onChange={formik.handleChange}value={formik.values.tuition}/><br></br>
            <label htmlFor="paid">PAID</label>
            <Select id="paid" name="paid" value={formik.values.paid} label="Paid" onChange={formik.handleChange}>
                <MenuItem value={"Cash"}>Cash</MenuItem>
                <MenuItem value={"EPay"}>EPay</MenuItem>
                <MenuItem value={"Unpaid"}>Unpaid</MenuItem>
            </Select>
            <Button variant="contained" type="submit">Submit</Button>
        </form>
        )
}

export default NotificationAdd
}

const NotificationEdit = ()=>{
    const params = useParams()
    const notificationId = params["notificationId"]
    const {mutate:addStudent} = useUpdateNotification()
    const notsOfStudent = useNotificationQuery()

    const navigate = useNavigate()

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
            return item.notificationId === notificationId
        })[0]
        return(
            <>
            <Button color = "error" onClick={()=>deleteNotification(notification.notificationId,()=>navigate(-1))} >(X) Delete</Button>
            <Button onClick={()=>navigate(-1)} > Back</Button>
            <NotificationEditForm notification = {notification} />
            </>
        )
        
        
    
        }
    return <p>Unknown error occured on ythe </p>
}
export default NotificationEdit