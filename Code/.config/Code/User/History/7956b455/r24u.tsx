import React from "react";
import { TransactionProfile } from "../../gtypes";
const Transaction = ({tsc}:{tsc:TransactionProfile[]})=>{
    return (
        <div className="col-6">
        <div className="card hover-pointer"  onClick={handleNavigate}>
            <div className="card-body">
                <div className="card-title h4">{name}</div>
                <div className="card-text">     
                </div>
            </div>
        </div>
        </div>
    )
}

export default Transaction