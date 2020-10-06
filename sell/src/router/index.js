import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";
Vue.use(Router);
export default new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "../views/commodity",
        },
        {
            path: '/commodity',
            name: 'commodity',
            component: () =>
                import ("../views/commodity/index.vue")
        },
        {
            path: '/comment',
            name: 'comment',
            component: () =>
                import ("../views/comment/index.vue")
        },
        {
            path: '/merchant',
            name: 'merchant',
            component: () =>
                import ("../views/merchant/index.vue")
        }
    ],
    linkActiveClass: "active",
})