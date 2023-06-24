import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/views/AppMain"
import AppMap from "@/views/AppMap";
import AppMypage from "@/views/AppMypage";
import AppShop from "@/views/AppShop";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name:'Main',
    component: AppMain,
  },
  {
    path: "/map",
    name: "Map",
    component: AppMap,
  },
  {
    path: "/shop",
    name: "Shop",
    component: AppShop,
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: AppMypage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  ignoreDuplicateNavigation: true,
  routes,
});

export default router;
