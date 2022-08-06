const Totaller = ({amount}:{amount:number})=>{
    return(
        <div className="fixed bg-background bottom-0 w-full left-[12rem] h-24 ">
        <h1 className="text-center">Grand Total : {amount.toString()}</h1> 
        </div>
    )
}

export default Totaller