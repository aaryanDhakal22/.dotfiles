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
        <div className="fixed right-10 bg-dangerRed p-3 rounded-lg text-white w-60">
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