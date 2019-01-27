// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable node/no-extraneous-import */
import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../Money/index.vue"
import Ious from "../ious/index.vue"
// eslint-disable-next-line node/no-unpublished-import
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        name: "home",
        component: Home,
    }, {
        path: "/money",
        name: "money",
        component: Money,
    }, {
        path: "/ious",
        name: "ious",
        component: Ious,
    }],
})