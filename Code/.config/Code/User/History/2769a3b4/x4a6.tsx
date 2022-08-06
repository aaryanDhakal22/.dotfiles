import { useNotificationQuery } from "../../hooks/useNotification";
import LinedTile from "../lined_tile/linedtile.component"

const TiledCollection = ({year,month,searchStudentId}:{year:string,month:string,searchStudentId:string})=>{

    const notsOfStudent = useNotificationQuery(searchStudentId)

    return (
        <>
        {notsOfStudent.data.map()}
        
        </>
    )
}
export default TiledCollection