import React from "react";

export const EmptyPage = () => {
    const [show,setShow] = React.useState<boolean>(true)
    return (
        <>
        <button className="btn" onClick={()=>setShow(false)} >Display Alert</button>
        <SideAlert show = {show}  message={"Unknown error at Collections"} />
        </>
    )
    }

const SideAlert = ({message,show}:{message:string,show:boolean})=>{
    return(
        <div className="fixed right-10 bg-dangerRed p-3 rounded-lg text-white w-60 scale-100 transition-all duration-100 origin-right">
            <button className="bg-red-400 shadow-lg fixed right-14 rounded-full px-2">
                x
            </button>
            <div className="font-bold text-xl ">
                Error
            </div>
            <div>
                {message}
            </div>
        </div>
    )
}