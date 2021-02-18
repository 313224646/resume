import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/fund/set',
      component: () => import('./views/fund-set'),
    },
    {
      path: '/fund',
      component: () => import('./views/fund'),
    },
    {
      path: '/',
      component: () => import('./views/index'),
    },
    {
      path: '*',
      component: () => import('./views/index')
    }
  ]
})
