import Vue from 'vue'
import VueRouter from 'vue-router'
import Moment from 'moment'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { routes } from './routes';
import App from './views/App'

import '../css/app.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.filter('formatDate', function(value){
    if(value){
        return Moment(String(value)).format('DD,MMMM,YYYY hh:mm')
    }
});

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});