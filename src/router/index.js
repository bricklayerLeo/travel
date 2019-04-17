import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import List from '@/components/List/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
