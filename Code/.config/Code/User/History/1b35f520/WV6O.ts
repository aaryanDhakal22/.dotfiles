export const dateFormatter= (date:string)=>{
  
  if(date.includes('-')){
    const splitter = "-"
  }else{
    const splitter = "/"
  }
  const dataArray = date.split(splitter)
  
  if(day.length<2){
    day.padStart(2,"0")
  }

  if(month.length<2){
    month.padStart(2,"0")
  }
  console.log(year,month,day)

  console.log(year,month,day)
  
    return year+"-"+month+'-'+day
  }

  
