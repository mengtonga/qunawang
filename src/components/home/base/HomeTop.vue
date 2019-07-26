<template>
    <div class="hometop">
        <i class="iconfont icon-fanhui"></i>
        <div class="topinput">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="请输入地点">
        </div>
        <router-link tag="div" to="city" class="topright">
            <span>{{cityname}}</span>
            <i class="iconfont icon-jiantou"></i>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"HomeTop",
    data(){
        return{}
    },
    computed:{
        cityname(){
            if(this.$store.state.cityname){
                return this.$store.state.cityname
            }
            return "北京"
        }
    }
}
</script>
<style lang="stylus" scoped>
    .hometop
        display flex
        align-items center
        height 0.88rem
        width 100%
        line-height 0.88rem
        background-color #00ABD8
        .icon-fanhui
            color #fff
            width .88rem
            text-align center
        .topinput
            padding-left .1rem
            flex 1
            background-color #ffffff
            height 0.64rem
            line-height 0.64rem
            border-radius .1rem
            input
                width 80%
                vertical-align middle
            .icon-sousuo
                vertical-align middle
                color #ccc 
        .topright
            padding .15rem
            color white
            .icon-jiantou
                font-size .24rem

            
</style>



