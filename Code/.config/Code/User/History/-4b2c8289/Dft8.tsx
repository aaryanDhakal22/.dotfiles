import { TextField } from "@mui/material";
import React from "react";
import { useStudentQuery } from "../../../hooks/useStudentQuery";
import FeeTile from "../tile/tile.component";



const FeeCollection = ()=>{
    const profiles = useStudentQuery()
    const [searchStd,setSearchStd] = React.useState<string>("")
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
    }
    if(profiles.isLoading){
        return <div className="display-1">LOADING...</div>
    }
    if(profiles.isError){
        if(profiles.error instanceof Error){
            return <span>Error: {profiles.error.message}</span>
        }
    }
    if(profiles.isSuccess){

        const filtered_profiles = profiles.data.filter((item)=>{
            return item.name.toLocaleLowerCase().includes(searchStd.toLocaleLowerCase())
        }) 

    
        return (
            <div>

            <div className=" flex flex-row gap-5 justify-end items-center max-w-full bg-background h-28">
                {/* <button className="btn mr-auto ml-8" > FILTER</button> */}
                <input type="text" id="outlined-name" className="py-3 px-5 mr-32 text-2xl " placeholder="Search..."value={searchStd}onChange={handleChange}/>     
            </div>
                
                <div className="grid grid-cols-3 gap-12 p-10" >
                {filtered_profiles.map((profile)=>{
                    return  <FeeTile key ={profile.studentId} profile={profile}/>
                })} 
                </div>
            </div>
        )
    }
    return <div>An Error has Occured</div>
}

export default FeeCollection