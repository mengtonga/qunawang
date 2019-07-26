<template>
    <div class="search">
        <input  
            type="text" 
            class="header-input"
            placeholder="输入城市"
            v-model="keywords"
            >
        <div class="search-content" v-show="keywords" ref="content">
            <ul>
                <li class="search-item" v-for="item in filterCities" :key="item.id" @click="handleClick(item.name)">{{item.name}}</li>
                <li v-if="filterCities.length==0">没有该城市！</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:"CitySerch",
    props:["cities"],
    data(){
        return{
            list:[
                {a:12},
                {a:34}
            ],
            keywords:''
        }
    },
    methods:{
        handleClick(cityname){
            this.$store.commit("cityname",cityname)
            this.$router.push("/")
            console.log("chufale")
        }
    },
    computed:{
        filterCities(){
            const result =[]
            for(let key in this.cities){
                this.cities[key].forEach((item,index) => {
                    if(item.name.includes(this.keywords)||item.spell.includes(this.keywords)){
                        result.push(item)
                    }
                });
            }
            return result
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.content,{
            click:true
        })
    }
}
</script>
<style lang='stylus' scoped>
.border-bottom::before
  border-color:#aaa
.search
  position:relative
  height:.72rem
  padding:0.1rem
  background-color:#00bcd4
  .header-input
    width:100%
    height:100%
    border-radius:.1rem
    text-align:center
  .search-content
    position:fixed
    z-index:20
    overflow:hidden
    top:1.78rem
    left:0
    right:0
    bottom:0
    background-color:#ccc
    .search-item
      line-height:.8rem
      padding-left:.2rem
      background-color:#fff
</style>
