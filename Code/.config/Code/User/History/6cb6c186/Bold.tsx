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
        <div className="fixed right-0 bg-dangerRed p-5 rounded-lg text-white ">
            <h1>
                Error
            </h1>
            <hr</hr>
            <div>
                {message}
            </div>
        </div>
    )
}