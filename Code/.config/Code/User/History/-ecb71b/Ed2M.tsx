

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
        <div className="bg-background p-10 rounded-2xl" onClick={handleNavigate}>
            <div className="text-white">
                <div className="text-4xl"><span className="text-primaryText">Name </span>: {name}</div><br></br>
                <div className="">
                    <p><span className="text-primaryText">Group</span> : {group}</p>
                    <p><span className="text-primaryText">Age</span> : {age}</p>
                    <p><span className="text-primaryText">Phone</span> : {phone}</p>
                    <p><span className="text-primaryText">Address</span> : {address}</p>       
                </div>
            </div>
        </div>
        
    )
}

export default Tile