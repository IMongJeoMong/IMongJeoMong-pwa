<template>
    <div class="questboard">
        <div class="questlist">
            <div :class="{'active': questNum===1}" @click="questNum = 1">일일미션</div>
            <div :class="{'active': questNum===2}" @click="questNum = 2">메인업적</div>
        </div>
        <today-quest v-show="questNum === 1"></today-quest>
        <main-quest v-show="questNum === 2"></main-quest>
    </div>
</template>
<script>

import TodayQuest from "@/components/main/quest/TodayQuest";
import MainQuest from "@/components/main/quest/MainQuest";

export default {
    data() {
        return {
            questNum: 1,
        }
    },
    components :{
        TodayQuest,
        MainQuest
    },
}
</script>
<style scoped>
    .questboard{
        background-color: #144284;
        position: absolute;
        z-index:15;
        top:20%;
        left:10%;
        width:80%;
        height:45%;
        border-radius: 15px;
    }

    .questlist{
        height: 45px;
        background-color: white;
        border:3px solid #144284;
        border-radius: 15px;
        display: flex;
        justify-content: space-around;
        line-height: 45px;
        color: #144284;
        font-weight:500;
    }
    
    .questlist > div {
        height:35px;
        padding-bottom:1px;
    }

    .active{
        border-bottom: 2px solid #144284;  
    }

</style>