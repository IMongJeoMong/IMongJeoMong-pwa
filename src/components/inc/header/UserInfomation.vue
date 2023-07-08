<template lang="">
    <div id="topInfoBox">
        <div class="topInfo">
            <div class="level_gauge_bar">
                <div class="player_level" v-if="getSelectMong">{{getSelectMong.level}}</div>
                <div class="level_gauge_bar_bg"></div>
                <div class="level_gauge_bar_progress" ref="levelGaugeBarProgress"></div>
            </div>
            <div class="coin_bar">
                <div class="coin_img"></div>
                <div class="coin_bar_number">{{getUserInfo.gold}} P</div>
            </div>
            <div class="alarm_btn">
                <div class="alarm_cnt">{{alarm}}</div>
                <div class="alarm_bg"></div>
            </div>
        </div>
        <!-- <div v-show="news" class="alarmBox">
            <div>
                {{ msgStart }}{{ keyword }}<br/>{{ msgEnd }}
            </div>
        </div> -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            news: false,
            alarm: 10,
        }

    },
    computed: {
        ...mapGetters("UserInfoStore", ["getUserInfo", "getSelectMong"]),
    },
    async mounted() {
        setTimeout(() => {
            if (this.$refs.levelGaugeBarProgress) {
                console.log(this.getSelectMong.expPercent + '%')
                this.$refs.levelGaugeBarProgress.style.width = this.getSelectMong.expPercent + '%';
            }
        }, 500);
    },
    
}
</script>
<style scoped>
    #topInfoBox{
        position: absolute;
        z-index:15;
        top:20px;
        width:100%;
        height:100%;
    }
    .topInfo{
        display: flex;
        justify-content: space-around;
        height: 35px;
    }

    .level_gauge_bar{
        width:50%;
        position: relative;
    }

    .player_level{
        position: absolute;
        top:-7px;
        left:-5px;
        z-index:15;
        width:40px;
        height:40px;
        /* border: 1px solid black; */
        background-image: url("/src/assets/resource/common/img/icon/userLevelIcon.png");
        background-position: center;
        background-size: cover;
        /* 그림 쉐도우 */
        filter: drop-shadow(-1px 2px 2px #0a0a0a76);
        /* 텍스트 쉐도우 */
        text-shadow: 2px 2px 2px gray;

        color:white;
        font-weight: bold;
        padding-top:6px;
        font-size: 20px;
        text-align:center;
        line-height: 29px;
    }
    .level_gauge_bar_bg{
        width:100%;
        height:25px;
        position: absolute;
        z-index:5;
        border-radius: 30px;
        border:2px solid #164C97;
        background-color: white;
        box-shadow: 2px 2px inset rgba(16, 16, 16, 0.266);
    }

    .level_gauge_bar_progress{
        /* 여기 width 값만 바뀌면 될듯 */
        width: 0;
        height:25px;
        position: absolute;
        float:left;
        z-index:10;
        overflow: hidden;
        border-radius: 30px;
        border:2px solid #164C97;
        background-color: #164C97;
        box-shadow: 2px 0px 3px rgba(16, 16, 16, 0.266);
        transition: width 1s ease;
    }

    .coin_bar{
        width: 100px;
        position: relative;
        /* border:1px solid black; */
    }

    .coin_img{
        position: absolute;
        float:left;
        z-index:10;
        top:-3px;
        width:30px;
        height:30px;
        background-image: url("/src/assets/resource/common/img/icon/coinIcon.png");
        background-position: center;
        background-size: cover;
    }

    .coin_bar_number{
        width: 100%;
        height:25px;
        /* 이걸로 코인 글씨 높이 변경 */
        line-height: 25px;
        position: absolute;
        z-index:5;
        border:2px solid #FF9100;
        border-radius: 20px;
        background-color: white;
        text-align: right;
        padding-right:5px;
        font-weight: bold;
        color:#FF9100;
        font-size: 15px;
    }

    .alarm_btn{
        width:35px;
        position: relative;
    }

    .alarm_bg{
        width:40px;
        height:40px;
        position: absolute;
        z-index:5;
        top:-6px;
        background-position: center;
        background-size: cover;
        background-image:url("/src/assets/resource/common/img/icon/alarmIcon.png");;
    }

    .alarm_cnt{
        position: absolute;
        width:20px;
        height: 20px;
        line-height: 15px;
        z-index: 10;
        right:0px;
        background-color: red;
        border-radius: 100%;
        color:white;
        font-size:12px;
        font-weight: bold;
        padding-top: 3px;
    }

    .alarmBox{
        width:85%;
        height: 10%;
        margin: 20px auto;
        background-color:rgba(0, 0, 0, 0.418);
        border-radius: 20px;
    }

    .alarmBox > div{
        font-size:22px;
        color:white;
        padding-top: 20px;
    }
</style>