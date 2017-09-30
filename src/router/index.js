import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index'
import Tangce from '@/pages/Tangce/index'
import Tangshuo from '@/pages/Tangshuo/index'
import Tangren from '@/pages/Tangren/index'
import Hezuo from '@/pages/Hezuo/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/tangce',
      name: 'Tangce',
      component: Tangce
    },
    {
      path: '/tangshuo',
      name: 'Tangshuo',
      component: Tangshuo
    },
    {
      path: '/tangren',
      name: 'Tangren',
      component: Tangren
    },
    {
      path: '/hezuo',
      name: 'Hezuo',
      component: Hezuo
    }
  ]
})
