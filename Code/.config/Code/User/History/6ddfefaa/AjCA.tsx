import { useLocation, useParams } from "react-router-dom";

const TransactionCollection = ()=>{
    const toShow = useLocation()
    const filter_key = toShow.pathname.substring(1)
    return (
        <>
        {filter_key}
        </>
    )   
}

export default TransactionCollection