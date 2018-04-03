import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import cmspage from '@/components/cmspage'
import BootstrapVue from 'bootstrap-vue'
import cmsregister from '@/components/cms-register.vue'
import cmslogin from '@/components/cms-login.vue'
import cmsstories from '@/components/cms-stories.vue'
import cmscreateStory from '@/components/cms-createStory.vue'
import viewstory from '@/components/cms-viewstory.vue'
import cmscompanies from '@/components/cms-companies.vue'
import cmscreateCompany from '@/components/cms-createCompany.vue'

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
          component: cmsregister
        },
        {
          name: 'login',
          path: 'login',
          component: cmslogin
        },
        {
          name: 'stories',
          path: 'stories',
          component: cmsstories
        },
        {
          name: 'addstory',
          path: 'addstory',
          component: cmscreateStory
        },
        {
          name: 'oneStory',
          path: 'singlestory/:story',
          component: viewstory
        },
        {
          name: 'companies',
          path: 'companies',
          component: cmscompanies
        },
        {
          name: 'addcompany',
          path: 'addcompany',
          component: cmscreateCompany
        }
      ]
    }
  ]
})
