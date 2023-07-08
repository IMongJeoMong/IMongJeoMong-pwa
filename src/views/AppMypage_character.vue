<template>
    <div class="mypage_box">
        <span class="mypage2_box_icon mypage_charter"></span>
        <div class="mypage2_box_title">획득한 캐릭터</div>
        <div class="blank"></div>
        <div class="scroll">
            <div class="container" v-for="(list, index) in mongList" :key="index">
                <div class="title_box">
                    <span>{{ list.name }}</span>
                </div>
                <div class="character_container" 
                    :class="{ 'selected': list.isSelected }"
                    :style="{ 'filter': list.isMong ? '' : 'grayscale(100%)' }">
                    <img class="backgroundImg"  :src="list.imagePath" >
                </div>
                <div class="stateBtn">
                    <div class="SelectedBtn" v-if ="list.id == getSelectMong.mongId">장착중</div>
                    <div class="isBtn" v-else-if="list.isMong" @click="changeCharacter(list)">착용하기</div>
                    <div class="isNotBtn" v-else>미보유</div>
                </div>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>
<script>
import tokenHttp from "@/api/tokenHttp";
import TheFooter from "@/components/inc/footer/TheFooter";
import { mapGetters } from "vuex";
export default {
    components: {
        TheFooter,
    },
    data() {
        return {
            mongList: [],
            myMongList: [],
        }
    },
    created() {
        this.getMongList();
    },
    computed: {
        ...mapGetters("UserInfoStore", ["getSelectMong"]),
    },
    methods: {
        changeCharacter(list) {
            console.log(list)
            tokenHttp.patch("member/modify", { "selected_mong_id": list.myMongId })
                .then((res) => {
                    console.log(res.data.message);
                    this.$store.dispatch("UserInfoStore/setUserInfo")
                })
                .catch((err) => {
                    console.log(err);
            })
        },
        async getMongList() {
            await tokenHttp.get("mong/list")
                .then((res) => {
                    this.mongList = res.data.data;
                })
            await tokenHttp.get("/mong/own/list")
                .then((res) => {
                    this.myMongList = res.data.data;
                })

            //중복처리
            // myMongList에서 모든 mongId를 추출하여 Map을 생성합니다.
            // 이 때 Map의 값으로는 myMongId를 사용합니다.
            const myMongIdMap = new Map(this.myMongList.map(item => [item.mongId, item.myMongId]));

            // mongList의 각 요소에 대해, id가 myMongIdMap에 존재하는지 확인하고,
            // 그에 따라 isMong와 myMongId 속성을 설정합니다.
            this.mongList = this.mongList.map(item => {
                const isMong = myMongIdMap.has(item.id);
                return {
                    ...item, 
                    isMong,
                    // isMong가 true인 경우에만 myMongId 속성을 추가합니다.
                    ...(isMong && {myMongId: myMongIdMap.get(item.id)}),
                };
            });
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

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    height: 650px;
    justify-content: center;
    margin-top: -10%;
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
.character_container{
    width: 250px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: #F3F8FE;
    box-shadow: 2px 2px 4px #82ACE7;
    margin-right:30px;
}

.backgroundImg {
    width: 200px;
    height: fit-content;
    filter: drop-shadow(5px 7px 3px #0a0a0a76);
}

.selected {
    border: 3px solid #164C97;
    box-sizing: border-box;
}

input {
    margin-top: 30px;
    -webkit-appearance: radio;
    appearance: radio;
}


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

.mypage_charter{
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_charter_icon.png");
    background-size: 35px 35px;
}
</style>