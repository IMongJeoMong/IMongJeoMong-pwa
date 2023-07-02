import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

import AppMain from "@/views/AppMain"
import AppMap from "@/views/AppMap";
import AppMypage from "@/views/AppMypage";
import AppMypageChallenge from "@/views/AppMypage_challenge.vue";
import AppMypageVisited from "@/views/AppMypage_visited.vue";
import AppMypageBackground from "@/views/AppMypage_background.vue";
import AppMypageCharacter from "@/views/AppMypage_character.vue";
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
    path: "/mypage/challenge",
    name: "MypageChallenge",
    component: AppMypageChallenge,
  },
  {
    path: "/mypage/visited",
    name: "MypageVisited",
    component: AppMypageVisited,
  },
  {
    path: "/mypage/background",
    name: "MypageBackground",
    component: AppMypageBackground,
  },
  {
    path: "/mypage/character",
    name: "MypageCharacter",
    component: AppMypageCharacter,
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

//router 페이지 이동할때
router.beforeEach((to, from, next) => {
  store.commit("PreviewStore/SET_PREVIEW_ITEM", null);

  next();
});

export default router;
