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
        <div>
            Hello
        </div>
    )
}