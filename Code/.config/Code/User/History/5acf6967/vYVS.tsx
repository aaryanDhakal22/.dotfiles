import { FormikConfig } from "formik";
import { ChangeEventHandler } from "react";

export const FormField = ({fieldFor,type,handleChange,value}:{fieldFor:string,type:string,handleChange:ChangeEventHandler,value:any}) => {
    return(
        <div className="formField">
                <label className="labelField" htmlFor="name">NAME</label>
                <input className="inputField" id="{for}" name="{for}" type="text" onChange={handleChange} value={value}/>
        </div>
    )
}