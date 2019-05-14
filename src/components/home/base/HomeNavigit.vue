<template>
    <div class="navgit">
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide>
                <div class="nav">
                    <div class="item">
                        <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="景点门票">
                        <div class="keywords">景点门票</div>
                    </div>
                    <div class="item">
                        <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png" alt="">
                        <div class="keywords">北京一日游</div>
                    </div>
                    <div class="item">
                        <img src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" alt="">
                        <div class="keywords">北京必游</div>
                    </div>
                    <div class="item">
                        <img src="http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png" alt="">
                        <div class="keywords">溜娃儿</div>
                    </div>
                    <div class="item">
                        <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png" alt="">
                        <div class="keywords">爬长城</div>
                    </div>
                    <div class="item">
                        <img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt="">
                        <div class="keywords">故宫</div>
                    </div>
                    <div class="item">
                        <img src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
                        <div class="keywords">动植物园</div>
                    </div>
                    <div class="item">
                        <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/35d83bb968d80d54926f30cfb92cb6ff.png" alt="">
                        <div class="keywords">每周好货</div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="nav">
                    <div class="item">
                        <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/35d83bb968d80d54926f30cfb92cb6ff.png" alt="">
                        <div class="keywords">每周好货</div>
                    </div>
                    <div class="item">
                        <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/35d83bb968d80d54926f30cfb92cb6ff.png" alt="">
                        <div class="keywords">每周好货</div>
                    </div>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        
       
    </div>
</template>
<script>
export default {
    name:"HomeNavigit",
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

