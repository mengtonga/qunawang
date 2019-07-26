<template>
    <div class="city">
        <city-header></city-header>
        <city-serch :cities="cities"></city-serch>
        <city-list :hotCities="hotCities" :cities="cities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>
<script>
import {getCity}  from "@/api"
import CityHeader from "@/components/city/base/CityHeader"
import CitySerch from "@/components/city/base/CitySerch"
import CityList from "@/components/city/base/List"
import CityAlphabet from "@/components/city/base/alphabet"

export default {
    name:"City",
    data(){
        return{
            cities:[],
            hotCities:[]
        }
    },
    components:{
        CityHeader,
        CitySerch,
        CityList,
        CityAlphabet
    },
  created(){
      this.getData()
  },
  methods:{
    async getData(){
        let {cities,hotCities} = await getCity()
        this.cities = cities,
        this.hotCities = hotCities
    }
  }
}
</script>


