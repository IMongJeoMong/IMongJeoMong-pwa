<template>
    <div class="background" :style="{'background-image': 'url(' + getSelectBackground.imagePath + ')'}">
        <!-- 상단 유저 인터페이스 -->
        <user-infomation></user-infomation>

        <!-- 캐릭터 변경 버튼 -->
        <div class="background_set" v-if="myMongList.length > 1">
            <div class="background_set_left" @click="beforeBtn()"> &lt; </div>
            <div class="background_set_right" @click="nextBtn()"> &gt;</div>
        </div>

         <!-- 캐릭터 -->
        <user-character class="characterbox"></user-character>
        
        <!-- 상점 구매하기 박스 -->
        <shop-buy class="shopbuy_board" v-show="shopBuyToggle" @closeBoard="cloaseBoard()"></shop-buy>

        <!-- 구매하기 및 저장하기 -->
        <div v-show="saveBtnToggle" class="shopbtn savebtn" @click="itemOn()">장착하기</div>
        <div v-show="buyBtnToggle" class="shopbtn buybtn" @click="itemBuyBoardOpen()">구매하기</div>
        
        <!-- 상점 보드 및 기본 푸터 -->
        <shop-board></shop-board>
        <the-footer></the-footer>
    </div>
</template>
<script>

import TheFooter from "@/components/inc/footer/TheFooter";
import UserInfomation from "@/components/inc/header/UserInfomation";
import ShopBoard from "@/components/shop/ShopBoard";
import UserCharacter from "@/components/user/UserCharacter";
import ShopBuy from "@/components/shop/ShopBuy";
import { mapGetters } from "vuex";

export default {
    components : {
        TheFooter,
        UserInfomation,
        ShopBoard,
        UserCharacter,
        ShopBuy
    },
    data() {
        return {
            buyBtnToggle: false,
            saveBtnToggle: false,
            shopBuyToggle : false,
        }
    },
    async created() {
        this.$store.dispatch('PreviewStore/setItemList');
        this.$store.dispatch('PreviewStore/setMongList');
    },
    methods: {
        //이전캐릭터
        async beforeBtn() {
            let nowIdx = await this.myMongList.findIndex(mong => mong.mongId === this.getSelectMong.mongId)
            let nextIdx = await nowIdx - 1 < 0 ? this.myMongList.length - 1 : nowIdx - 1;
            //console.log(this.myMongList[nextIdx].id)
            this.$store.dispatch('UserInfoStore/modifyMongId', this.myMongList[nextIdx].myMongId);       
        },
        //다음캐릭터
        async nextBtn() {
            let nowIdx = await this.myMongList.findIndex(mong => mong.mongId === this.getSelectMong.mongId)
            let nextIdx = await nowIdx + 1 >= this.myMongList.length ? 0 : nowIdx + 1;
            //console.log(this.myMongList[nextIdx].id)
            this.$store.dispatch('UserInfoStore/modifyMongId', this.myMongList[nextIdx].myMongId);      
        },
        //장착하기
        async itemOn() {
            console.log(this.getPreviewItem.myItemId);
            console.log(this.getPreviewItem)
            this.$store.dispatch("UserInfoStore/modifyItemId", this.getPreviewItem.myItemId);
        },
        //구매하기
        async itemBuyBoardOpen(){
            console.log(this.getPreviewItem.myItemId);
            console.log(this.getPreviewItem)
            this.shopBuyToggle = true;
        },
        //상점 창 닫기 
        cloaseBoard(){
            this.shopBuyToggle = false;
        }
    },
    computed: {
        ...mapGetters("PreviewStore", ["getPreviewItem", "myMongList"]),
        ...mapGetters("UserInfoStore", ["getSelectMong", "getSelectItem", "getSelectBackground"]),  
    },
    watch: {
        getPreviewItem(newVal) {
            if(newVal.itemId == this.getSelectItem.myItemId){
                this.saveBtnToggle = false;
                this.buyBtnToggle = false;
            }else{
                if (newVal.own) {
                    this.saveBtnToggle = true;
                    this.buyBtnToggle = false;
                }
                else {
                    this.saveBtnToggle = false;
                    this.buyBtnToggle = true;
                }
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
        z-index:30;
        width:90px;
        height: 35px;
        line-height:35px;
        right:10px;
        bottom:30%;
        border-radius: 8px;
        font-size:13px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
    }
    .savebtn{
        bottom:30%;
        color: #d9d9d9;
        background-color:#144284;
    }

    .buybtn{
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


    .shopbuy_board{
        position: absolute;
        top: 50%;
        z-index: 50;
    }

</style>