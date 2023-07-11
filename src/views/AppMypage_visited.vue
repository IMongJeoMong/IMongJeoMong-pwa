<template>
  <div class="mypage_box">
    <!-- 리뷰작성 -->
    <reviewWriteBoard
      v-if="writeActive"
      v-click-outside="onClickOutside"
      :reviewInfo="reviewInfo"
      @closeReview ="onClickOutside"
    ></reviewWriteBoard>
    <span class="mypage2_box_icon mypage_visited"></span>
    <div class="mypage2_box_title">방문일지</div>
    <div class="blank"></div>
    <ul>
      <visited-list
        @review-write="showReviewWriteBoard"
        @review-modify="showReviewModifyBoard"
      ></visited-list>
    </ul>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheFooter from "@/components/inc/footer/TheFooter";
import visitedList from "@/components/visited/visitedList";
import reviewWriteBoard from "@/components/visited/reviewWriteBoard.vue";
import { directive as clickOutside } from "v-click-outside";
import { mapGetters } from "vuex";
export default {
  directives: {
    clickOutside,
  },
  components: {
    TheFooter,
    visitedList,
    reviewWriteBoard,
  },
  data() {
    return {
      writeActive: false,
      reviewInfo : null,
    };
  },
  methods: {
    showReviewWriteBoard(list) {
      this.writeActive = true;
      this.reviewInfo = list;
    },
    onClickOutside() {
      //화면 닫는과 동시에 값 초기화
      this.writeActive = false;
      this.modifyActive = false;
      this.reviewInfo = null;
    },
    showReviewModifyBoard(list) {
      this.writeActive = true;
      this.reviewInfo = list;
    }
  },
  computed: {
    ...mapGetters("ReviewStore", ["getMyReviewList"])
  },
  async created() {
    this.$store.dispatch("ReviewStore/setMyReviewList");
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


.mypage_visited{
  background-image: url("/src/assets/resource/theme/img/icon/Mypage_visited_icon.png");
  background-size: 33px 36px;
}

.mypage_box > ul{
  overflow: scroll;
  height: calc(100vh - 210px);
  width: 100%;
}
</style>