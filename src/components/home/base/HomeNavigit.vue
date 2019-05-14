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
    data(){
        return{
             "iconList": [{
                    "id": "0001",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    "desc": "景点门票"
                }, {
                    "id": "0002",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    "desc": "一日游"
                }, {
                    "id": "0003",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                    "desc": "长沙必游"
                }, {
                    "id": "0004",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
                    "desc": "踏青赏花"
                }, {
                    "id": "0005",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
                    "desc": "游乐园"
                }, {
                    "id": "0006",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                    "desc": "动植物园"
                }, {
                    "id": "0007",
                    "imgUrl": "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
                    "desc": "自然风光"
                }, {
                    "id": "0008",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png",
                    "desc": "湘西凤凰"
                }, {
                    "id": "0009",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
                    "desc": "橘子洲"
                }, {
                    "id": "0010",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png",
                    "desc": "玻璃桥"
                }],
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

