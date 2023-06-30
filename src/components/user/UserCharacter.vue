<template>
    <div>
        <!-- 착용한 아이템 갯수만큼 -->
        <div v-if="getPreviewItem != null"  class ="user_select_item">
            <img :src="require(`@/assets/resource/common/img/item/character/ch_${getPreviewItem.name}.png`)"/>
        </div>
        <!-- 선택된 캐릭터 -->
        <div class="user_character">
            <img :src="require('@/assets/resource/common/img/character/character1.gif')"/>
        </div>
    </div>
</template>
<script>

import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters("PreviewStore", ["getPreviewItem"]),
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