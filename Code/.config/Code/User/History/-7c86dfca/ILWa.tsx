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
                         <FormField fieldFor={"name"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.name}  />
                         <FormField fieldFor={"name"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.name}  />
                         <FormField fieldFor={"name"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.name}  />
                         <FormField fieldFor={"name"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.name}  />
                         <FormField fieldFor={"name"} type={"text"} handleChange = {formik.handleChange} value ={formik.values.name}  />


            <Button variant="contained" type="submit">Submit</Button>
        </form>
        )
    
}
export default AccountForm