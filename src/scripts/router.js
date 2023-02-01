import { createRouter, createWebHistory } from "vue-router/dist/vue-router";
import HomeView from "@/pages/HomeView";
import LoginView from "@/pages/LoginView";

const routes = [
    { path: "/", component: LoginView },
    { path: "/mobileoffice", component: LoginView },
    { path: "/main", component: HomeView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
