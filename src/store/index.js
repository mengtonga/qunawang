import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        letter:"",
        cityname:""
    },

    mutations:{
        changeleter(state,a){
            state.letter=a
        },
        cityname(state,b){
            state.cityname = b
        }
    }
    
})