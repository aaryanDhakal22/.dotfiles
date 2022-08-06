export const SelectFormField = () => {
    return (
        <div className="formField">
                <label className="labelField" htmlFor="gender">GENDER</label>
                <select className="inputField" name='gender'  value={formik.values.gender} onChange={formik.handleChange} id="gender">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
            </div>
    )
}