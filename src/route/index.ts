import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/index.vue";
import Test from "./../pages/test.vue";

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/test",
        component: Test
    }
];

export const router = createRouter({
    routes: routes,
    history: createWebHistory()
});
