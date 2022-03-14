import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import IndexPage from "../pages/index.vue";
import ReviewPage from "../pages/review.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: IndexPage
    },
    {
        path: "/reviews/:id",
        component: ReviewPage,
    }
];

export const router = createRouter({
    routes: routes,
    history: createWebHistory()
});
