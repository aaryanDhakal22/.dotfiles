export const dateFormatter= (date:string)=>{

  let dateArray= date.split("/")
  let year = dateArray[0]
  let month = dateArray[1]
  let day = dateArray[2]
  if (month === undefined && day === undefined){
    let dateArray= date.split("-")
    let year = dateArray[0]
    let month = dateArray[1]
    let day = dateArray[2]
  }

  console.log(year,month,day)

  if(day.length<2){
    day.padStart(2,"0")
  }

  if(month.length<2){
    month.padStart(2,"0")
  }
  console.log(year,month,day)
  
    return year+"-"+month+'-'+day
  }

  
