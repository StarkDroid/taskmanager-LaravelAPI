import Vue from 'vue'
import VueRouter from 'vue-router'
import Bulma from 'bulma'

Vue.use(VueRouter)

import App from './views/App'
import Tasks from './views/Tasks'
import Home from './views/Home'

Vue.component('pagination', require('laravel-vue-pagination'));

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Home
        },
        {
            path: '/tasks',
            name: 'tasks.index',
            component: Tasks,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});