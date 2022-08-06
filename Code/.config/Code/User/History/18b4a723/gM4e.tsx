import React from "react";
import { StudentProfile, Transaction } from "../../gtypes";
import FEES_DATA from "../../transactionData";


const FeesDetails=({profiles}:{profiles :StudentProfile[]})=>{
    let searchId = useParams()
    const found_profile = profiles.filter((item)=>{
        return item.unid === searchId['unid']
    })[0]

    const [tsc,setTsc] = React.useState<Transaction[]>(FEES_DATA)
    const [webState,setWebState] = React.useState<string>("LOADING")
    React.useEffect(()=>{
        fetch("https://djangostudenttestapi.herokuapp.com/transaction/"+profiles.)
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setTsc(json)
            setWebState("LOADED")
        }).catch((error)=>{
            console.log(error)
        })
        },[])
    return <div>hi</div>
}
export default FeesDetails