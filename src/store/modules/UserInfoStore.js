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
            return state.userInfo;
        },
        getSelectMong: (state) => {
            return state.userInfo.selectedMong;
        },
        getSelectItem : (state) =>{
            return state.userInfo.selectedItem;
        },
    },
    mutations: {
        SET_USER_INFO(state, data) {
            state.userInfo = data;
        }
    },
    actions: {
        setUserlogin({ state }, loginInfo) {
            // console.log("vueX", loginInfo)
            axioshttp.post("/member/login", loginInfo
                ).then((res) => {
                    console.log(res.data)
                    let Authorization = res.data.data.Authorization
                    sessionStorage.setItem("access-token", Authorization["access-token"]);
                    sessionStorage.setItem("refresh-token", Authorization["refresh-token"]);
                    
                    tokenHttp.get(`member/${loginInfo.email}`)
                        .then((res) => {
                            state.userInfo = res.data.data;
                            router.push({ name: "Main" });
                    })
                })
                .catch((err) => {
                    console.log(err);
                    console.log("login fail");
                    alert("로그인 실패했습니다.\n아이디와 비밀번호를 확인해주세요");
                })
        },
        setUserInfo({ state }) {
            // console.log(state.userInfo)${state.userInfo.data.email}
            tokenHttp.get(`member/d@naver.com`)
                .then((res) => {
                    state.userInfo = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        modifyMongId({ state }, data) {
            tokenHttp.patch("member/modify", { "selected_mong_id": data })
                .then((res) => {
                    console.log("유저(캐릭터)정보 변경완료")
                    state.userInfo = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        modifyItemId({ state }, data) {
            // tokenHttp.patch("member/modify", { "selected_item_id": data })
            //     .then((res) => {
            //         console.log("유저(아이템)정보 변경완료")
            //         state.userInfo = res.data.data;
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     })
            console.log("유저(아이템)정보 변경완료", data)
            state.userInfo.selectedItem = 2;
        },
        getItemName({ state }, id) {
            console.log("없으면 에러야 ~", state);
            axioshttp.get("item/"+id)
                .then((res) => {
                    console.log(res.data);
                    return res.data.name;
            })
        }
    },
  };
    
  export default UserInfoStore;