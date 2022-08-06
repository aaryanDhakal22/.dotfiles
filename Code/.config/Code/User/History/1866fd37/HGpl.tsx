

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Student } from "../../../gtypes";

const FeeTile =({profile}:{profile:Student})=>{
    const {name,group,age,phone,address,studentId} = profile
    const navigate = useNavigate()
    const location = useLocation()
    const handleNavigate = ()=>{
        if(location.pathname==="/student"){
            navigate(`/student/details/${studentId}`)
        }else{
            navigate(`/fees/${studentId}`)
        }
    }
    return (
        
    )
}

export default FeeTile