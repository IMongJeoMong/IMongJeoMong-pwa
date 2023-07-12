<template>
    <div class="shop_buy_board">
        <div class="shop_buy_text">
            <b>{{ getPreviewItem.name }}</b> 을(를)<br>구매하시겠습니까?
        </div>
        <div class="shop_buy_btns">
           <div class="shop_buy_btn_cancel" @click="$emit('closeBoard', false)">취소</div>
           <div class="shop_buy_btn_okey" @click="buyItem()">구매</div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';


export default {
    computed: {
        ...mapGetters("PreviewStore", ["getPreviewItem"])
    },
    methods: {
        async buyItem(){
            this.$store.dispatch("UserInfoStore/itmeBuy", this.getPreviewItem.itemId);
            //this.$store.dispatch("UserInfoStore/setUserInfo");
            this.$emit('closeBoard', false)
        }
    }
}
</script>
<style scoped>
    .shop_buy_board{
        background-color: white;
        position: absolute;
        z-index:20;
        top:30%;
        left:10%;
        width:80%;
        height:20%;
        border-radius: 10px;
        border:3px solid #164C97;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
    }

    .shop_buy_text{
        width: 95%;
        height: 60%;
        padding: calc(10% - 2rem) 0;
        margin: 0px auto;
        /* border: 1px solid black; */
        font-size: 29px;
        color: #164C97;
    }

    .shop_buy_btns{
        margin: 0 auto;
        width: 95%;
        height: 40%;
        display: flex;
        justify-content: space-around;
        
    }

    .shop_buy_btns > div {
        width: 35%;
        height: 45px;
        line-height: 45px;
        font-size: 25px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
        /* border: 2px solid black; */
        
    }

    .shop_buy_btn_cancel{
        background-color: #D9D9D9;
        color: #164C97;
    }

    .shop_buy_btn_okey{
        color: white;
        border:2px solid #164C97;
        background-color: #164C97;
    }

</style>