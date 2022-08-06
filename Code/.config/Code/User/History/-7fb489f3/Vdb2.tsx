import React from "react";

import { StudentPersonal, StudentProfile } from "../../gtypes";

const StudentTile =(profile: {profile:StudentProfile})=>{
    const {name,personal,id,account} = profile.profile
    return <div >
        <h1>{name}</h1>
        <p>Group : {personal.group}</p>
        <p>Age : {personal.age}</p>
        <p>Phone : {personal.phone}</p>
        <p>Address : {personal.address}</p>
        </div>
}

export default StudentTile