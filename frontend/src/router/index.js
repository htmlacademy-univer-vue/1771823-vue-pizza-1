import { createRouter, createWebHistory } from "vue-router";
import { middlewarePipeline, isAuthenticated } from "@/middlewares";

import MainView from "../views/MainView.vue";
import IndexView from "@/views/IndexView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import CartView from "@/views/CartView.vue";
import OrdersView from "@/views/OrdersView.vue";
import LoginView from "@/views/LoginView.vue";
import UserDataView from "@/views/UserDataView.vue";
import PopupView from "@/views/PopupView.vue";
import HeaderLayout from "../layouts/HeaderLayout.vue";
import SidebarLayout from "../layouts/SidebarLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: MainView,
      meta: {
        middlewares: [isAuthenticated],
        layout: HeaderLayout,
      },
    },
    {
      path: "/welcome",
      name: "Welcome",
      component: WelcomeView,
    },
    {
      path: "/cart",
      name: "Cart",
      component: CartView,
      meta: {
        middlewares: [isAuthenticated],
        layout: HeaderLayout,
      },
    },
    {
      path: "/orders",
      name: "Orders",
      component: OrdersView,
      meta: {
        middlewares: [isAuthenticated],
        layout: SidebarLayout,
      },
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: LoginView,
    },
    {
      path: "/user-data",
      name: "UserData",
      component: UserDataView,
      meta: {
        middlewares: [isAuthenticated],
        layout: SidebarLayout,
      },
    },
    {
      path: "/popup",
      name: "Popup",
      component: PopupView,
    },
  ],
});

middlewarePipeline(router);

export default router;
