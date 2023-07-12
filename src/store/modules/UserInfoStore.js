import axioshttp from '@/api/axioshttp';
import tokenHttp from '@/api/tokenHttp';
import router from '@/router';

const UserInfoStore = {
    namespaced: true,
    state: {
        userInfo: Object,
        selectItemChPath : "",
        userEmail: "",
        visitedList : [],
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
        getSelectBackground: (state) => {
            return state.userInfo.selectedBackground;
        },
        getVisitedList: (state) => {
            return state.visitedList;
        }
    },
    mutations: {
        SET_USER_INFO(state, data) {
            state.userInfo = data;
        },
        SET_VISITED_LIST(state, data) {
            state.visitedList = data;
        }
    },
    actions: {
        async setUserlogin({ state }, loginInfo) {
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
                            state.userEmail = res.data.data.email;
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
            tokenHttp.get(`member/`+state.userEmail)
                .then((res) => {
                    state.userInfo = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        modifyMongId({ state }, data) {
            console.log("mongChange", data)
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
            console.log("itemChange", data)
            tokenHttp.patch("member/modify", { "selected_item_id": data })
            .then((res) => {
                console.log("유저(아이템)정보 변경완료")
                state.userInfo = res.data.data;
            })
        },
        async itmeBuy({ commit }, data){
            tokenHttp.post("item/buy/"+ data)
                .then((res)=> {
                    console.log(res)
                    //메세지 알림
                    alert(res.data.message)
                    tokenHttp.get("/item/all-own/list" )
                        .then((res) => {
                            //root : true 옵션은 root store에서 실행하도록 허용
                            console.log("여기다 여기",res.data.data)
                            commit("PreviewStore/SET_ITEM_LIsT", res.data.data, {root : true})
                            commit("UserInfoStore/setUserInfo")
                        }
                    )
                    
                }
            )
        },
        async setVisitedList({ state }) {
            await tokenHttp.get("attraction/visited?page=0&size=1000")
                .then((res) => {
                
                    let data = res.data.data;
                    //내림차순 정렬
                    data.sort((a, b) => new Date(b.visitTime) - new Date(a.visitTime));

                    state.visitedList = [];
                    let attractionSet = new Set();

                    // 각 관광지별 카운트를 세기 위한 Map 객체 생성
                    const attractionMap = new Map();
                    for (let item of data) {
                        if (attractionMap.get(item.attractionId) === undefined) {
                            attractionMap.set(item.attractionId, 1);
                        } else {
                            attractionMap.set(item.attractionId, attractionMap.get(item.attractionId) + 1);
                        }
                    }

                    for (let item of data) {
                        if (!attractionSet.has(item.attractionId)) {
                            item.count = attractionMap.get(item.attractionId);  // count를 추가합니다.
                            state.visitedList.push(item);  // 결과 배열에 추가합니다.
                            attractionSet.add(item.attractionId);  // 현재 attractionId를 Set에 추가합니다.
                        }
                    }
              });
        }
    },
  };
    
  export default UserInfoStore;
