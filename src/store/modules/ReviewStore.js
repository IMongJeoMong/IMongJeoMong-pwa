import axioshttp from "@/api/axioshttp";

const ReviewStore = {
    namespaced: true,
    state: {
        reviewList: [],
        attractionInfo : [],
    },
    getters: {
        getReviewList : (state) => {
            return state.reviewList;
        },
        getAttractionInfo: (state) => {
            return state.attractionInfo;
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
        setReviewList({ state }) {
            state.reviewList = [
                {
                    "reviewId": 2,
                    "memberId": 1,
                    "attractionId": 125429,
                    "memberName": "meoldae",
                    "content": "엑스포 음악분수 최고에요!",
                    "createTime": "2023-07-06T16:39:04",
                    "imagePath": "https://imjm-bucket.s3.ap-northeast-2.amazonaws.com/%EC%97%91%EC%8A%A4%ED%8F%AC%20%EC%9D%8C%EC%95%85%EB%B6%84%EC%88%98.jpg"
                },
                {
                    "reviewId": 3,
                    "memberId": 1,
                    "attractionId": 125429,
                    "memberName": "meoldae",
                    "content": "필수 관광지 추천!",
                    "createTime": "2023-07-06T17:03:47",
                    "imagePath": "https://imjm-bucket.s3.ap-northeast-2.amazonaws.com/%EC%97%91%EC%8A%A4%ED%8F%AC%20%EC%9D%8C%EC%95%85%EB%B6%84%EC%88%98.jpg"
                },
                {
                    "reviewId": 4,
                    "memberId": 1,
                    "attractionId": 125429,
                    "memberName": "meoldae",
                    "content": "테스트!!",
                    "createTime": "2023-07-06T17:04:05",
                    "imagePath": "https://imjm-bucket.s3.ap-northeast-2.amazonaws.com/%EC%97%91%EC%8A%A4%ED%8F%AC%20%EC%9D%8C%EC%95%85%EB%B6%84%EC%88%98.jpg"
                }

          ]
        },
        async setAttractionInfo({ state }, data) {
            console.log("vueX", data)
            axioshttp.get("attraction/" + data)
                .then((res) => {
                    console.log(res.data.data)
                    state.attractionInfo = res.data.data;
            })
        }
    },
  };
    
  export default ReviewStore;

