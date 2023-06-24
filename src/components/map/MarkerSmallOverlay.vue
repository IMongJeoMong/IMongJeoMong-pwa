<template>
    <div class="marker_overlay_small">
        <div class="overlay_img"  v-bind:style="{'background-image' : 'url('+image+')'}"></div>
        <div class="overlay_infobox">
            <div class="overlay_dis">{{dis}} m</div>
            <div class="overlay_title">{{ title }}</div>
            <div class="overlay_content">{{ content }}</div>
            <div class="compensation_box">
                <div class="compensation_exp">
                    <div class="expIcon"></div>
                    <div>{{exp}} Exp</div>
                </div>
                <div class="compensation_coin">
                    <div class="coinIcon"></div>
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
            content:"간략한 설명 요약 ^_^",
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
        text-align:left;
        /* border: 1px solid black; */
    }

    .compensation_box{
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

    .expIcon{
        width:20px;
        padding-right:5%;
        background-image: url("/src/assets/resource/common/img/icon/userLevelIcon.png");
       
    }

    .coinIcon{
        width:20px;
        padding-right:5%;
        background-image: url("/src/assets/resource/common/img/icon/coinIcon.png");
    }
</style>