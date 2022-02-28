import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../pages/index.vue";
import Search from "../pages/search.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/search",
        component: Search,
        beforeEnter: (to, _, next) => {
            /* /search => undefined */
            /* /search?keyword => null */
            /* /search?keyword= => 長さ0の空文字 */
            if (to.query.keyword === null || to.query.keyword?.length === 0) {
                next({path: "/"})
            } else {
                next();
            }
        }
    }
];

export const router = createRouter({
    routes: routes,
    history: createWebHistory()
});
