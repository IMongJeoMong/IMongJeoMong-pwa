import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/views/AppMain"
import AppMap from "@/views/AppMap";
import AppMypage from "@/views/AppMypage";
import AppShop from "@/views/AppShop";
import AppUser from "@/views/AppUser";
import UserLogin from "@/components/user/UserLogin";
import TestVue from "@/components/map/MarkerOverlay";
import MapSearchList from "@/components/map/MapSearchList";
import UserRegister from "@/components/user/UserRegister";

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
    path: 'maplist',
    name: 'MapList',
    component: MapSearchList,
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
  {
    path: "/user",
    name: "User",
    component: AppUser,
    redirect: "/user/login",
    children: [
      {
        path: 'login',
        name: 'UserLogin',
        component: UserLogin,
      },
      {
        path: 'register',
        name: 'Register',
        component: UserRegister,
      }
    ]
  },
  {
    path: "/test",
    name: "Test",
    component: TestVue,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  ignoreDuplicateNavigation: true,
  routes,
});

export default router;
