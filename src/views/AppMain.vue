<template>
  <div>
    <div class="background" :style="{'background-image': 'url(' + require('@/assets/resource/theme/img/background/background1.png') + ')'}">
      <!-- 상단 정보 -->
      <UserInfomation class="topInfomation"></UserInfomation>
      <!-- 캐릭터 -->
      <user-character class="characterbox"></user-character>
      
      <!--퀘스트 보드 -->
      <quest-board v-if="questBoardActive" v-click-outside="onClickquQuestOutside"></quest-board>
      
      <!-- 탐색 보드 -->
      <exploration-board v-if="explorationBoardActive" v-click-outside="onClickEltOutside" @closeBoard="onCloseBoard"></exploration-board>

      <!-- 탐색 박스 -->
      <div class="homeside">
        <div class="findbtn" @click="explorationActive()">
          <div class="findimg"></div>
          <div>탐색하기</div>
        </div>
        <div class="questbtn" @click="qusetActive()">
          <div class="qusetimg"></div>
          <div>퀘스트</div>
        </div>
      </div>
    </div>
    <the-footer></the-footer>
    
  </div>
</template>
<script>
import UserInfomation from "@/components/inc/header/UserInfomation";
import TheFooter from "@/components/inc/footer/TheFooter";
import QuestBoard from "@/components/main/QuestBoard";
import UserCharacter from "@/components/user/UserCharacter";
import ExplorationBoard from "@/components/main/ExplorationBoard";

//import axioshttp from "@/api/axioshttp";
import {directive as clickOutside} from 'v-click-outside'
export default {
  directives: {
        clickOutside
    },
  data() {
    return {
      questBoardActive: false,
      explorationBoardActive: false,
      mypositionList: [
                {
                    name: "현재 위치",
                    lat: null,
                    lng: null,
                }
            ],
    }
  },
  components : {
    UserInfomation,
    TheFooter,
    QuestBoard,
    UserCharacter,
    ExplorationBoard,
  },
  methods: {
    qusetActive() {
      if (this.questBoardActive) this.questBoardActive = false;
      else this.questBoardActive = true;
    },

      //현재 위치 가져오기
      async geofind() {
            if(!("geolocation" in navigator)) {
                this.textContent = 'Geolocation is not available.';
                return false;
            }
            return new Promise((resolve, reject)=> {
                // get position
                navigator.geolocation.getCurrentPosition(pos => {
                    this.mypositionList.lat = pos.coords.latitude;
                    this.mypositionList.lng = pos.coords.longitude;
                    resolve(true);
                }, err => {
                    this.textContent = err.message;
                    reject(false);
                })    
            })
        },

    async explorationActive() {
      if (this.explorationBoardActive) this.explorationBoardActive = false;
      else {
        let mylocationMain = await this.geofind();
        this.explorationBoardActive = true;
        await Promise.resolve();
        if (mylocationMain) {
          let mainLocationData = {
            lat: this.mypositionList.lat,
            lng: this.mypositionList.lng,
            keyword: "",
          }
          console.log(mainLocationData)
          //관광지 찾기
          this.$store.dispatch("AttractionInfoStore/setNearAttraction", mainLocationData)
        }
      }
    },
    onClickquQuestOutside() {
      this.questBoardActive = false;
    },
    onClickEltOutside() {
      this.explorationBoardActive = false;
    },
    onCloseBoard(data) {
      this.explorationBoardActive = data;
    }
  },
  created() {
    this.$store.dispatch('UserInfoStore/setUserInfo');
  },
  
}
</script>
<style scoped>

  /* 배경 CSS */
  .background{
    position:fixed;
    top:0px;
    z-index:1;
    width:100%;
    height:100%;
    background-position: center;
    background-size: cover;
  }
  
  /* 상단 정보  */
  .topInfomation{
    position: absolute;
    top:0px;
    width:100%;
    height:30%;
  }

  /* 캐릭터 CSS */
  .characterbox{
    position: absolute;
    top:30%;
    left:10%;
    width:75%;
    filter: drop-shadow(5px 7px 3px #0a0a0a76);
  }

  .characterbox > img {
    width:100%;
    height:100%;
  }

  /* 홈 사이드 박스 */
  .homeside{
    width:100%;
    bottom: 120px;
    position:absolute;
    display: flex;
    justify-content: space-evenly;
    
  }

  /* 탐색 버튼 */
  .findbtn{
    width: 65%;
    height: 60px;
    line-height: 52px;
    border-radius: 10px;
    border:4px solid #164C97;
    background-color:white;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
    z-index:15;
    font-weight:bold;
    display:flex;
    justify-content: center;
  }

  .findbtn > div {
    color: #164C97;
    font-size:27px;
  }

  .findimg{
    width:40px;
    height:40px;
    margin: 5px;
    background-image: url("/src/assets/resource/theme/img/icon/compassIcon.png");
    background-position: center;
    background-size: cover;
  }

  /* 퀘스트 버튼 */
  .questbtn{
    z-index:15;
    width: 15%;
    height: 60px;
    border-radius: 10px;
    border:4px solid #FDAE02;
    background-color:white;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
    color:#4C4C4C;
    font-size:14px;
    font-weight: bold;
  }

  .qusetimg {
    margin: 2px auto;
    width:28px;
    height:28px;
    background-image: url("/src/assets/resource/theme/img/icon/quest_btnIcon.png");
    background-position: center;
    background-size: cover;
  }

</style>