<template>
    <div class="background" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/background/background1.png') + ')'}">
        <user-infomation></user-infomation>
        <!-- 저장하기 -->
        <div class="shopbtn savebtn">저장하기</div>
         <!-- 캐릭터 따로 빼도 될듯 ?-->
        <div class="characterbox">
            <img :src="require('@/assets/resource/theme/img/character/character1.png')"/>
        </div>
        <!-- 구매하기 -->
        <div class="shopbtn buybtn">구매하기</div>
        <shop-board></shop-board>
        <the-footer></the-footer>
    </div>
</template>
<script>

import TheFooter from "@/components/inc/footer/TheFooter";
import UserInfomation from "@/components/inc/header/UserInfomation";
import ShopBoard from "@/components/shop/ShopBoard";
export default {
    components : {
        TheFooter,
        UserInfomation,
        ShopBoard,
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
        left:15%;
        width:75%;
        filter: drop-shadow(5px 7px 3px #0a0a0a76);
    }

    .characterbox > img {
        width:100%;
        height:100%;
    }

    .shopbtn{
        position: absolute;
        width:90px;
        height: 35px;
        line-height:35px;
        right:10px;
        border-radius: 5px;
        font-size:13px;
        font-weight: bold;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
    }
    .savebtn{
        z-index:5;
        top:90px;
        color: #144284;
        background-color:#d9d9d9;
    }

    .buybtn{
        z-index:20;
        bottom:260px;
        background-color: #144284;
        color:white;   
    }
</style>