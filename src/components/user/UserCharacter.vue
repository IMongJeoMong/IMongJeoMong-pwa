<template>
    <div>
        <!-- 착용한 아이템 갯수만큼 for -->

        <!-- 만약에 프리뷰가 있다면-->
        <div v-if="getPreviewItem != null"  class ="user_select_item">
            <!-- 프리뷰의 정보값을 보여줘 -->
            <img :src="(`${getSelectItemPath}`)"/>
        </div>

        <!-- 프리뷰가 없다면 -->
        <div v-else class ="user_select_item">
            <!-- 현재 장착한게 있다면 -->
            <img v-if="getSelectItem != null" :src="(`${getSelectItemPath}`)"/>
        </div>


        <!-- 선택된 캐릭터 -->
        <div class="user_character">
            <!-- 나중에 삭제할 값  -->
            <!-- <img :src="require('@/assets/resource/common/img/character/character1.gif')"/> -->
            <!-- 로직 구현 테스트 (최종 값 )-->
            <img v-if="getSelectMong != null" :src="(`${getSelectMong.mong.imagePath}`)"/>
        </div>
    </div>
</template>
<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            itemPath : "",
        }
    },
    computed: {
        ...mapGetters("PreviewStore", ["getPreviewItem"]),
        ...mapGetters("UserInfoStore", ["getSelectMong", "getSelectItem", "getSelectItemPath"]),
    },
    watch: {
        async getSelectItem(newVal) {
            this.$store.dispatch("UserInfoStore/getItemPath", newVal)
        }
        
    }
}
</script>
<style>

    .user_select_item > img{
        position: absolute;
        left: 0px;
        z-index: 50;
        width:100%;
    }

    .user_character > img{
        position: relative;
        width:100%;
        height:100%;
    }
    
</style>