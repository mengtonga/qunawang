<template>
    <div class= "div">
        <banner :bannerImg='bannerImg' :sightName="sightName" :gallaryImgs="gallaryImgs" ></banner>
        <detail-head :sightName="sightName"  class ="head" ></detail-head>
    </div>
</template>
<script>
import {getFavorate} from "@/api"
import Banner from "@/components/detailfav/base/banner"
import DetailHead from "@/components/detailfav/base/header"
import CommonGallary from "@/commen/Gallary"


export default {
    name:"detailFav",
    data(){
        return{
            sightName:"",
            bannerImg:"",
            gallaryImgs:"",
        }
    },
    components:{
        Banner,
        CommonGallary,
        DetailHead
    },
    activated(){
        this.getData()
    },
    methods:{
        async getData(){
            let {sightName,bannerImg,gallaryImgs} =  await getFavorate(this.$route.params.id)
            this.sightName=sightName
            this.bannerImg=bannerImg

            this.gallaryImgs=gallaryImgs
           
           console.log(this.gallaryImgs)
        }
    }

}
</script>
<style lang="stylus" scoped>
.div
    height 8000px
.head
    height 50px 
</style>


