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
    data(){
        return{
            "swiperList": [{
                    "id": "0001",
                    "imgUrl": "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/7c7963c2b74b0f4f19ae3972f75b7f18.jpg_750x200_347ecfa5.jpg"
                },{
                    "id": "0002",
                    "imgUrl": "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
                },{
                    "id": "0003",
                    "imgUrl": "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
                },{
                    "id": "0004",
                    "imgUrl": "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5cfb89bebe41028d9b6732bcbe959cd6.jpg_750x200_4eb23790.jpg"
                },{
                    "id": "0005",
                    "imgUrl": "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/fd8c3e553ad9196058853d015bd67d29.jpg_750x200_2c5b094a.jpg"
                }],
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

