const Totaller = ({amount}:{amount:number})=>{
    return(
        <div className="fixed bg-background bottom-0 w-full left-[12rem] h-24 ">
            <div className="flex justify-center items-center">

                <h1 className="">Grand Total : {amount.toString()}</h1> 
            </div>
        </div>
    )
}

export default Totaller