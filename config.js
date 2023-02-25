import axios from "axios";


export const apiConfig = {
    baseUrl : "https://api.themoviedb.org/3/",
    apiKey : "f89a6c1f22aca3858a4ae7aef10de967",
    originImg : (path)=>(`https://image.tmdb.org/t/p/original/${path}`),
    smallImg : (path)=>(`https://image.tmdb.org/t/p/w200/${path}`)
  }
  
  export const axiosRequest = axios.create({
    baseURL : apiConfig.baseUrl,
    headers : {"Content-Type" : "application/json"},
    params : {api_key:apiConfig.apiKey}
  });