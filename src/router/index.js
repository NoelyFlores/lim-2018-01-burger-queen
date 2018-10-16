import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin'
import listTable from '@/components/listTable'
import order from '@/components/content'
import kitchen from '@/components/kitchen'

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
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      component: kitchen
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
