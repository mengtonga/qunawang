<template>
    <div class= "swiper">
       <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide>
                <img class="img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/5eb82a8ca5b0cebb2c3ae1a53a4d8f81.jpg_750x200_645bfba1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/5eb82a8ca5b0cebb2c3ae1a53a4d8f81.jpg_750x200_645bfba1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/dc11f0bb94057224b104a2017f313e21.jpg_750x200_feee379d.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name:"HomeSwiper",
    data(){
        return{
            swiperOption: {
                 pagination: {
                    el: '.swiper-pagination'
                }
            }
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

