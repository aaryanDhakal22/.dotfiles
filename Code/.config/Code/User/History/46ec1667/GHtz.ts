
export interface StudentProfile{
    studentId:string
    name:string
    phone:number
    age:number
    group:string
    gender:string
    father:string
    mother:string
    address:string
    dob: string
    speechTherapy:number
    therapy: number 
    transportation: number 
    tuition:number
    snacks:number
    isAdmission:boolean
}

export interface NotificationProfile{
    studentId:string
    transactionId:string
    date:string
    paidAmount:int
    forMonth:string
    therapy: number 
    speechTherapy:number
    transportation: number 
    admissionCharge:number
    monthlyCharge:number
    snacks:number
    paid:boolean

}