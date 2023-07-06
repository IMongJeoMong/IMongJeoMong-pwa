<template>
    <div class="home_component_box">
        <div>
            <div class="home_component_img img_address"></div>
            <div class="home_component_text">{{ getAttractionInfo.address }}</div>
        </div>
        <div>
            <div class="home_component_img img_phone"></div>
            <div class="home_component_text">{{ getAttractionInfo.tel == "" ? "전화번호가 없습니다" : getAttractionInfo.tel}}</div>
        </div>
        <div>
            <div class="home_component_img">설명</div>
            <div class="home_component_full_text">{{ getAttractionInfo.description}}</div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            address: "주소가 올곳 입니다줄넘김을 테스트 해보려고해요 어떤가요 ? 잘 되었나요?",
            phone : "전화번호 가 올곳입니다",
        }
    },
    computed:{
        ...mapGetters("ReviewStore", ["getAttractionInfo"]),
    }
    
}
</script>
<style>
    .home_component_box > div {
        display:flex;
        font-size: 17px;
        margin-left: 10px;
        margin-bottom : 10px;
        height: 40px;
        line-height: 40px;
    }

    .home_component_text {
        overflow: scroll;
        text-align: left;
    }

    .home_component_full_text{
        text-align: left;
    }

    .home_component_img{
        background-position : center;
        background-size: contain;
        width: 25px;
        background-repeat: no-repeat;
        margin: 0px 20px 0px 10px;
    }

    .img_phone{
        background-image: url("/src/assets/resource/theme/img/icon/phone_icon.png");
    }

    .img_address{
        background-image: url("/src/assets/resource/theme/img/icon/address_icon.png");
    }


</style>