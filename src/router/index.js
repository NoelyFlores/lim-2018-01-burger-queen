import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin'
import listTable from '@/components/listTable'
import order from '@/components/content'
import kitchen from '@/components/kitchen'
import edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      redirect: 'admin'
    },
    {
      path: 'admin',
      name: 'client',
      component: listTable,
      meta: {list: 'tables'},
      children: [
        {
          path: 'edit',
          name: 'edit',
          component: edit
        }
      ]
    },
    {
      path: 'order',
      name: 'order',
      component: order
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      component: kitchen
    }
  ]
/*   scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  } */
})
