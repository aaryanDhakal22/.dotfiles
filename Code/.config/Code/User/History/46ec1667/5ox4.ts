interface DOB{
    year:number
    month:number
    day:number
}
interface StudentPersonal{
    group:string
    address:string
    age:number
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
interface StudentProfile{
    id:string
    name:string
    personal:StudentPersonal
    account:StudentAccount
}