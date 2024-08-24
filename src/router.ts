import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Auth/login/Login.vue";
import path from "./constants/path";
import name from "./constants/name";
import Home from "./pages/UserPage/home/Home.vue";
import Register from "./pages/Auth/register/Register.vue";
import UserLayout from "./layouts/UserLayout.vue";

const routes = [
  {
    path: path.home,
    component: UserLayout,
    children: [
      {
        path: "",
        name: name.home,
        component: Home,
      },
    ],
  },
  {
    path: path.register,
    name: name.register,
    component: Register,
  },
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
