import Vue from 'vue'
import Router from 'vue-router'
import CmMainContent from '@/components/cm-main-content'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/component/:componentName',
            name: 'component',
            component: CmMainContent
        },
    ]
})
