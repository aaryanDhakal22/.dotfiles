import axios from "axios";

const client = axios.create({
    baseURL:"https://anmolsec.com/",
    headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'},
    method:"put"
})

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