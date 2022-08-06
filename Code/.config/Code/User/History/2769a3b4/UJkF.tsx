import { useNotificationQuery } from "../../hooks/useNotification";
import LinedTile from "../lined_tile/linedtile.component"

const TiledCollection = ({year,month,searchStudentId}:{year:string,month:string,searchStudentId:string})=>{

    const notsOfStudent = useNotificationQuery(searchStudentId)
    if (notsOfStudent.isLoading || notsOfStudent.isFetching ){
        return <p>Loading...</p>
    }
    if (notsOfStudent.isError){
        if(notsOfStudent.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {notsOfStudent.error.message}</p>
        }
    }
    if(notsOfStudent.isSuccess)
    return (
        <>
            {notsOfStudent.data.map((notification)=>{
                return <LinedTile onClick={}  left={notification.date} center={notification.month} right={notification.amount} />
            })}
        </>
    )
    return <p>An Unknown Error Occured</p>
}
export default TiledCollection