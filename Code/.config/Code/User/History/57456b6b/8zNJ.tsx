import { Button, MenuItem, Select } from "@mui/material"
import { FormikConfig, useFormik } from "formik"
import { Student } from "../../../gtypes";
import { useAddStudentData, useUpdateStudentData } from "../../../hooks/useStudentQuery";
import { FormField } from "../../formfield/formfield.component";

const PersonalForm = ({student,toAdd}:{student:Student,toAdd:boolean})=>{
    const {mutate:updateStudent} = useUpdateStudentData()
    const {mutate:addStudent} = useAddStudentData()

    const formik= useFormik<Student>({
        initialValues: student,
        onSubmit:(values)=>{
            if(toAdd){
                addStudent(values)
            }else{
                updateStudent(values)
            }
        }
    }as FormikConfig<Student>)
    return (
        <form className="" onSubmit={formik.handleSubmit}>
            {/* <div className="formField">
                <label className="labelField" htmlFor="name">NAME</label>
                <input className="inputField" id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
            </div> */}
            <FormField fieldFor={"name"} type={"text"} handleChange = {formik.handleChange}  />
            <div className="">
        <label htmlFor="name">Student ID</label>
        <input className="form-field"
            id="studentId"
            name="studentId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.studentId}
        /><br></br>
        </div>
        <div className="">
        <label htmlFor="group">Group</label>
        <input className="form-field"
            id="group"
            name="group"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.group}
        /></div>
        <label htmlFor="address">Address</label>
        <input className="form-field"
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
        /><br></br>
        <label htmlFor="age">Age</label>
        <input className="form-field"
        
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
        /><br></br>
        <label htmlFor="phone">Phone</label>
        <input className="form-field"
        
            id="phone"
            name="phone"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.phone}
        /><br></br>
        <label htmlFor="father">father</label>
        <input className="form-field"
        
            id="father"
            name="father"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.father}
        /><br></br>
        <label htmlFor="mother">mother</label>
        <input className="form-field"
        
            id="mother"
            name="mother"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mother}
        /><br></br>
        <label htmlFor="dob">Birthday</label>
        <input className="form-field"
        
            id="dob"
            name="dob"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.dob}
        /><br></br>
        <label htmlFor="gender">gender</label>

        <Select
        defaultValue="M"
        id="gender"
        name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
        >
        <MenuItem value={"M"}>Male</MenuItem>
        <MenuItem value={"F"}>Female</MenuItem>
        <MenuItem value={"O"}>Other</MenuItem>
        </Select>
        
        <Button type = "submit" variant="contained">Submit</Button>
    </form>
    )

}
export default PersonalForm
