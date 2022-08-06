export const dateFormatter= (date:string)=>{

  const dateArray = date.split("/")
  const year = dateArray[0]
  const month = dateArray[1]
  const day = dateArray[2]
  if(day.length<2){
    day.padStart(2,"0")
  }
  if(month.length<2){
    month.padStart(2,"0")
  }
  
    return year+"-"+month+'-'+day
  }

  
