import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import order from '@/page/order/order'
import person from '@/page/person/person'
import search from '@/page/search/search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/home' 
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/order',
      name: 'order',
      component: order
    },{
      path: '/',
      name: 'person',
      component: person
    },{
      path: '/',
      name: 'search',
      component: search
    },
  ]
})
