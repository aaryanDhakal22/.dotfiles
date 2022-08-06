import { FormControl, InputLabel, option, Select, SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Route, Routes } from "react-router-dom";
import TransactionCollection from "../../component/credit/creditcollection/collection.component";

const typeToSubType :{
    Donation:string[],
    SchoolMaintainance:string[]
    Supplies:string[]
    Bills:string[]
    Kitchen:string[]
} = {
    Donation:["Invidual","Company"],
    SchoolMaintainance :["Building","Reconstruction","Fixing","Furniture"],
    Supplies:["Stationaries","Toys"],
    Bills:["Electricity","Water","Telephone"],
    Kitchen:["Food","Beverages","Utensils","Pots and Pans"],
}

const CreditPage = ()=>{


    const [type,setType] = React.useState<"Donation"|"SchoolMaintainance"|"Supplies"|"Bills"|"Kitchen">("Donation")
    const [subType,setSubType] = React.useState<string>("")

    const handleTypeChange = (e)=>{
        setType(e.target.value as "Donation"|"SchoolMaintainance"|"Supplies"|"Bills"|"Kitchen" )
        setSubType("")
    }
    const handleSubTypeChange = (e:SelectChangeEvent)=>{
        setSubType(e.target.value as string)
    }

    return (
        <>
        <div className="topbar">

            <select id="type" name="type" defaultValue={"Donation"} value={type} onChange={handleTypeChange}>     
                <option value={"Donation"}>Donation</option>
                <option value={"SchoolMaintainance"}>School Maintainance</option>
                <option value={"Supplies"}>Supplies</option>
                <option value={"Bills"}>Bills</option>
                <option value={"Kitchen"}>Kitchen</option>
            </select>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
            <InputLabel id="subTypeLabel">Sub-Type</InputLabel>
            <Select id="subType" label="subTypeLabel" labelId="subTypeLabel" name="subType"  value={subType} onChange={handleSubTypeChange}>     
                {typeToSubType[type].map((item:string)=>{
                    return <option value={item}>{item}</option>
                })}
            </Select>
            </FormControl>
        </div>
        <div>{type}  {subType}</div>
        <Routes>
            <Route path="" element={<TransactionCollection type={type} subType ={subType} />}></Route>
        </Routes>
        </>
    )
}

export default CreditPage