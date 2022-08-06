import { useNotificationQuery } from "../../hooks/useNotification";
import LinedTile from "../lined_tile/linedtile.component"

const TiledCollection = ({year,month,searchStudentId}:{year:string,month:string,searchStudentId:string})=>{

    const notsOfStudent = useNotificationQuery(searchStudentId)
    if (notsOfStudent.isLoading){
        return <p>Loading...</p>
    }
    if (notsOfStudent.isError){
        if(notsOfStudent.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {notsOfStudent.error.message}</p>
        }
    }
    return (
        <>
        
        </>
    )
}
export default TiledCollection