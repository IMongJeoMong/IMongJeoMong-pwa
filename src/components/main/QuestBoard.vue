<template>
    <div class="questboard">
        <div class="questlist">
            <div>일일 퀘스트</div>
            <!-- <div :class="{'active': questNum===1}" @click="questNum = 1">일일미션</div> -->
        </div>
        <today-quest class="today_quest"></today-quest>
    </div>
</template>
<script>

import TodayQuest from "@/components/main/quest/TodayQuest";

export default {
    data() {
        return {
            questNum: 1,
        }
    },
    components :{
        TodayQuest
    },
}
</script>
<style scoped>
    .questboard{
        background-color: #164C97;
        position: absolute;
        z-index:20;
        top:20%;
        left:10%;
        width:80%;
        height:40%;
        border-radius: 10px;
    }

    .questlist{
        height: 55px;
        background-color: white;
        border:4px solid #164C97;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        line-height: 55px;
        color: #144284;
        font-weight:500;
    }
    
    .questlist > div {
        height:35px;
        padding-bottom:1px;
        font-size: 30px;
        font-weight: bold;
    }

    .active{
        border-bottom: 2px solid #164C97;  
    }

    .today_quest{
        margin : 3%;
        width: 94%;
        height: calc(100% - 6rem);
    }

</style>