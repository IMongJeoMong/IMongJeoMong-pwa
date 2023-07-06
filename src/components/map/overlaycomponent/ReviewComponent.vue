<template>
    <!-- v-for 예정 -->
    <div>
        <div v-for="(review, index) in getReviewList" :key="index" class="review_component_box">
            <div class="review_img" :style="{'background-image': 'url(' +review.imagePath + ')'}"></div>
            <div class="review_content">
                <div class="review_content_username">{{ review.memberName }}</div>
                <div class="review_content_text">{{ review.content }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
        }
    },
    computed:{
        ...mapGetters("ReviewStore", ["getReviewList"]),
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
        width: 35%;
        /* border: 1px solid black; */
        border-radius: 10px;
        margin-right: 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .review_content{ 
        text-align:left;
        width:60%;
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