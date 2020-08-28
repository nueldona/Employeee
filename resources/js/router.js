import Vue from "vue";
import Router from "vue-router";
import { create } from "lodash";

Vue.use(Router);

const routes = [
    {
        path:'/',
        name: '',
        // component: './'
    }
];

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;

