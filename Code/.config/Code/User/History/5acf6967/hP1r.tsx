import { FormikConfig } from "formik";
import { ChangeEventHandler } from "react";

export const FormField = ({for,type,handleChange,value}:{for:string,type:string,handleChange:ChangeEventHandler,value:any}) => {
    return(
        <div className="formField">
                <label className="labelField" htmlFor="name">NAME</label>
                <input className="inputField" id="{for}" name="{for}" type="text" onChange={handleChange} value={value}/>
        </div>
    )
}