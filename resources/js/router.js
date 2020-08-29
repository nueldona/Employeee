import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import create from './components/view/create.vue'
import home from './components/view/home.vue'

const routes = [
    {
        path:'/',
        name: 'home',
        component: home
    },
    {
        path:'/create',
        name: 'create',
        component: create
    },
    // {
    //     path: '/users',
    //     name: 'users.index',
    //     component: usersIndex
    // }
];

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;

