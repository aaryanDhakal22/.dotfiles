const Totaller = ({amount}:{amount:number})=>{
    return(
        <div className="fixed flex justify-center items-center bg-background bottom-0 w-full left-[12rem] h-24 ">

                <h1 className="text-4xl">Grand Total : {amount.toString()}</h1> 
        </div>
    )
}

export default Totaller