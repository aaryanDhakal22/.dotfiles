import React from "react";
import {Route,Routes } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {Student} from "../../gtypes";

import Collection from "../../component/collection/collection.component";
import FeesDetails from "../../component/feesdetails/feesdetails.component";
import { useNotificationQuery } from "../../hooks/useNotification";

const Fees = ()=>{

    const [searchFeeStd,setSearchFeeStd] = React.useState<string>("")
    const notiQuery = useNotificationQuery()

    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchFeeStd(new_search)
    }
    if(notiQuery.isLoading){
        return <div className="display-1">LOADING...</div>
    }
    if(notiQuery.isError){
        if(notiQuery.error instanceof Error){
            return <div>Error : {notiQuery.error.message}</div>
        }
    }
    if(notiQuery.isSuccess){

        return (
            <>
            <TextField
            id="outlined-name"
            label="Search Student"
            value={searchFeeStd}
            onChange={handleChange}
            />
            <Routes>
                <Route path="/" element={<Collection searchStd={searchFeeStd} profiles = {profiles}/>} />
                <Route path="/student/:unid" element= {<FeesDetails profiles={profiles} />}/>
            </Routes>
            </>
        )
    }
    return <div>An error has occured</div>
}
export default Fees