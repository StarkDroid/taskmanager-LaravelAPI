import Vue from 'vue'
import VueRouter from 'vue-router'
import Bulma from 'bulma'
import Moment from 'moment'

import { routes } from './routes';
import App from './views/App'

Vue.use(VueRouter)

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