export const EmptyPage = () => {
    return (
        <>
        <button className="btn">Display Alert</button>
        <SideAlert message={"Unknown error at Collections"} />
        </>
    )
    }

const SideAlert = ({message}:{message:string})=>{
    return(
        <div className="fixed right-0 bg-dangerRed p-5 rounded-lg text-white w-80">
            <button className="bg-red-500  rounded-full px-2">
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