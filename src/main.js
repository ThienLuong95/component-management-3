// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import 'codemirror/lib/codemirror.css'
import VueCodemirror from 'vue-codemirror'
Vue.use(VueCodemirror)
Vue.use(Vuetify, {
    theme: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
});



Vue.config.productionTip = false;

/* eslint-disable no-new */
var app=new Vue({
    el: '#app',
    name: 'root',
    router,
    components: {App},
    template: '<App/>'
});

// vue init vuetityjs/webpack project-name
