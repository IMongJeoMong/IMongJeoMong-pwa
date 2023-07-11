<template>
    <div class="mypage_box">
      <!-- 리뷰작성 -->
      <span class="mypage2_box_icon mypage_visitedcard"></span>
      <div class="mypage2_box_title">획득한 관광지 카드</div>
      <div class="blank"></div>
      <div class="cards_all_box">
        <div v-for="(list, index) in getVisitedList" :key="index" class="card_box">
          <div v-if="list.imagePath == ''" class="card_image"  :style="{'background-image': 'url(' + require('@/assets/resource/common/img/default_Img.png') + ')'}"></div>
          <div v-else class="card_image" :style="{'background-image': 'url(' + (`${list.imagePath}`) + ')'}" ></div>
          <div class="card_name">{{list.name}}</div>
          <div class="card_visited">
            <span class="card_visittime">{{ list.visitTime }}</span>
            <span class="card_visitcnt">{{list.count}}번</span>
          </div>
          <div class="card_address">{{ list.address }}</div>
        </div>
      </div>
      <the-footer></the-footer>
    </div>
  </template>
  <script>
  import TheFooter from "@/components/inc/footer/TheFooter";
  import { directive as clickOutside } from "v-click-outside";
  import { mapGetters } from "vuex";
  export default {
    directives: {
      clickOutside,
    },
    components: {
      TheFooter,
    },
    data() {
      return {
        writeActive: false,
        modifyActive: false,
        attractionId: null,
        myAttractionId : null,
        name: "",
  
      };
    },
    methods: {
      showReviewWriteBoard(attractionId, name) {
        this.writeActive = true;
        this.attractionId = attractionId;
        this.name = name;
      },
      onClickOutside() {
        //화면 닫는과 동시에 값 초기화
        this.writeActive = false;
        this.modifyActive = false;
        this.attractionId = null;
        this.myAttractionId = null;
        this.name = "";
      },
      showReviewModifyBoard(myAttractionId, name) {
        this.writeActive = true;
        this.myAttractionId = myAttractionId;
        this.name = name;
      }
    },
    computed: {
      ...mapGetters("UserInfoStore", ["getVisitedList"])
    },
    async created() {
      this.$store.dispatch("UserInfoStore/setVisitedList");
    },
  };
  </script>
  <style scoped>
  .mypage2_box_icon {
    position: absolute;
    left: 20px;
    top: 35px;
    height: 50px;
    width: 50px;
    background-position: center;
    background-size: 25px 30px;
    background-repeat: no-repeat;
  }
  
  .mypage2_box_title {
    position: absolute;
    top: 42px;
    align-items: end;
    height: 10%;
    text-align: left;
    padding-left: 80px;
    color: #164c97;
    font-size: 30px;
  }
  
  .blank {
    height: 100px;
  }

  .cards_all_box{
    width: 36rem;
    overflow: scroll;
    height: auto;
    max-height: calc(100vh - 200px);
    overflow: scroll;
    /* border:1px solid black; */
    display: flex;
    margin:0px auto;
    flex-wrap: wrap;
    align-items: flex-start;
    place-content: space-between;
  }
  .card_box{
    width:170px;
    height: 250px;
    border-radius: 10px;
    border: 2px solid #164c97c2;
    background-color: #ffffff;
    margin: 15px 0px;
    box-shadow: 1px 2px 4px #82ACE7;
  }

  .card_image{
    margin: 5px auto 13px auto;
    width: 160px;
    height: 120px;
    background-position: center;
    border-radius: 10px;
  }

  .card_name{
    width:150px;
    height:35px;
    margin: 0px auto 5px auto;
    text-align: center;
    overflow-x: auto;
    white-space: nowrap;
    font-size: 25px;
    color:#164c97;
    font-weight:bold;
  }

  .card_visited{
    display: flex;
    width: 90%;
    margin: 5px auto;
    font-size: 13px;
    justify-content: space-between;
  
  }

  .card_address{
    width: 90%;
    margin: 10px auto;
    text-align: left;
    overflow: hidden;
    height: 35px;
  }

  .mypage_visitedcard{
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_visitedCard_icon.png");
    background-size: 45px 43px;
  }
  </style>