import React from "react";
import { StudentProfile, Transaction } from "../../gtypes";
import FEES_DATA from "../../transactionData";


const FeesDetails=({profiles}:{profiles :StudentProfile[]})=>{


    const [tsc,setTsc] = React.useState<Transaction[]>(FEES_DATA)

    return <div>hi</div>
}
export default FeesDetails