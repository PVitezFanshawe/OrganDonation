import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import cmspage from '@/components/cmspage'
import BootstrapVue from 'bootstrap-vue'
import register from '@/components/register.vue'
import login from '@/components/login.vue'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/ContentManager',
      name: 'cmspage',
      component: cmspage,
      children: [
        {
          name: 'register',
          path: 'register',
          component: register
        },
        {
          name: 'login',
          path: 'login',
          component: login
        }
      ]
    }
  ]
})
