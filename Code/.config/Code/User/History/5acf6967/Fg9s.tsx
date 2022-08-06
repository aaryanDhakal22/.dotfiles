export const FormField = ({for,type,formik}:{for:string,type:string,formik:Formik}) => {
    return(
        <div className="formField">
                <label className="labelField" htmlFor="name">NAME</label>
                <input className="inputField" id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        </div>
    )
}