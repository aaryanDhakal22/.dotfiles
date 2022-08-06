interface DOB{
    year:number
    month:number
    day:number
}
interface StudentPersonal{
    group:string
    address:string
    phone:number
    dob: DOB
    gender:'Male'|"Female"
    father:string
    mother:string
}

interface StudentAccount{
    therapy: number 
    speechTherapy:number
    transportation: number 
    admissionCharge:number
    monthlyCharge:number
    snacks:number
}