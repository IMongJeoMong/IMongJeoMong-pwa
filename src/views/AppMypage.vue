<template>
    <div class="mypage_box">
        <div class="mypage_box_header">
            <div ><span>업적</span><span class="mypage_box_icon">></span></div>
        </div>
        <div class="mypage_box_main">
            <div><span>트로피</span><span class="mypage_box_icon">></span></div>
            <div><span>?</span><span class="mypage_box_icon">></span></div>
            <div><span>?</span><span class="mypage_box_icon">></span></div>
        </div>
        <div class="mypage_box_footer">
            <div><span>회원정보 수정</span><span class="mypage_box_icon">></span></div>
            <div><span>업데이트 정보</span><span class="mypage_box_icon">></span></div>
        </div>
        <the-footer></the-footer>
   </div>
</template>
<script>

import TheFooter from "@/components/inc/footer/TheFooter";

export default {
    components : {
        TheFooter,
    },
}
</script>
<style>
    .mypage_box{
        position: fixed;
        width:100%;
        height:100%;
        background-color: #EEEEEE;
    }

    .mypage_box > div > div{
        width:80%;
        height:50px;
        margin:10px auto;
        line-height: 50px;
        border-radius: 10px;
        background-color: white;
        display: flex;
        justify-content: space-between;
    }

    .mypage_box > div > div > span {
        padding:0px 10%;
        font-size:large;
    }

    .mypage_box_icon{
        color:#164C97;
        font-weight: bold;
    }

    .mypage_box_header{
        margin-top:40px;
        height:10%;
    }

    .mypage_box_main{
        height:50%;
    }

    .mypage_box_footer{
        position:absolute;
        width:100%;
        bottom:120px;
    }
    
</style>