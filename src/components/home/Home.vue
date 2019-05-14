<template>
  <div class="div">
    <home-top></home-top>
    <home-swiper></home-swiper>
    <home-navigit></home-navigit>
    <home-favorite></home-favorite>
  </div>
</template>
<script>
import HomeTop from"@/components/home/base/HomeTop"
import HomeSwiper from"@/components/home/base/HomeSwiper"
import HomeNavigit from"@/components/home/base/HomeNavigit"
import HomeFavorite from"@/components/home/base/HomeFavorite"
export default {
  name:"Home",
  components:{
    HomeTop,
    HomeSwiper,
    HomeNavigit,
    HomeFavorite,
  },
  data(){
    return{}
  }
}
</script>
