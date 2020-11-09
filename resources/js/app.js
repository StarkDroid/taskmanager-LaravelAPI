import Vue from 'vue'
import VueRouter from 'vue-router'
import Moment from 'moment'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import { routes } from './routes';
import App from './views/App'

import '../css/style.css'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.filter('formatDate', function(value){
    if(value){
        return Moment(String(value)).format('DD-MMM-YYYY hh:mm')
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