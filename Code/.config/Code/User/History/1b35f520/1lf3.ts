export const dateFormatter= (date:string)=>{

  const [year,day,month] = date.split("/")
  // const year = dateArray[0]
  // const month = dateArray[1]
  // const day = dateArray[2]
  if(day.length<2){
    day.padStart(2,"0")
  }
  if(month.length<2)
  if(date.length !== 10){

    .map((item)=>{
      if (item.length===1){
        return item.padStart(2,"0")
      }
      return item
    })
    return dateArray[0]+"-"+dateArray[1]+'-'+dateArray[2]
  }

  }
