<template>
    <div class="shopbox">
        <div class="shopbox_list">
            <div class="shopbox_list_shopping" @click="toggleChange()" :class="{'shopbox_list_active': shoppingActive}" >상점</div>
            <div class="shopbox_list_hold" @click="toggleChange()" :class="{'shopbox_list_active': holdActive}">보유중</div>
        </div>
        <!-- 데이터 받으면 for문으로 -->
        <div class="shopbox_content">
            <div>
                <div class="shopbox_content_item">
                    <div class="shopbox_content_item_img" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/item/item1.png') + ')'}"></div>
                    <div class="shopbox_content_item_coin">{{ coin }}</div>
                </div>
                <div class="shopbox_content_item">
                    <div class="shopbox_content_item_img" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/item/item1.png') + ')'}"></div>
                    <div class="shopbox_content_item_coin">{{ coin }}</div>
                </div>
                <div class="shopbox_content_item">
                    <div class="shopbox_content_item_img" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/item/item1.png') + ')'}"></div>
                    <div class="shopbox_content_item_coin">{{ coin }}</div>
                </div>
                <div class="shopbox_content_item">
                    <div class="shopbox_content_item_img" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/item/item1.png') + ')'}"></div>
                    <div class="shopbox_content_item_coin">{{ coin }}</div>
                </div>
                <div class="shopbox_content_item">
                    <div class="shopbox_content_item_img" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/item/item1.png') + ')'}"></div>
                    <div class="shopbox_content_item_coin">{{ coin }}</div>
                </div>
                <div class="shopbox_content_item">
                    <div class="shopbox_content_item_img" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/item/item1.png') + ')'}"></div>
                    <div class="shopbox_content_item_coin">{{ coin }}</div>
                </div>
                <div class="shopbox_content_item">
                    <div class="shopbox_content_item_img" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/item/item1.png') + ')'}"></div>
                    <div class="shopbox_content_item_coin">{{ coin }}</div>
                </div>
                <div class="shopbox_content_item">
                    <div class="shopbox_content_item_img" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/item/item1.png') + ')'}"></div>
                    <div class="shopbox_content_item_coin">{{ coin }}</div>
                </div>
                <div class="shopbox_content_item">
                    <div class="shopbox_content_item_img" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/item/item1.png') + ')'}"></div>
                    <div class="shopbox_content_item_coin">{{ coin }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            shoppingActive: true,
            holdActive: false,
            coin : 100,
        }
    },
    methods: {
        toggleChange() {
            this.shoppingActive = !this.shoppingActive;
            this.holdActive = !this.holdActive;
        },
    }
  
}
</script>
<style>
    .shopbox {
        position: absolute;
        z-index:20;
        bottom:60px;
        width:100%;
        height:25%;
        /* background-color: white; */
        /* border: 1px solid black; */
    }

    .shopbox_list {
        display: flex;
        justify-content: start;
        font-size:18px;
       
    }
    
    .shopbox_list > div {
        /* border:2px solid black; */
        border-radius: 10px 10px 0px 0px;
        width:23%;
        height:35px;
        line-height: 40px;
    }

    .shopbox_list > div {
        background-color: white;
    }
    
    .shopbox_content {
        width:100%;
        height: 100%;
        /* padding-top:10px; */
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

    .shopbox_list_active{
        background-color: #BBD4F8 !important;
    }
    .shopbox_content_item{
        flex: 0 0 calc(25% - 1rem);
        /* display: inline-block; */
        /* text-align: center; */
        width: 80px;
        height: 80px;
        margin:0.5rem;
        /* border: 1px solid black; */
        border-radius: 15px;
        overflow:hidden;
        /* padding:10px; */
        
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

</style>