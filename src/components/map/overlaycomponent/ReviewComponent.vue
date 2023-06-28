<template>
    <!-- v-for 예정 -->
    <div>
        <div class="review_component_box">
            <div class="review_img" :style="{'background-image': 'url(' + require('@/assets/resource/common/img/default_Img.png') + ')'}"></div>
            <div class="review_content">
                <div class="review_content_username">{{ userName }}</div>
                <div class="review_content_text">{{ userReview }}</div>
            </div>
        </div>
        <div class="review_component_box">
            <div class="review_img" :style="{'background-image': 'url(' + require('@/assets/resource/common/img/default_Img.png') + ')'}"></div>
            <div class="review_content">
                <div class="review_content_username">{{ userName }}</div>
                <div class="review_content_text">{{ userReview }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userName: "이름입니다",
            userReview: "여기 맛집이니다 조항요"
        }
    }
}
</script>
<style>
    .review_component_box{
        display:flex;
        height: 110px;
        padding: 5px;
        margin-bottom: 5px;
    }

    .review_img{
        width: 30%;
        /* border: 1px solid black; */
        border-radius: 10px;
        margin-right: 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .review_content{ 
        text-align:left;
        width:65%;
    }

    .review_content_username{
        font-size: 17px;
        margin:10px auto; 
        overflow:hidden;
    }

    .review_content_text{ 
        width:100%;
        height: 50px;
        font-size: 12px;
        overflow:hidden;
    }


</style>