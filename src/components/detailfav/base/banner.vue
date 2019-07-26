<template>
    <div>
        <div class = "banner" @click="picShow">
            <img class = "banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
            <span class='banner-title'>{{sightName}}</span>
            <p class='banner-number'>
                <i class="iconfont icon-tupian"></i>
                <span>{{gallaryImgs.length}}</span>
            </p>
            </div>
        </div>
        <common-gallary :pics="gallaryImgs" v-if="isShow" @close="close"></common-gallary>
    </div>
</template>
<script>
import {getFavorate} from "@/api"
import CommonGallary from "@/commen/Gallary"

export default {
    name:'Banner',
    props:['bannerImg',"sightName",'gallaryImgs'],
    data(){
        return{
            weekInfo:[],   
            isShow:false
        }
    },
    components:{
        CommonGallary
    },
    methods:{
        picShow(){
            this.isShow=true;
            console.log(this.sightName)
        },
        close(){
            this.isShow=false;
        }
    }

}
</script>
<style lang='stylus' scoped>
  .banner
    position:relative
    height:0
    padding-bottom:55%
    .banner-img
      width:100%
    .banner-info
      position:absolute
      left:0
      right:0
      bottom:0
      color:#fff
      background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))
      line-height:.6rem
      .banner-title
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        position:absolute
        right:0
        top:0
        height: .36rem
        line-height: .36rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
</style>


