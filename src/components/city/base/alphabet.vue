<template>
    <div class="alphabet">
        <ul>
            <li  
                class = "item" v-for="(item,index) in cities" :key="index"
                @click="handleClick(index)">
                {{index}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"CityAlphabet",
    props:["cities"],
    data(){
        return {}
    },
    methods:{
        handleClick(index){
            this.$store.commit("changeleter",index)
            console.log(index)
        }
    },

}
</script>
<style lang="stylus" scoped>
    .alphabet
        position fixed
        display flex
        flex-direction column
        justify-content center
        right 0
        top 0
        bottom 0
        width .4rem 
        .item
            line-height 0.5rem
            color red
            text-align center
            font-weight 600

</style>


