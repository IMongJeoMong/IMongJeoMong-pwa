<template lang="">
    <div id="topInfoBox">
        <div class="topInfo">
            <div>
                <span>레벨</span>
                <span>경험치바</span>
            </div>
            <div>코인</div>
            <div>알림</div>
        </div>
        <div v-show="news" class="alarmBox">
            <div>
                {{ msgStart }}{{ keyword }}{{ msgEnd }}
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            news: true,
            msgStart: "주변에",
            keyword: " 성심당 ",
            msgEnd: "(이)가 발견되었습니다!"
        }
    }
    
}
</script>
<style scoped>
    #topInfoBox{
        position: absolute;
        top:20px;
        width:100%;
        height:100%;
    }
    .topInfo{
        display: flex;
        justify-content: space-around;
    }

    .alarmBox{
        width:85%;
        height: 10%;
        margin: 20px auto;
        background-color:rgba(0, 0, 0, 0.478);
        border-radius: 20px;
    }

    .alarmBox > div{
        overflow: hidden;
        height: calc(100% - 40px);
        padding:20px;
        display: flex;
        flex-wrap:wrap;
        font-size:20px;
        color:white;
    }
</style>