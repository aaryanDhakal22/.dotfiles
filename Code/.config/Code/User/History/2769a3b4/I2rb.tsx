import LinedTile from "../linedtile/linedtile.component"

const TiledCollection = ({year,month}:{year:string,month:string})=>{
    return (
        <>
        <p>{year}</p>
        <p>{month}</p>
        <LinedTile/>
        
        </>
    )
}
export default TiledCollection