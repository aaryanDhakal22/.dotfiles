export const dateFormatter= (date:string)=>{
  let splitter;
  if(date.includes('-')){
    splitter = "-"
  }else{
    splitter = "/"
  }
  const dataArray = date.split(splitter)
  let year = dataArray[0]
  let month = dataArray[1]
  let day = dataArray[2]

  console.log(year,month,day)
  if(day.length<2){
    console.log("PADDING",day)
    day.padStart(2,"0")
  }

  if(month.length<2){
    month.padStart(2,"0")
  }

  console.log(year,month,day)
  
    return year+"-"+month+'-'+day
  }

  
