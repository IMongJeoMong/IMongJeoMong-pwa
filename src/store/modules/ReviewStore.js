import axioshttp from "@/api/axioshttp";
import tokenHttp from "@/api/tokenHttp";

const ReviewStore = {
    namespaced: true,
    state: {
        reviewList: [],
        attractionInfo: [],
        naverBlogList: [],
        myReviewList :[],
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
        },
        getMyReviewList: (state) => {
            return state.myReviewList;
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
        async getNaverBlogSearch({state}, name) {
            console.log("이름", name)
            let URL = "naver/blog/"+name;
            axioshttp.get(URL)
                .then((res) => {
                    console.log('검색요청', res)
                    state.naverBlogList = res.data.items;
            })
        },
        async setMyReviewList({ state }) {
            await tokenHttp.get("attraction/visited?page=0&size=10")
                .then((res) => {
                    console.log(res.data.data);
                    //state.myReviewList = res.data.data;
                    //정렬
                    state.myReviewList = res.data.data.sort((a,b) => new Date(b.visitTime) - new Date(a.visitTime));
            });
        }
    },
  };
    
  export default ReviewStore;

