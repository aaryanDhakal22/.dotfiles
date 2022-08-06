import { useLocation, useParams } from "react-router-dom";

const TransactionCollection = ()=>{
    const toShow = useLocation()
    return (
        <>
        {toShow}
        </>
    )   
}

export default TransactionCollection