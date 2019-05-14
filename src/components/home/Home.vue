<template>
  <div class="div">
    <home-top></home-top>
    <home-swiper></home-swiper>
    <home-navigit></home-navigit>
    <home-favorite></home-favorite>
  </div>
</template>
<script>
//获取数据
import {getHome} from "@/api"
import HomeTop from"@/components/home/base/HomeTop"
import HomeSwiper from"@/components/home/base/HomeSwiper"
import HomeNavigit from"@/components/home/base/HomeNavigit"
import HomeFavorite from"@/components/home/base/HomeFavorite"
import { constants } from 'fs';
import { METHODS } from 'http';

export default {
  name:"Home",
  components:{
    HomeTop,
    HomeSwiper,
    HomeNavigit,
    HomeFavorite,
  },
  data(){
    return{
      iconList:[],
      swiperList:[],
      recommendList:[],
      weekendList:[]
      
    }
  },
  created(){
      getHome().then(res=>{
        console.log(res);
        
      })
  },
  methods:{
    async getData(){
      let {iconList,swiperList,recommendList,weekendList}= await this.getHome()
      this.iconList=iconList,
      this.swiperList=swiperList,
      this.recommendList=iconLirecommendListst,
      this.weekendList=icoweekendListnList

    }
  }
  
}
</script>
