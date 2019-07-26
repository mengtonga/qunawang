<template>
  <div class="div">
    <home-top></home-top>
    <div class="homecontent" ref="wrapper">
      <div>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-navigit :iconList="iconList"></home-navigit>
        <home-favorite :recommendList="recommendList"></home-favorite>
        <home-weekend :weekendList="weekendList"></home-weekend>
      </div>
    </div>
  </div>
</template>
<script>
//获取数据
import {getHome} from "@/api"

import HomeTop from"@/components/home/base/HomeTop"
import HomeSwiper from"@/components/home/base/HomeSwiper"
import HomeNavigit from"@/components/home/base/HomeNavigit"
import HomeFavorite from"@/components/home/base/HomeFavorite"
import HomeWeekend from"@/components/home/base/Weekend"

//引入滑动效果
import BScroll from 'better-scroll'
export default {
  name:"Home",
  components:{
    HomeTop,
    HomeSwiper,
    HomeNavigit,
    HomeFavorite,
    HomeWeekend
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
      this.getData()
  },
  mounted(){
     this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
        })
  },
  methods:{
    async getData(){
      let {iconList,swiperList,recommendList,weekendList}= await getHome()
      this.iconList=iconList
      this.swiperList=swiperList
      this.recommendList=recommendList
      this.weekendList=weekendList
    console.log(this.swiperList)
    }
  }
}
</script>
<style lang="stylus" scoped>
li
  color  pink
  height 30px
  border 1px solid #fff
.homecontent
  position absolute
  top .88rem
  left 0
  bottom 0
  right 0
  overflow hidden
</style>

