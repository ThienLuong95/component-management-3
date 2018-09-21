import Vue from 'vue'
import Router from 'vue-router'
import CmMainContent from '@/components/cm-main-content'
import HomePage from '@/components/cm-home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/component/:id',
            name: 'component',
            component: CmMainContent
        },
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
    ]
})
