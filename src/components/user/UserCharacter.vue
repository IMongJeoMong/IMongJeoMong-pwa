<template>
    <div>
        <!-- 착용한 아이템 갯수만큼 for -->
        <div v-if="getPreviewItem != null"  class ="user_select_item">
            <img :src="require(`@/assets/resource/common/img/item/character/ch_${getPreviewItem.name}.png`)"/>
        </div>
        <div v-else class ="user_select_item">
            <img v-if="getSelectItem != null" :src="require(`@/assets/resource/common/img/item/character/ch_${itemName}.png`)"/>
        </div>
        <!-- 선택된 캐릭터 -->
        <div class="user_character">
            <!-- 나중에 삭제할 값  -->
            <!-- <img :src="require('@/assets/resource/common/img/character/character1.gif')"/> -->
            <!-- 로직 구현 테스트 (최종 값 )-->
            <img v-if="getSelectMong != null" :src="require(`@/assets/resource/common/img/character/character${getSelectMong.id}.gif`)"/>
        </div>
    </div>
</template>
<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            itemName : "",
        }
    },
    computed: {
        ...mapGetters("PreviewStore", ["getPreviewItem"]),
        ...mapGetters("UserInfoStore", ["getSelectMong", "getSelectItem"]),
    },
    watch: {
        getSelectItem(newVal) {
            this.itemName = this.$store.dispatch("UserInfoStore/getItemName", newVal)
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