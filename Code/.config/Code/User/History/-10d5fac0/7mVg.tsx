import { TextField } from "@mui/material"
import { FormikConfig, useFormik } from "formik"
import { Student } from "../../gtypes"

const AccountForm = ({student}:{student:Student})=>{

    const formik= useFormik<Student>({
        initialValues: student,
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
    return (
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <TextField
        variant="outlined"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
        /><br></br>
        <label htmlFor="group">group</label>
        <TextField
        variant="outlined"
            id="group"
            name="group"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.group}
        /><br></br>
        <label htmlFor="address">address</label>
        <TextField
        variant="outlined"
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
        /><br></br>
        <label htmlFor="age">age</label>
        <TextField
        variant="outlined"
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
        /><br></br>
        <label htmlFor="phone">phone</label>
        <TextField
        variant="outlined"
            id="phone"
            name="phone"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.phone}
        /><br></br>
        <label htmlFor="dob">dob</label>
        <TextField
        variant="outlined"
            id="dob"
            name="dob"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.dob}
        /><br></br>
        <label htmlFor="gender">gender</label>
        <TextField
        variant="outlined"
            id="gender"
            name="gender"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.gender}
        /><br></br>
        <label htmlFor="father">father</label>
        <TextField
        variant="outlined"
            id="father"
            name="father"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.father}
        /><br></br>
        <label htmlFor="mother">mother</label>
        <TextField
        variant="outlined"
            id="mother"
            name="mother"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mother}
        /><br></br>
    </form>
    )

}
export default AccountForm
