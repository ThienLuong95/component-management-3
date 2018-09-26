import Vue from 'vue'
import Vuex from 'vuex'
import store from './open/store';
import EventBus from './open/store/busEvent';
import jQuery from 'jquery';
// import './open/sass/style.scss'
Vue.use(Vuex);

import nokiaButton from './open/components/nokia-button'
import nokiaHeader from './open/components/nokia-header'
import nokiaHero from './open/components/nokia-hero'
import nokiaCarousel from  './open/components/nokia-carousel'
import nokiaSocials from  './open/components/nokia-socials'
import nokiaPagination from  './open/components/nokia-pagination'
import nokiaSelect from  './open/components/nokia-select'
import nokiaNavigation from  './open/components/nokia-navigation'
import nokiaFlickity from  './open/components/nokia-flickity'
import nokiaAvatarUser from  './open/components/nokia-avatar-user'
import nokiaAsyncTable from  './open/components/nokia-async-table'
import nokiaConfirmationModal from  './open/components/nokia-confirmation-modal'
import MessageModel from  './open/components/MessageModal'

Vue.component('nokia-button',nokiaButton);
Vue.component('nokia-header',nokiaHeader);
Vue.component('nokia-hero',nokiaHero);
Vue.component('nokia-carousel',nokiaCarousel);
Vue.component('nokia-socials',nokiaSocials);
Vue.component('nokia-pagination',nokiaPagination);
Vue.component('nokia-select',nokiaSelect);
Vue.component('nokia-navigation',nokiaNavigation);
Vue.component('nokia-flickity',nokiaFlickity);
Vue.component('nokia-avatar-user',nokiaAvatarUser);
Vue.component('nokia-async-table',nokiaAsyncTable);
Vue.component('nokia-confirmation-modal',nokiaConfirmationModal);
Vue.component('message-modal',MessageModel);

window.exportDemoFunction = function(context){
    context.Vue = Vue;
    context.store = store;
    context.bus = EventBus;
    context.jQuery = jQuery;
    context.$ = jQuery;
};

