<template>
    <div class="marker_overlay_small">
        <div class="overlay_img"  v-bind:style="{'background-image' : 'url('+image+')'}"></div>
        <div class="overlay_infobox">
            <div class="overlay_infobox_dis">{{dis}} m </div>
            <div class="overlay_infobox_bookmark"></div>
            <div class="overlay_infobox_title">{{ title }}</div>
            <div class="overlay_infobox_content">{{ content }}</div>
            <div class="compensation_box">
                <div class="compensation_box_exp">
                    <div class="compensation_box_exp_icon"></div>
                    <div>{{exp}} Exp</div>
                </div>
                <div class="compensation_box_coin">
                    <div class="compensation_box_coin_icon"></div>
                    <div>{{coin}} p</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dis: 150,
            title: "성심당",
            content:"간략한 설명 요약 ^_^ 인데 테스트로  길게 적어볼까해요 그래요 이렇게 말이죠 너무  행복한  하루입니다. 아직 잘몰라요 어떡게 될지 좀더 ㄱ ㅣㄹ게 적어볼까요?ㅁㄴㅇㄻㄴㅇㄴㅇㄹㄴㅇ",
            exp: 100,
            coin: 1000,
            image: require("@/assets/resource/theme/img/character/character1.png"),
        }
    }
    
}
</script>
<style>
    .marker_overlay_small{
        position: absolute;
        left:2.5%;
        bottom: 110px;
        z-index: 20;
        width: 95%;
        height: 120px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        overflow:hidden;
    }

    .overlay_img{
        width: 35%;
        /* border: 1px solid black; */
        background-size: 75%;
        background-position: center;
        background-repeat: no-repeat;
    }
    
    .overlay_infobox{
        width: 60%;
        height: 100%;
        text-align:left;
    }
    
    .overlay_infobox_dis{
        width:80%;
        height: 20px;
        line-height: 20px;
        color:rgb(48, 48, 48);
    }

    .overlay_infobox_title{
        width:80%;
        height: 27px;
        line-height:28px;
        font-size:23px;
        font-weight: bold;
        color:#164C97
    }

    .overlay_infobox_content{
        width:90%;
        overflow-wrap: normal;
        overflow:hidden;
        height: 40px;
        font-size:10px;
        color:rgb(34, 34, 34);
    }

    .overlay_infobox_bookmark{
        display: inline-block;
        position: absolute;
        right: 15px;
        top: 10px;
        width:15px;
        height:15px;
        background-image: url("/src/assets/resource/theme/img/icon/bookmarkOffIcon.png");
        background-position: center;
        background-size: 10px 15px;
        background-repeat: no-repeat;
    }

    .compensation_box{
        margin-top:3px;
        display:flex;
        justify-content: space-around;
        width:75%;
        height:25px;
        /* border:1px solid #164C97; */
        border-radius: 5px;
        background-color: #164C97 ;
        color:white;
        font-size:11px;
        font-weight: bold;
    }

    .compensation_box > div {
        display: flex;
        align-items: center;
    }

    .compensation_box > div > div{
        height:20px;
        text-align: right;
        display:inline-block;
        background-repeat: no-repeat;
        background-size: 15px 15px;
        background-position: top 2px right 5px;
    }

    .compensation_box_exp_icon{
        width:20px;
        padding-right:5%;
        background-image: url("/src/assets/resource/common/img/icon/userLevelIcon.png");
       
    }

    .compensation_box_coin_icon{
        width:20px;
        padding-right:5%;
        background-image: url("/src/assets/resource/common/img/icon/coinIcon.png");
    }
</style>