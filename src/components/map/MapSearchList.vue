<template>
    <div>
        <div class="search_list_box_title">내 주변 장소</div>
        <!-- for문으로 구현예정 -->
        <div class="search_list_box">
            <div v-if="testImg == null"  :style="{'background-image': 'url(' + require('@/assets/resource/common/img/default_Img.png') + ')'}" class="search_list_box_img"></div>
            <div v-else :style="{'background-image': 'url(' + require(`${testImg}.png`) + ')'}" class="search_list_box_img"></div>
            <div class="search_list_box_info">
                <div class="search_list_box_info_header">
                    <div class="info_header_title">성심당</div>
                    <div class="info_header_box">
                        <div class="info_header_box_exp">
                            <div class="info_header_box_exp_icon"></div>
                            <div>{{exp}} Exp</div>
                        </div>
                        <div class="info_header_box_coin">
                            <div class="info_header_box_coin_icon"></div>
                            <div>{{coin}} p</div>
                        </div>
                    </div>  
                </div>
                <div class="search_list_box_info_main">
                    <div>{{dis}} m</div>
                    <div>|</div>
                    <div class="location_text">{{ location }}</div>
                </div>
                <div class="search_list_box_info_footer">
                   {{ content }}
                </div>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>
<script>
import TheFooter from "@/components/inc/footer/TheFooter";

export default {
    data() {
        return{
            testImg : null,
            exp:100,
            coin: 1000,
            dis: 140,
            location: "대전 중구 대종로ㅁㄴㅇㄹㄹㄴㅁㅇㄻㄴㅇㄹ",
            content:"안녕하ㅔ요 여기는 성심당이예요 오늘따라 날시가 좋네요 진짜극혐이예요 줄바꿈이 잘되띾요? 아바도 잘되겠죠 그래야만 해요"
        }
    },
    components: {
        TheFooter,
    }
}
</script>
<style>

    .search_list_box_title{
        margin:5%;
        display:flex;
        align-items: end;
        height: 10%;
        text-align: left;
        color:#164C97;
        font-size: 30px;
    }

    .search_list_box{
        margin: 0 auto;
        width: 90%;
        height: 100px;
        border:3px solid #82ACE6;
        border-radius: 10px;
        background-color: #F3F8FE;
        display: flex;
        justify-content: space-between;
    }

    .search_list_box_img{
        width:30%;
        margin:5px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border-radius: 10px;
        /* border: 1px solid yellow; */
    }

    .search_list_box_info{
        width: 65%;
        display:flex;
        flex-flow: column;
        
    }

    .search_list_box_info > div{
        width:100%;
        display: flex;
        
    }

    .search_list_box_info_main{
        width:65%;
        padding-right: 5px;
        font-size:12px;
        font-weight:300;
    }

    .search_list_box_info_main > div{
        margin: 5px;
        white-space:nowrap; 
        overflow: hidden;
    
    }

    .search_list_box_info_main > .location_text{
        width: 70%;
    }

    .search_list_box_info_footer {
        width:100%;
        padding-right: 5px;
        height: 30px;
        overflow:hidden;
        word-break:unset;
        font-size: 12px;
        font-weight: 100;
    }
    

    .info_header_title{  
        margin-top: 5px;
        padding-right:3px;
        color: #164C97;
        font-size: 20px;
        text-align: left;
        width:40%;
        overflow:hidden
    }

    .info_header_box{
        margin-top:3px;
        display:flex;
        justify-content: space-around;
        align-self: flex-end;
        width:75%;
        height:25px;
        border-radius: 5px;
        color:#164C97;
        font-size:11px;
        font-weight: bold;
    } 

    .info_header_box > div {
        display: flex;
        align-items: center;
    }

    .info_header_box > div > div{
        height:20px;
        text-align: right;
        display:inline-block;
        background-repeat: no-repeat;
        background-size: 15px 15px;
        background-position: top 2px right 5px;
    }

    .info_header_box_exp_icon{
        width:20px;
        padding-right:5%;
        background-image: url("/src/assets/resource/common/img/icon/userLevelIcon.png");
       
    }

    .info_header_box_coin_icon{
        width:20px;
        padding-right:5%;
        background-image: url("/src/assets/resource/common/img/icon/coinIcon.png");
    }
</style>