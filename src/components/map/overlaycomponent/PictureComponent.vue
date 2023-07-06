<template>
    <div class="picture_component_box">
        <div class="picture_content">
            <div>
                <div v-for="(item, index) in getReviewList" :key="index" class="picture_content_item">
                    <div class="picture_content_item_img" :style="{'background-image': 'url(' + item.imagePath + ')'}"></div>
                </div>
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
    .picture_content > div {
        margin:0px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
        /* border:2px solid #BBD4F8; */
        height: calc(100% - 7rem);
        overflow:scroll;
        padding-left: 2%;        
    }

    
    .picture_content_item{
        flex: 0 0 calc(30% - 0.1rem);
        height: 100px;
        margin:0.5rem;
        /* border: 1px solid black; */
        overflow:hidden;
    }

    .picture_content_item_img{
        width: 100%;
        height: 90%;
        background-color: white;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 10px;
    }

</style>