<template>
    <div class="marker_overlay_small" @click="openOverlay">
        <div v-if="attInfo.imagePath == ''"  :style="{'background-image': 'url(' + require('@/assets/resource/common/img/default_Img.png') + ')'}" class="overlay_img"></div>
        <div v-else :style="{'background-image': 'url('+ attInfo.imagePath + ')'}" class="overlay_img"></div>
        <div class="overlay_infobox">
            <div class="overlay_infobox_dis">{{dis}} m </div>
            <div class="overlay_infobox_bookmark"></div>
            <div class="overlay_infobox_title">{{ attInfo.name }}</div>
            <div class="overlay_infobox_content">{{ attInfo.description }}</div>
            <div class="compensation_box">
                <div class="compensation_box_exp">
                    <div class="compensation_box_exp_icon"></div>
                    <div class="compensation_box_text">{{exp}} Exp</div>
                </div>
                <div class="compensation_box_coin">
                    <div class="compensation_box_coin_icon"></div>
                    <div class="compensation_box_text">{{coin}} p</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
      attInfo : Object,  
    },
    data() {
        return {
            dis: 150,
            exp: 100,
            coin: 1000,
        }
    }, 
    methods: {
        openOverlay() {
            this.$emit('overlayOpen')
        }
    } 
}
</script>
<style scoped> 
    .marker_overlay_small{
        left:2.5%;
        width: 95%;
        height: 120px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        overflow:hidden;
    }

    .overlay_img{
        width: 35%;
        /* border: 1px solid black; */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    
    .overlay_infobox{
        width: 60%;
        height: 100%;
        text-align:left;
    }
    
    .overlay_infobox_dis{
        width:80%;
        height: 20px;
        line-height: 20px;
        color:rgb(48, 48, 48);
    }

    .overlay_infobox_title{
        width:80%;
        height: 27px;
        line-height:28px;
        font-size:23px;
        font-weight: bold;
        color:#164C97
    }

    .overlay_infobox_content{
        width:90%;
        overflow-wrap: normal;
        overflow:hidden;
        height: 40px;
        font-size:10px;
        color:rgb(34, 34, 34);
    }

    .overlay_infobox_bookmark{
        display: inline-block;
        position: absolute;
        right: 15px;
        top: 10px;
        width:15px;
        height:15px;
        background-image: url("/src/assets/resource/theme/img/icon/bookmarkOffIcon.png");
        background-position: center;
        background-size: 10px 15px;
        background-repeat: no-repeat;
    }

    .compensation_box{
        margin-top:3px;
        display:flex;
        justify-content: space-around;
        width:75%;
        height:25px;
        /* border:1px solid #164C97; */
        border-radius: 5px;
        background-color: #164C97 ;
        color:white;
        font-size:11px;
        font-weight: bold;
    }

    .compensation_box > div {
        display: flex;
        align-items: center;
    }

    .compensation_box > div > div{
        height:20px;
        text-align: right;
        display:inline-block;
        background-repeat: no-repeat;
        background-size: 15px 15px;
        background-position: top 2px right 5px;
    }

    .compensation_box_exp_icon{
        width:20px;
        padding-right:5%;
        background-image: url("/src/assets/resource/common/img/icon/userLevelIcon.png");
       
    }

    .compensation_box_coin_icon{
        width:20px;
        padding-right:5%;
        background-image: url("/src/assets/resource/common/img/icon/coinIcon.png");
    }

    .compensation_box_text{
        line-height: 20px;
    }
</style>