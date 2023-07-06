<template>
    <div class="today_quest_box">
        <div>
            <div class="quest_list_box">
                <div v-for="(quest, index) in todayQuest" :key="index" class="quest_box">
                    <div class="quest_list_box_name">{{ quest.name }}</div>
                    <div class="quest_list_box_compensattion">
                        <div v-if="!quest.clearFlag">
                            <div class="quest_list_compensation_exp_icon"></div>
                            <div class="quest_list_compensation_exp_text">{{ quest.exp}} EXP</div>
                        </div>
                        <div v-if="quest.clearFlag && !quest.rewardFlag" @click="rewarded(quest)"> <div>보상받기</div></div>
                        <div v-if="quest.clearFlag && quest.rewardFlag" id="quest_end">완료</div>
                    </div>
                </div>
            </div>
            <div class="quest_compensation_box">
                <div class="compensation_text">{{ todayQuest.length }}개 퀘스트 클리어 보상</div>
                <div class="compensation_box">
                    <div class="compensation_box_exp">
                        <div class="compensation_box_exp_icon"></div>
                        <div class="compensation_box_text">{{todayAllClear.exp}} Exp</div>
                    </div>
                    <div class="compensation_box_coin">
                        <div class="compensation_box_coin_icon"></div>
                        <div class="compensation_box_text">{{todayAllClear.gold}} p</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import tokenHttp from '@/api/tokenHttp';

export default {
    data() {
        return {
            todayQuest: [ ],
            todayAllClear: {}
        }
    },
    methods: {
        rewarded(quest) {
            console.log(quest)
            alert(`${quest.name} 보상 UI 만들어야합니다`);
        }
    },
    async created() {
        tokenHttp.get("quest/daily")
            .then((res) => {
                this.todayQuest = res.data.data;
                this.todayAllClear = this.todayQuest.pop();
        }).catch((err) => console.log(err))
    },
}
</script>
<style>
    .today_quest_box > div{
        margin:4% auto 5% auto;
        width:90%;
        height:91%;
        border-radius: 10px;
        background-color: #BBD4F8;
    }

    .quest_list_box{
        height: 60%;
        width: 100%;
        border:1px solid rgba(255, 255, 255, 0);
    }
    
    .quest_box{
        width: 90%;
        height: 23%;
        background-color:white;
        margin: 5%;
        border-radius: 10px;
        display: flex;
    }
    
    .quest_list_box_name{
        width:70%;
        font-size:17px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .quest_list_box_compensattion{
        width:40%;
        padding: 1%;
    }
    
    .quest_list_box_compensattion > div {
        background-color:#164C97;
        border-radius: 15px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .quest_list_compensation_exp_icon{
        width:20px;
        height: 75%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("/src/assets/resource/common/img/icon/userLevelIcon.png");
    }

    .quest_list_compensation_exp_text{
        text-align: center;
        width: 45px;
    }
   


    .quest_compensation_box{
        width: 100%;
        height: 40%;
        /* border:1px solid black; */
        padding:5%;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
    }

    .compensation_text{
        color:#164C97;
        font-size:19px;
        font-weight: bold;
    }


    .compensation_box{
        margin:3px auto;
        width: 90%;
        display:flex;
        justify-content: space-around;
        height:30px;
        border-radius: 20px;
        background-color: #164C97 ;
        color:white;
        font-size:12px;
        font-weight: 500;
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

    #quest_end{
        background-color: #ABABAB;
    }
</style>