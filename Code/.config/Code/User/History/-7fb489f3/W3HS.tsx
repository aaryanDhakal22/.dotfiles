import React from "react";

import { StudentPersonal, StudentProfile } from "../../gtypes";

const StudentTile =(profile: {profile:StudentProfile})=>{
    const {name,personal,id,account} = profile.profile
    return <div >
        <div className="card">
            <div className="card-body">
            <div className="card-title h4">{name}</div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        <h1>{name}</h1>
        <p>Group : {personal.group}</p>
        <p>Age : {personal.age}</p>
        <p>Phone : {personal.phone}</p>
        <p>Address : {personal.address}</p>
        </div>
}

export default StudentTile