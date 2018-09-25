// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import 'codemirror/lib/codemirror.css'
import './css/style.css'
import VueCodemirror from 'vue-codemirror'

Vue.config.productionTip = false;

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        projects: [],
    },
    getters: {
        getProjectById: (state) => (id) => {
            for (let project of state.projects) {
                if (project.projectId === id) {
                    return project;
                }
            }
            return null;
        },
    },
    mutations: {
        setProjects(state, projects) {
            state.projects = projects;
            console.log(state.projects)
        }
    },
    actions:{}

});

Vue.use(VueCodemirror);
Vue.use(Vuetify, {
    theme: {
        primary: '#2196F3',
        secondary: '#1565C0',
        accent: '#4DD0E1',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
});

var app = new Vue({
    el: '#app',
    name: 'root',
    router,
    store,
    components: {App},
    template: '<App/>'
});


