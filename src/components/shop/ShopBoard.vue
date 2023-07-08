<template>
    <div class="shopbox">
        <div class="shopbox_list">
            <div class="shopbox_list_shopping shopbox_list_active">상점</div>
            <!-- <div class="shopbox_list_shopping" @click="toggleChange()" :class="{'shopbox_list_active': shoppingActive}" >상점</div> -->
            <!-- <div class="shopbox_list_hold" @click="toggleChange()" :class="{'shopbox_list_active': holdActive}">보유중</div> -->
        </div>
        <div class="shopbox_content">
            <div>
                <div v-for="(item, index) in itemList" :key="index" 
                    class="shopbox_content_item" @click="Preview(item)"
                    :class="{'shopbox_content_item_not_hold' : !item.own}"
                >
                    <div class="shopbox_content_item_img"  :class="{'clear-icon': index == 0}" :style="{'background-image': 'url(' + (`${item.shopImagePath}`) + ')'}"></div>
                        <div v-if="item.itemId == getSelectItem.itemId" class="shopbox_content_item_coin">
                            <div class="Wear_text">착용중</div>
                        </div>
                    <div v-else class="shopbox_content_item_coin">
                        <div v-if="item.own">보유중</div>
                        <div v-else>{{ item.price }}</div>
                    </div>
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
            shoppingActive: true,
            holdActive: false,
            coin: 100,  
        }
    },
    methods: {
        toggleChange() {
            this.shoppingActive = !this.shoppingActive;
            this.holdActive = !this.holdActive;
        },
        Preview(item) {
            this.$store.commit("PreviewStore/SET_PREVIEW_ITEM", item);
        },
    },
    computed: {
        ...mapGetters("PreviewStore", ["itemList"]),
        ...mapGetters("UserInfoStore", ["getSelectItem"]),
    },
}
</script>
<style>
    .shopbox {
        position: absolute;
        z-index:20;
        bottom:60px;
        width:100%;
        height:25%;
    }

    .shopbox_list {
        display: flex;
        justify-content: start;
        font-size:18px;
       
    }
    
    .shopbox_list > div {
        border-radius: 10px 10px 0px 0px;
        width:23%;
        height:35px;
        line-height: 40px;
    }

    .shopbox_list > div {
        background-color: white;
    }

    .shopbox_list_active{
        background-color: #BBD4F8 !important;
    }
    
    .shopbox_content {
        width:100%;
        height: 100%;
        background-color: #BBD4F8;
    }

    .shopbox_content > div {
        margin:0px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
        border:2px solid #BBD4F8;
        width: 90%;
        height: calc(100% - 7rem);
        overflow:scroll;
    }

    
    .shopbox_content_item{
        flex: 0 0 calc(25% - 1rem);
        width: 80px;
        height: 80px;
        margin:0.5rem;
        border-radius: 15px;
        overflow:hidden;      
    }

    .shopbox_content_item_not_hold {
        filter: brightness(70%);
    }

    .shopbox_content_item_img{
        width: 100%;
        height: 70%;
        background-color: white;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 75%;
    }

    .shopbox_content_item_coin{
        width:100%;
        height:30%;
        line-height:28px;
        background-color: #82ACE7;
        font-size:15px;
        font-weight: bold;
        color:#144284;
    }

    .Wear_text{
        color: white;
        font-weight:400;
    }

    .clear-icon{
        background-size: 50px 50px;
    }
</style>