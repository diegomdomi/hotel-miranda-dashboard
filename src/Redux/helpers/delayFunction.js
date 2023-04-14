export function delayFunction (data, time = 200){
  return new Promise ((resolve)=>{
      setTimeout(()=>{
          resolve(data);
      },time)
  })
}



export const requestGET = async (url,method,body) => {
     const getLs = JSON.parse(localStorage.getItem("userLogin"));
  try{
    const requestOptions = {
      method: `${method}`,
      mode: "cors",
      Accept: 'application/json',
      headers: { 'Content-Type': 'application/json',
      "Authorization": `Bearer ${getLs.token}` },
      body:JSON.stringify(body)

  };

  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data.data;
    }
    catch (err) {
      alert(`Sorry we have some problems with the form: ${err}`)
    }
}
// export const requestPOST = async (url,method,body) => {
//      const getLs = JSON.parse(localStorage.getItem("userLogin"));
//   try{
//     const requestOptions = {
//       method: `${method}`,
//       mode: "cors",
//       Accept: 'application/json',
//       headers: { 'Content-Type': 'application/json',
//       "Authorization": `Bearer ${getLs.token}` },
//       body:JSON.stringify(body)
//   };

//   const response = await fetch(url, requestOptions);
//   const data = await response.json();
//   return data.data;
//     }
//     catch (err) {
//       alert(`Sorry we have some problems with the form: ${err}`)
//     }
// }