import { useNotificationQuery } from "../../hooks/useNotification";
import LinedTile from "../linedtile/linedtile.component"

const TiledCollection = ({year,month,searchStudentId}:{year:string,month:string,searchStudentId:string})=>{

    const notsOfStudent = useNotificationQuery(searchStudentId)
    return (
        <>
        <p>{year}</p>
        <p>{month}</p>
        <LinedTile/>
        
        </>
    )
}
export default TiledCollection