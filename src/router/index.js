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
import AppMypageModify from "@/views/AppMypage_modify.vue";
import AppShop from "@/views/AppShop";
import AppUser from "@/views/AppUser";
import UserLogin from "@/components/user/UserLogin";
import TestVue from "@/components/map/MarkerOverlay";
import MapSearchList from "@/components/map/MapSearchList";
import UserRegister from "@/components/user/UserRegister";
import AppMypageVisitedCard from "@/views/AppMypage_visitedCard.vue";
import AppMypageUpdateInfo from "@/views/AppMypage_updateInfo";

// to : 이동할 경로
// from : 현재경로 나타냄
// next : 이동을 허용하기 위한 콜백함수, next("경로") 사용하면 이동,
const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters["UserInfoStore/getUserInfo"];
  const token = sessionStorage.getItem("access-token");
  console.log("로그인 처리 전", checkUserInfo, token);
  console.log("토큰 유효성 체크");
  if (checkUserInfo != null && token) {
    console.log("로그인 인증 확인");
    next();
  }
  else {
    alert("로그인이 필요한 페이지입니다");
    router.push({ name: "UserLogin" });
  }
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: 'Main',
    component: AppMain,
  },
  {
    path: "/map",
    name: "Map",
    beforeEnter: onlyAuthUser,
    component: AppMap,
  },
  {
    path: 'maplist',
    name: 'MapList',
    beforeEnter: onlyAuthUser,
    component: MapSearchList,
  },
  {
    path: "/shop",
    name: "Shop",
    beforeEnter: onlyAuthUser,
    component: AppShop,
  },
  {
    path: "/mypage",
    name: "Mypage",
    beforeEnter: onlyAuthUser,
    component: AppMypage,
  },
  {
    path: "/mypage/challenge",
    name: "MypageChallenge",
    beforeEnter: onlyAuthUser,
    component: AppMypageChallenge,
  },
  {
    path: "/mypage/visited",
    name: "MypageVisited",
    beforeEnter: onlyAuthUser,
    component: AppMypageVisited,
  },
  {
    path: "/mypage/background",
    name: "MypageBackground",
    beforeEnter: onlyAuthUser,
    component: AppMypageBackground,
  },
  {
    path: "/mypage/character",
    name: "MypageCharacter",
    beforeEnter: onlyAuthUser,
    component: AppMypageCharacter,
  },
  {
    path: "/mypage/modify",
    name: "MypageModify",
    beforeEnter: onlyAuthUser,
    component: AppMypageModify,
  },
  {
    path: "/mypage/visitedCard",
    name: "VisitdCard",
    beforeEnter: onlyAuthUser,
    component: AppMypageVisitedCard,
  },
  {
    path: "/mypage/updateInfo",
    name: "UpdateInfo",
    beforeEnter: onlyAuthUser,
    component: AppMypageUpdateInfo,
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
