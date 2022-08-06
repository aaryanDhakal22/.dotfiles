import { FormikConfig } from "formik";
import { ChangeEventHandler } from "react";

export const FormField = ({for,type,handleChange,value}:{for:string,type:string,handleChange:ChangeEventHandler}) => {
    return(
        <div className="formField">
                <label className="labelField" htmlFor="name">NAME</label>
                <input className="inputField" id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        </div>
    )
}