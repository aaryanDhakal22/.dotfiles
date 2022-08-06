export const dateFormatter= (date:string)=>{

  const  = date.split("/")

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
