//专门用来管理数据请求的
import axios from "axios"

axios.interceptors.response.use(function (response) {
    // Do something before request is sent
    return response.data.data;
  });

//请求home组件的数据接口
export let getHome = ()=>{
    return axios.get("/static/mork/index.json")
}
//请求city组件的数据接口
export let getCity = ()=>{
  return axios.get("/static/mork/city.json")
}
//请求喜欢组件的数据接口
export let getFavorate  = (id)=>{
  return axios.get('/static/mork/detail/'+id+'.json')
}
