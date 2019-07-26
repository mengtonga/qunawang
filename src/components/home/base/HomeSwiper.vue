<template>
    <div class= "swiper">
       <swiper :options="swiperOption" v-if="isshow" >
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperList" :key="index">
                <img class="img" :src="item.imgUrl" alt="">
                <!-- <img class="img" :src="item.imgUrl alt="></img> -->
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name:"HomeSwiper",
    props:[
        'swiperList'
    ],
    data(){
        return{
           swiperOption: {
                 pagination: {
                    el: '.swiper-pagination',
                },
                autoplay:true,
                loop : true,
            }
        }
    },
    computed:{
       //防止轮播出现bag
        isshow(){
            return this.swiperList.length
        }
    }
    
}
</script>
<style lang="stylus" scoped>
    .swiper>>>.swiper-pagination-bullet-active
        background-color #fff

    .swiper
        height 2rem
        width 100%
        .img
            width 100%
        .swiper-container
            height 100%
</style>

