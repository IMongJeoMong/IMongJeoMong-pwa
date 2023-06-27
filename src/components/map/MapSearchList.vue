<template>
    <div>
        <div class="search_list_box_title">내 주변 장소</div>
        <!-- for문으로 구현예정 -->
        <div class="search_list_box">
            <div v-if="testImg == null"  :style="{'background-image': 'url(' + require('@/assets/resource/common/img/default_Img.png') + ')'}" class="search_list_box_img"></div>
            <div v-else :style="{'background-image': 'url(' + require(`${testImg}.png`) + ')'}" class="search_list_box_img"></div>
            <div class="search_list_box_info">
                <div class="search_list_box_info_header">
                    <div>성심당</div>
                    <div>EXP</div>
                    <div>P</div>
                </div>
                <div class="search_list_box_info_main">
                    <div>m</div>
                    <div>|</div>
                    <div>대전 중구 대종로</div>
                </div>
                <div class="search_list_box_info_footer">
                    간단한 설명
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
        width: 63%;
        display:flex;
        flex-flow: column;
        
    }

    .search_list_box_info > div{
        width:100%;
        display: flex;
        
    }

    .search_list_box_info_header > div{
        margin: 5px;
        
    }

    .search_list_box_info_main > div{
        margin: 5px;

    }

    .search_list_box_info_footer {

    }
</style>