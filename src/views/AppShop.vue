<template>
    <div class="background" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/background/background1.png') + ')'}">
        <user-infomation></user-infomation>
        <!-- 캐릭터 설정 버튼 -->
        <!-- <div class="shopbtn characterbtn">배경 설정</div> -->
        <!-- 배경 설정 버튼 -->
        <div class="background_set">
            <div class="background_set_left" @click="beforeBtn()"> &lt; </div>
            <div class="background_set_right" @click="nextBtn()"> &gt;</div>
        </div>

         <!-- 캐릭터 따로 빼도 될듯 ?-->
        <user-character class="characterbox"></user-character>
        <!-- 구매하기 및 저장하기 -->
        <div v-show="saveBtnToggle" class="shopbtn savebtn" @click="itemOn()">장착하기</div>
        <div v-show="buyBtnToggle" class="shopbtn buybtn">구매하기</div>
        <shop-board></shop-board>
        <the-footer></the-footer>
    </div>
</template>
<script>

import TheFooter from "@/components/inc/footer/TheFooter";
import UserInfomation from "@/components/inc/header/UserInfomation";
import ShopBoard from "@/components/shop/ShopBoard";
import UserCharacter from "@/components/user/UserCharacter";
import { mapGetters } from "vuex";

export default {
    components : {
        TheFooter,
        UserInfomation,
        ShopBoard,
        UserCharacter,
    },
    data() {
        return {
            buyBtnToggle: false,
            saveBtnToggle: false,
        }
    },
    async created() {
        this.$store.dispatch('PreviewStore/setItemList');
        this.$store.dispatch('PreviewStore/setMongList');
    },
    methods: {
        //있는지 없는지 비교
        isHoldItem(item) {
            return this.holdItemList.some(holdItem => holdItem.itemId === item.itemId);
        },
        async beforeBtn() {
            let nowIdx = await this.myMongList.findIndex(item => item.id === this.getSelectMong.id)
            let nextIdx = await nowIdx - 1 < 0 ? this.myMongList.length - 1 : nowIdx - 1;
            this.$store.dispatch('UserInfoStore/modifyMongId', this.myMongList[nextIdx].id);       
        },
        async nextBtn() {
            let nowIdx = await this.myMongList.findIndex(item => item.id === this.getSelectMong.id)
            let nextIdx = await nowIdx + 1 >= this.myMongList.length  ? 0 : nowIdx + 1;
            this.$store.dispatch('UserInfoStore/modifyMongId', this.myMongList[nextIdx].id);      
        },
        async itemOn() {
            console.log(this.getPreviewItem.itemId);
            this.$store.dispatch("UserInfoStore/modifyItemId", this.getPreviewItem.itemId);
        }
    },
    computed: {
        ...mapGetters("PreviewStore", ["getPreviewItem", "myMongList"]),
        ...mapGetters("UserInfoStore", ["getSelectMong"]),
    },
    watch: {
        getPreviewItem(newVal) {
            if (newVal.holdState) {
                this.saveBtnToggle = true;
                this.buyBtnToggle = false;
            }
            else {
                this.saveBtnToggle = false;
                this.buyBtnToggle = true;
            }
        }
    },
}
</script>
<style scoped>
    /* 공통으로 넣어도 될듯함 */
    .background{
        position:fixed;
        top:0px;
        z-index:1;
        width:100%;
        height:100%;
        background-position: center;
        background-size: cover;
    }

    .characterbox{
        position: absolute;
        top:30%;
        left:10%;
        width:75%;
        filter: drop-shadow(5px 7px 3px #0a0a0a76);
    }

    .shopbtn{
        position: absolute;
        width:90px;
        height: 35px;
        line-height:35px;
        right:10px;
        border-radius: 8px;
        font-size:13px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
    }
    .savebtn{
        z-index:30;
        bottom:260px;
        color: #d9d9d9;
        background-color:#144284;
    }

    .buybtn{
        z-index:20;
        bottom:260px;
        background-color: #144284;
        color:white;   
    }

    /* .characterbtn{
        z-index:5;
        top:135px;
        color: #144284;
        background-color:#d9d9d9;
    } */


    .background_set{
        font-size: 40px;
        font-weight: bold;
        color: white;
    }

    .background_set_left{
        text-align:center;
        position: absolute;
        width: 50px;
        top:50%;
        left: 3%;
        z-index: 30;
        filter: drop-shadow(3px 5px 2px #0a0a0a76);
    }

    .background_set_right{
        position: absolute;
        text-align:center;
        top:50%;
        width: 50px;
        right: 3%;
        z-index: 30;
        filter: drop-shadow(3px 5px 2px #0a0a0a76);

    }
</style>