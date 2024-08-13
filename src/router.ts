import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/Auth/login/Login.vue';
import path from './constants/path';
import name from './constants/name';

const routes = [
    {
        path: path.login,
        name: name.login,
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
