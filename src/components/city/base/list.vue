<template>
    <div class = "list" ref="wrapper"   >
        <div>
            <!-- //当前城市 -->
            <div>
                <h3 class="list-title" @click='handleClick'>当前城市</h3>
                <div class="city">
                <span @click='handleClick($store.state.cityname)'>{{$store.state.cityname}}</span> 
                </div>
            </div>
            <!-- 热门城市 -->
            <div>
                <h3 class="list-title">热门城市</h3>
                <div class="city">
                        <span v-for="(item,index) in hotCities" :key="index" @click="handleClick(item.name)">{{item.name}}</span>
                </div>
            </div>
            <!-- 字母排序列表 -->
            <div v-for="(city,index) in cities" :key="index">
                <h3 class="list-title"  :ref="index">{{index}}</h3>
                <ul>
                    <li class="city-item"
                        v-for="cityitem in city" 
                        :key="cityitem.id"
                       @click='handleClick(cityitem.name)'>{{cityitem.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
// 引入滑动
import BScroll from 'better-scroll'

export default {
    name:"CityList",
    props:["hotCities","cities"],
    computed:{
        letter(){
            return this.$store.state.letter         
        }
    },
    methods:{
        handleClick(cityname){
            //将获得的城市名字存到公公仓库
            this.$store.commit("cityname",cityname)
            this.$router.push("/")
            console.log(cityname)
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
        })
    },
    watch:{
        letter(value){
            // this.scroll.scrollToElement(this.$refs)
           this.scroll.scrollToElement(this.$refs[value][0])
       }
    }
}
</script>
<style lang='stylus' scoped>
  .border-bottom:before
      border-color:#aaa
  .list
    position:fixed
    overflow: hidden
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
  .list-title
    line-height: 0.54rem
    background: #eee
    padding-left: 0.2rem
    color: #666
    font-size: 0.26rem
  .city
    padding-left:.15rem
    span
      display:inline-block
      width:28%
      padding:.15rem .2rem
      margin:.1rem
      border:.01rem solid #ccc
      text-align:center
      box-sizing:border-box
      border-radius:.05rem
  .city-item
    line-height:.8rem
    padding-left:.2rem
</style>
