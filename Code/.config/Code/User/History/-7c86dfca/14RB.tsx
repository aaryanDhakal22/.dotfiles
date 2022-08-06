import { Button, TextField } from "@mui/material"
import { FormikConfig, useFormik } from "formik"
import { Student } from "../../../gtypes"
import { useAddStudentData, useUpdateStudentData } from "../../../hooks/useStudentQuery"
import { FormField } from "../../formfield/formfield.component";

const AccountForm = ({student,toAdd}:{student:Student,toAdd:boolean})=>{
    const {mutate:updateStudent} = useUpdateStudentData()
    const {mutate:addStudent} = useAddStudentData()

    const formik= useFormik<Student>({
        initialValues: student,
        onSubmit:(values)=>{
            console.log(values)
            if(toAdd){
                addStudent(values)
            }else{
                updateStudent(values)
            }
        }
    }as FormikConfig<Student>)
    return (
        
        <form onSubmit={formik.handleSubmit}>
            <FormField fieldFor={"therapy"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.therapy}  />
            <FormField fieldFor={"speechTherapy"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.speechTherapy}  />
            <FormField fieldFor={"transportation"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.transportation}  />
            <FormField fieldFor={"tuition"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.tuition}  />
            <FormField fieldFor={"snacks"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.snacks}  />
            <input type="checkbox" name="isAdmission" id="isAdmission" value="admission" checked={formik.values.isAdmission?true:false} />
            <button className="btn mt-6" type="submit">Submit</button>
        </form>
        )
    
}
export default AccountForm