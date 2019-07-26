<template>
    <div class = "top">
        <router-link 
            to = "/" tag = "i" 
            class = "iconfont icon-fanhui left"
            > </router-link>
        <h1>赏花好地方</h1>
    </div>
</template>
<script>
export default {
    name:"DetailWrapper",
    data(){
        return{}
    }
}
</script>
<style lang="stylus" scoped>
.top
    display flex
    align-items center
    height 0.88rem
    width 100%
    line-height 0.88rem
    background-color #00ABD8
    color #ffffff
    .left
        color #fff
        width .88rem
        text-align center
    h1
        padding-left 2REM
        text-align:center
        font-size:.32rem

</style>


