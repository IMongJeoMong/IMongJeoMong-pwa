import axioshttp from "@/api/axioshttp";
import tokenHttp from "@/api/tokenHttp";

const AttractionInfoStore = {
    namespaced: true,
    state: {
        attInfoList : [],
        bicycleList : [],
        carList : [],
    },
    getters: {
        attractionList : (state) => {
            return state.attInfoList;
        },
        bicycleList : (state) => {
            return state.bicycleList;
        },
        carList : (state) => {
            return state.carList;
        }
    },
    mutations: {
        SET_ATTINFO_LIST(state, data) {
            state.attInfoList = data;
        }
    },
    actions: {
        setAttractionList({ state }, { lat, lng, keyword }) {
            let page = 0;
            let size = 30;
            console.log("attraction/list?page" + page + "&size=" + size + "&lat=" + lat + "&lng=" + lng + "&keyword=" + keyword)
            tokenHttp.get("attraction/list?page" + page + "&size=" + size + "&lat=" + lat + "&lng=" + lng + "&keyword=" + keyword)
                .then((res) => {
                    console.log("관광지 검색결과", res.data.data)
                    state.attInfoList = res.data.data;
                    
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        setBicycleList({state}){
            axioshttp.get("tasu/list")
            .then((res) => {
                state.bicycleList = res.data.data;
            })
        },
        setCarList({state}){
            axioshttp.get("parking/list")
            .then((res) => {
                state.carList = res.data.data;
            })
        }
    },
  };
    
  export default AttractionInfoStore;