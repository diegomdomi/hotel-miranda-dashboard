export function delayFunction (data, time = 200){
  return new Promise ((resolve)=>{
      setTimeout(()=>{
          resolve(data);
      },time)
  })
}

// export const requestGET = (url) => {
//     const getLs = JSON.parse(localStorage.getItem("userLogin"))
//     return fetch({
//       url: `${url}/bookings`,
//       headers: {
//           "Authorization": `Bearer ${getLs.token}`,
//           "Content-Type": "application/json"
//       }
//     }).then((response) => {return response.json().then((jsonData) => {return jsonData})})
// }

export const requestGET = async (url) => {
     const getLs = JSON.parse(localStorage.getItem("userLogin"));
  try{
    const requestOptions = {
      // method: "DELETE",
      mode: "cors",
      Accept: 'application/json',
      headers: { 'Content-Type': 'application/json',
      "Authorization": `Bearer ${getLs.token}` },
  };
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data.data;
    }
    catch (err) {
      alert(`Sorry we have some problems with the form: ${err}`)
    }
}

export const requestDELETE = async (url) => {
     const getLs = JSON.parse(localStorage.getItem("userLogin"));
  try{
    const requestOptions = {
      method: "DELETE",
      mode: "cors",
      Accept: 'application/json',
      headers: { 'Content-Type': 'application/json',
      "Authorization": `Bearer ${getLs.token}` },
  };

  const response = await fetch(url, requestOptions);
  const data = await response.json();
  
  return data.data;
    }
    catch (err) {
      alert(`Sorry we have some problems with the form: ${err}`)
    }
}