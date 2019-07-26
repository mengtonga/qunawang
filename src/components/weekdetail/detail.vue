<template>
    <div>
        <detail-wrapper></detail-wrapper>
        <router-link tag = "button"  :to="{path:'/weekdetail/Pics'}">nihao </router-link>
    </div>
</template>
<script>
import DetailWrapper from "@/components/weekdetail/base/wrapper"
export default {
    name:"WeekDetail",
    components:{
        DetailWrapper
    }
}
</script>

