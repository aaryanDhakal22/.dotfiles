import React from "react";
import { TransactionProfile } from "../../gtypes";
const Transaction = ({tsc}:{tsc:TransactionProfile})=>{
    const month_index={
        "1" : "Baisakh",
        "2" : "Jestha",
        "3": "Ashar",
        "4" : "Shrawan",
        "5":"Bhadra",
        "6":"Ashoj",
        "7":"Kartik",
        "8":"Paush"
    }
    return (
        <div className="col-6">
        <div className="card hover-pointer"  onClick={handleNavigate}>
            <div className="card-body">
                <div className="card-title h4">{tsc.date}</div>
                <div className="card-text">
                    <p>{tsc.paidAmount}</p>
                    <p>{tsc.forMonth}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Transaction