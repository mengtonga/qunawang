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