export const dateFormatter= (date:string)=>{
  let splitter;
  if(date.includes('-')){
    splitter = "-"
  }else{
    splitter = "/"
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

  
