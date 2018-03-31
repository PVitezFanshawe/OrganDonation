import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import register from '@/components/register'
import BootstrapVue from 'bootstrap-vue'

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
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
