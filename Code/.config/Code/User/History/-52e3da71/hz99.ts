import axios from "axios";

const putClient = axios.create({
    baseURL:"https://anmolsec.com/",
    headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'},
    method:"put"
})
export const putReq = ({...options})=>{
    const onSuccess = (response:any) => response
    const onError = (error:Error)=>{
        console.log(error)
    }
    return putClient(options).then(onSuccess).catch(onError)
}

const putURL = "https://anmolsec.com/student/details/"+values.studentId
            fetch(putURL,{
                method:"put",
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'},
                body: JSON.stringify(values)
            })
            .then(()=>{
                window.location.replace("/student/")
            })