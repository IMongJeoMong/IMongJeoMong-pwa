import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
import MapView from "@/views/MapView";
import ShopView from "@/views/ShopView";
import MyPageView from "@/views/MyPageView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect : "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/map",
    name: "map",
    component: MapView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
  },
  {
    path: "/mypage",
    name: "mypage",
    component: MyPageView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  ignoreDuplicateNavigation: true,
  routes,
});

export default router;
