export const SelectFormField = ({fieldFor,type,handleChange,value}:{fieldFor:string,type:string,handleChange:ChangeEventHandler,value:any}) => {
    return (
        <div className="formField">
                <label className="labelField" htmlFor="gender">{fieldFor.toUpperCase()}</label>
                <select className="inputField" name='fieldFor'  value={value} onChange={handleChange} id={fieldFor}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
            </div>
    )
}