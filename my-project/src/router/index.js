import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TemplateOne from '@/components/TemplateOne'
import ContentOne from '@/components/TemplateOne/ContentOne'
import TemplateTwo from '@/components/TemplateTwo'
import ContentTwo from '@/components/TemplateTwo/ContentTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/template',
      name: 'TemplateOne',
      component: TemplateOne,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'content',
          name: 'ContentOneName',
          component: ContentOne
        }
      ]
    },
    {
      path: '/templateTwo',
      name: 'TemplateTwo',
      component: TemplateTwo,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'content',
          name: 'ContentTwoName',
          component: ContentTwo
        }
      ]
    }
  ]
})
