

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Student } from "../../../gtypes";

const Tile =({profile}:{profile:Student})=>{
    const {name,group,age,phone,address,studentId} = profile
    const navigate = useNavigate()
    const location = useLocation()
    const handleNavigate = ()=>{
        console.log(location.pathname)
        if(location.pathname==="/student"){

            navigate(`/student/details/${studentId}`)
        }else{
            navigate(`/fees/${studentId}`)
        }
    }
    return (
        <div className="" onClick={handleNavigate}>
            <div className="">
                <div className="">{name}</div>
                <div className="">
                <p>Group : {group}</p>
                <p>Age : {age}</p>
                <p>Phone : {phone}</p>
                <p>Address : {address}</p>       
                </div>
            </div>
        </div>
        
    )
}

export default Tile