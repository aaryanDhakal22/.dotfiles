import { FormikConfig, useFormik } from "formik"
import { Student } from "../../gtypes"

const AccountForm = ({student}:{student:Student})=>{

    const formik= useFormik<Student>({
        initialValues: foundStudent,
        onSubmit:(values)=>{
            const putURL = "https://anmolsec.com/student/details/"+values.studentId
            fetch(putURL,{
                method:"put",
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'},
                body: JSON.stringify(values)
            })
            .then(()=>{
                window.location.replace("/student/")
            })
        }
    }as FormikConfig<Student>)

}
export default AccountForm
