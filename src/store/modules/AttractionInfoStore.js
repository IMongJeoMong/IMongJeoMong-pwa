import tokenHttp from "@/api/tokenHttp";

const AttractionInfoStore = {
    namespaced: true,
    state: {
        attInfoList : [],
    },
    getters: {
        getattInfoList : (state) => {
            return state.attInfoList;
       }
    },
    mutations: {
        SET_ATTINFO_LIST(state, data) {
            state.attInfoList = data;
        }
    },
    actions: {
        setAttractionList({ state }, lat, lng, keyword) {
            let page = 0;
            let size = 30;
            tokenHttp.get("/attraction/list?page" + page + "&size=" + size + "&lat=" + lat + "&lng=" + lng + "&keyword=" + keyword)
                .then((res) => {
                    console.log(res.data.data)
                    state.attInfoList = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        },
    },
  };
    
  export default AttractionInfoStore;