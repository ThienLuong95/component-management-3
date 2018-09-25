import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions:{}
});

import './open/css/style.css'
import './open/css/landing-page.css'

import nokiaButton from './open/components/nokia-button'
import nokiaHeader from './open/components/nokia-header'
import nokiaHero from './open/components/nokia-hero'
import nokiaCarousel from  './open/components/nokia-carousel'
Vue.component('nokia-button',nokiaButton);
Vue.component('nokia-header',nokiaHeader);
Vue.component('nokia-hero',nokiaHero);
Vue.component('nokia-carousel',nokiaCarousel);

window.exportDemoFunction = function(context){
    context.Vue = Vue;
    context.store = store;
};

