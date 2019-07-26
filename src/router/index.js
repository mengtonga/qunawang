import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/city'
import WeekDetail from '@/components/weekdetail/detail'
import detailFav from '@/components/detailfav/detailFav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/weekdetail',
      name: 'WeekDetail',
      component: WeekDetail,
    },
    {
      path: '/detailFav/:id',
      name: 'detailFav',
      component: detailFav,
    }
  ]
})
