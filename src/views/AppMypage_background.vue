<template>
    <div class="mypage_box">
        <span class="mypage2_box_icon mypage_background"></span>
        <div class="mypage2_box_title">획득한 배경</div>
        <div class="blank"></div>
        <div class="scroll">
            <div class="container" v-for="(list, index) in backgroundList" :key="index" :list="list" v-bind="{ list: list }">
                <div class="title_box">
                    <span>{{ list.name }}</span>
                </div>
                <img 
                    class="backgroundImg" 
                    :class="{ 'selected': list.backgroundId == getSelectBackground.backgroundId }" 
                    :src="list.imagePath" alt="업데이트를 기다려주세요"
                    @click="updateSelected(list)"
                    :style="{ 'filter': list.isBackground ? '' : 'grayscale(100%)' }">

                <div class="stateBtn">
                    <div class="SelectedBtn" v-if ="list.backgroundId == getSelectBackground.backgroundId">장착중</div>
                    <div class="isBtn" v-else-if="list.isBackground" @click="changeBackground(list)">착용하기</div>
                    <div class="isNotBtn" v-else>미보유</div>
                </div>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>
<script>

import axioshttp from "@/api/axioshttp";
import tokenHttp from "@/api/tokenHttp";
import TheFooter from "@/components/inc/footer/TheFooter";
import { mapGetters } from "vuex";
export default {
    components: {
        TheFooter,
    },
    data() {
        return {
            backgroundList: [],
            myBackgroundList : [],
        }
    },
    created() {
        this.getBackgroundList();
    },
    computed: {
        ...mapGetters("UserInfoStore", ["getSelectBackground"]),
    },
    methods: {
        updateSelected(list) {
            this.lists.forEach((item) => {
                item.isSelected = item === list;
            });
        },
        //서버로 부터 배경 받아오기
        async getBackgroundList() {
            await axioshttp.get("background/list")
                .then((res) => {
                    this.backgroundList = res.data.data;
                })
            await tokenHttp.get("background/own/list")
                .then((res) => {
                    this.myBackgroundList = res.data.data;
                })

            //중복처리
            // myBackgroundList에서 모든 backgroundId를 추출하여 Map을 생성합니다.
            // 이 때 Map의 값으로는 myBackgroundId를 사용합니다.
            const myBackgroundIdMap = new Map(this.myBackgroundList.map(item => [item.backgroundId, item.myBackgroundId]));

            // backgroundList의 각 요소에 대해, backgroundId가 myBackgroundIdMap에 존재하는지 확인하고,
            // 그에 따라 isbackground와 myBackgroundId 속성을 설정합니다.
            this.backgroundList = this.backgroundList.map(item => {
                let isBackground = myBackgroundIdMap.has(item.backgroundId);
                return {
                    ...item, 
                    isBackground,
                    // isbackground가 true인 경우에만 myBackgroundId 속성을 추가합니다.
                    ...(isBackground && {myBackgroundId: myBackgroundIdMap.get(item.backgroundId)}),
                };
            });
        },
        async changeBackground(list) {
            console.log(list)
            tokenHttp.patch("member/modify", { "selected_background_id": list.myBackgroundId })
                .then((res) => {
                    console.log(res.data.message);
                    this.$store.dispatch("UserInfoStore/setUserInfo")
                })
                .catch((err) => {
                    console.log(err);
            })
        },
    }
}
</script>
<style scoped>
.mypage2_box_icon {
    position: absolute;
    left: 20px;
    top: 35px;
    height: 50px;
    width: 50px;
    background-position: center;
    background-size: 25px 30px;
    background-repeat: no-repeat;
}

.mypage2_box_title {
    position: absolute;
    top: 42px;
    align-items: end;
    height: 10%;
    text-align: left;
    padding-left: 80px;
    color: #164C97;
    font-size: 30px;
}

.blank {
    height: 100px;
}

.scroll {
    display: flex;
    overflow-x: scroll;
}

.scroll::-webkit-scrollbar {
    width: 0.1rem;
    background-color: transparent;
  }

  /* 영역 내용에 스타일 적용 */
  .scroll {
    overflow: auto;
  }

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    height: 650px;
}

.title_box {
    width: 150px;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #164C97;
    color: rgb(255, 255, 255);
    font-size: 15px;
    margin-bottom: 20px;
}

.backgroundImg {
    width: 250px;
    height: 80%;
    /* height: fit-content; */
}

.selected {
    border: 5px solid #164C97;
    height: 80%;
    box-sizing: border-box;
}

/* input {
    margin-top: 30px;
    -webkit-appearance: radio;
    appearance: radio;
} */

.stateBtn{
    font-size: 20px;
    margin: 15px auto 30px auto;
    width: 100px;
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    color:#164C97;
}

.isBtn{
    background-color: #D9D9D9;
    border-radius: 20px;
    color:#164C97;
    padding-top:3px;
    box-shadow: 2px 3px 5px rgba(54, 54, 54, 0.592);
}

.SelectedBtn{
    background-color: #164C97;
    border-radius: 20px;
    color:white;
    padding-top:3px;
    box-shadow: 2px 3px 5px rgba(54, 54, 54, 0.592);
}

.isNotBtn{
    background-color: white;
    border-radius: 20px;
    color:#164C97;
    padding-top:3px;
    border:1px solid gray;
    box-shadow: inset 1px 2px rgba(123, 123, 123, 0.319);
}

.mypage_background{
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_background_icon.png");
    background-size: 35px 35px;
}

</style>