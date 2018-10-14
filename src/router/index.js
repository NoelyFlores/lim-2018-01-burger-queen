import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin'
import listTable from '@/components/listTable'
import order from '@/components/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'client',
      component: listTable,
      meta: {list: 'tables'}
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/order/',
      name: 'order',
      component: order
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
