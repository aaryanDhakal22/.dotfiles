
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
    notificationId:string
    date:string
    amount:int
    month:string
    speechTherapy:number
    therapy: number 
    transportation: number 
    extras:number
    note : string
    tuition:number
    snacks:number
    paid:boolean
}