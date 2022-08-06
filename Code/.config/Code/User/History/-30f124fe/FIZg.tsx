import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { ChangeEvent } from "react";
import { Route, Routes } from "react-router-dom";
import TransactionCollection from "../../component/credit/creditcollection/collection.component";

const CreditPage = ()=>{


    const [type,setType] = React.useState<string>("")
    const [subType,setSubType] = React.useState<string>("")

    const handleChange = (e:ChangeEvent<HTMLInputElement> )=>{
        return 
    }

    return (
        <>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
            <InputLabel id="subTypeLabel">Type</InputLabel>
            <Select id="type" name="type" defaultValue={"Donation"} value={type} label="Paid" onChange={(e:ChangeEvent<HTMLInputElement>)=>setType(e.currentTarget.value)}>     
                <MenuItem value={"Donation"}>Donation</MenuItem>
                <MenuItem value={"SchoolMaintainance"}>School Maintainance</MenuItem>
                <MenuItem value={"Supplies"}>Supplies</MenuItem>
                <MenuItem value={"Bills"}>Bills</MenuItem>
                <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
            </Select>
            </FormControl>
        <Routes>
            <Route path="" element={<TransactionCollection/>}></Route>
        </Routes>
        </>
    )
}

export default CreditPage