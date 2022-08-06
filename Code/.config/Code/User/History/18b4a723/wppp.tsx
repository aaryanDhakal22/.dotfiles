import React from "react";
import { StudentProfile, Transaction } from "../../gtypes";
import FEES_DATA from "../../transactionData";


const FeesDetails=({profiles}:{profiles :StudentProfile[]})=>{


    const [tsc,setTsc] = React.useState<Transaction[]>(FEES_DATA)
    const [webState,setWebState] = React.useState<string
    React.useEffect(()=>{
        fetch("https://djangostudenttestapi.herokuapp.com/student/")
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setProfiles(json)
            setWebState("LOADED")
        }).catch((error)=>{
            console.log(error)
        })
        },[])
    return <div>hi</div>
}
export default FeesDetails