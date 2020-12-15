let Axios;

if(process.env.NODE_ENV === "MOCK"){
  Axios = require('axios');
  Axios.default.headers.post['Context-type'] = 'application/x-www-form-urlencoded'
}

export function fetch(url,params={}){
  if(process.env.NODE_ENV === "MOCK"){
    return new Promise(resolve => {
      Axios.post(url,params).then(
        response=>{
          resolve(response.data);
        }).catch((error)=>{
          reject(error);
      })
    })
  }else{

  }
}








