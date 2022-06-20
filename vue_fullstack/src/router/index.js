import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

import Home from "../components/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import About from "../components/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },

    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },

    {
      path: "/about",
      name: "about",
      component: About,
    },

    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
