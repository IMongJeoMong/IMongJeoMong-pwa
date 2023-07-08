<template>
    <div v-if = "nearAttraction.distance > 30" class="exploration_board">
        <div class="exploration_text">
            <b>[ 주변 탐색 실패 ]</b><br/>
            관광지가 없습니다
        </div>
        <div class="exploration_btns">
           <div class="exploration_btn_cancel" @click="closeExploration()">확인</div>
        </div>
    </div>
    <div v-else-if="findFlag == true" class="exploration_board">
        <div class="exploration_text">
            <b>[ 방문 결과 ]</b><br/>
            <p v-if="findResult.code == 200">{{ nearAttraction.name }}</p>
            {{ findResult.message }}
            <div class="exploration_btns">
                <div class="exploration_btn_cancel" @click="closeExploration()">확인</div>
            </div>
        </div>
    </div>
    <div v-else class="exploration_board">
        <div class="exploration_text">
            <b>{{ nearAttraction.name  }}</b> 이(가)<br>발견되었어요!
            <p>( 방문은 하루에 한번 가능합니다! )</p>
        </div>
        <div class="exploration_btns">
           <div class="exploration_btn_cancel" @click="closeExploration()">취소</div>
           <div class="exploration_btn_okey" @click="onExploration()">방문</div>
        </div>
    </div>
</template>
<script>
import tokenHttp from '@/api/tokenHttp';
import { mapGetters } from 'vuex';


export default {
    data() {
        return {
            findFlag: false,
            findResult : null,
        }
    },
    computed: {
        ...mapGetters("AttractionInfoStore", ["nearAttraction", "nearMylocation"]),
    },
    methods: {
        closeExploration() {
            this.findFlag = false;
            this.findResult = null;
            this.$emit('closeBoard', false)
        },
        onExploration() {
            this.findFlag = true;
            tokenHttp.post("attraction/visit/" + this.nearAttraction.id + "?lat=" + this.nearMylocation.lat + "&lng=" + this.nearMylocation.lng)
                .then((res) => {
                    console.log(res.data)
                    this.findResult = res.data;
                })
                .catch(
                    (err) => console.log(err)
                )
        }

    },

}
</script>
<style scoped>
    .exploration_board{
        background-color: white;
        position: absolute;
        z-index:20;
        top:30%;
        left:10%;
        width:80%;
        height: 180px;
        border-radius: 10px;
        border:3px solid #164C97;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
    }

    .exploration_text{
        width: 95%;
        height: 60%;
        padding: calc(10% - 1.5rem) 0;
        margin: 0px auto;
        /* border: 1px solid black; */
        font-size: 23px;
        color: #164C97;
        word-break: keep-all;
    }

    .exploration_text > p {
        font-size: 15px;
    }
    
    .exploration_text > b {
        font-size : 29px;
    }

    .exploration_btns{
        margin: 3% auto;
        width: 95%;
        height: 30%;
        display: flex;
        justify-content: space-around;
        
    }

    .exploration_btns > div {
        width: 35%;
        height: 45px;
        line-height: 45px;
        font-size: 25px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
        /* border: 2px solid black; */
        
    }

    .exploration_btn_cancel{
        background-color: #D9D9D9;
        color: #164C97;
    }

    .exploration_btn_okey{
        color: white;
        border:2px solid #164C97;
        background-color: #164C97;
    }

    /* .explorationlist{
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
    
    .explorationlist > div {
        height:35px;
        padding-bottom:1px;
        font-size: 30px;
        font-weight: bold;
    }a

    .active{
        border-bottom: 2px solid #164C97;  
    }

    .today_exploration{
        margin : 3%;
        width: 94%;
        height: calc(100% - 6rem);
    } */

</style>