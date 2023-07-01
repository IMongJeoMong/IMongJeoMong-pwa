import axioshttp from '@/api/axioshttp';
import tokenHttp from '@/api/tokenHttp';
import router from '@/router';

const UserInfoStore = {
    namespaced: true,
    state: {
        userInfo: Object,
    },
    getters: {
        getUserInfo : (state) => {
            return state.previewItem;
        },
    },
    mutations: {
        SET_USER_INFO(state, data) {
            state.previewItem = data;
        }
    },
    actions: {
        setUserInfo({ state }, loginInfo) {
            // console.log("vueX", loginInfo)
            axioshttp.post("/member/login", loginInfo
                ).then((res) => {
                    console.log(res.data)
                    let Authorization = res.data.data.Authorization
                    sessionStorage.setItem("access-token", Authorization["access-token"]);
                    sessionStorage.setItem("refresh-token", Authorization["refresh-token"]);
                    
                    tokenHttp.get(`member/${loginInfo.email}`)
                        .then((res) => {
                            state.userInfo = res.data;
                            router.push({ name: "Main" });
                    })
                })
                .catch((err) => {
                    console.log(err);
                    console.log("login fail");
                    alert("로그인 실패했습니다.\n아이디와 비밀번호를 확인해주세요");
                })
        }
    },
  };
    
  export default UserInfoStore;