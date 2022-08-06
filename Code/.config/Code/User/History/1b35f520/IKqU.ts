export const dateFormatter= (date:string)=>{
  let splitter;
  if(date.includes('-')){
    splitter = "-"
  }else{
    splitter = "/"
  }
  const dataArray = date.split(splitter)
  const year = dataArray[0]
  const month = dataArray[1]
  const day = dataArray[2]

  console.log(year,month,day)
  if(day.length<2){
    console.log("PADDING")
    day.padStart(2,"0")
  }

  if(month.length<2){
    month.padStart(2,"0")
  }

  console.log(year,month,day)
  
    return year+"-"+month+'-'+day
  }

  
