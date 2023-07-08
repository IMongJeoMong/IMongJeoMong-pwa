import axioshttp from "@/api/axioshttp";
import axios from "axios";

const ReviewStore = {
    namespaced: true,
    state: {
        reviewList: [],
        attractionInfo: [],
        naverBlogList : [],
    },
    getters: {
        getReviewList : (state) => {
            return state.reviewList;
        },
        getAttractionInfo: (state) => {
            return state.attractionInfo;
        },
        getNaverBlogList: (state) => {
            return state.naverBlogList;
        }
    },
    mutations: {
        SET_REVIEW_LIST(state, data) {
            state.reviewList = data;
        },
        SET_ATTRACTION_INFO(state, data) {
            state.attractionInfo = data;
        }
    },
    actions: {
        setReviewList({ state }, data) {
            axioshttp.get("review/" + data)
                .then((res) => {
                    console.log(res.data.data)
                    state.reviewList = res.data.data;
            })
        },
        async setAttractionInfo({ state }, data) {
            console.log("vueX", data)
            axioshttp.get("attraction/" + data)
                .then((res) => {
                    console.log(res.data.data)
                    state.attractionInfo = res.data.data;
            })
        },
        async getNaverBlogSearch({state}) {
            console.log("이름", state.attractionInfo.name)
            let URL = `/v1/search/blog?query=${encodeURIComponent(state.attractionInfo.name)}`;
            let clientId = "ipxAvBnOlk_uLsol0LHB";
            let clientSecret = "_8UKL93YWB";
            axios.get(URL, {
                headers: {
                    Accept: 'application/json',
                    'X-Naver-Client-Id': clientId,
                    'X-Naver-Client-Secret': clientSecret,
                },
            })
                .then((res) => {
                    console.log('검색요청', res)
                    state.naverBlogList = res.data.items;
            })
        },
    },
  };
    
  export default ReviewStore;

