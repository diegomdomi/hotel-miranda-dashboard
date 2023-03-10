export function delayFunction (data:any, time:number = 200){
  return new Promise ((resolve)=>{
      setTimeout(()=>{
          resolve(data);
      },time)
  })
}
