<template>
    <div class="navgit">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="(item,index) in filterImgs" :key="index">
                <div class="nav">
                    <div class="item" v-for="(item,index) in item" :key="index"> 
                        <img :src="item.imgUrl" alt="景点门票">
                        <div class="keywords">{{item.desc}}</div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        
       
    </div>
</template>
<script>
export default {
    name:"HomeNavigit",
    props:[
        "iconList"
    ],
    data(){
        return{
            swiperOption: {
                pagination: {
                el: '.swiper-pagination'
                }
            }
        }
    },
    computed:{
        filterImgs(){
            let imgs = []
            this.iconList.forEach((item,index)=>{
                let page = ~~(index/8)
                if(!imgs[page]){
                    imgs[page]=[]
                }
                imgs[page].push(item)
            })
            return imgs
        }
    }
    
}
</script>
<style lang="stylus" scoped>
.navgit>>>.swiper-pagination-bullets
    position relative
    margin .3rem 0
.nav
    display flex
    justify-content center
    flex-wrap wrap
    width 100%
    height 3.3rem
    .item
        display flex
        flex-direction column
        align-items center
        justify-content center
        width 25%
        img 
            padding 0 auto
            width 1.1rem
            vertical-align middle
            
        .keywords
            text-align center
</style>

