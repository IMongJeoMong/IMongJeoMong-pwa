<template>
  <div class="mypage_box">
    <!-- 리뷰작성 -->
    <reviewWriteBoard
      v-if="writeActive"
      v-click-outside="onClickOutside"
      :name="name"
      :attractionId="attractionId"
    ></reviewWriteBoard>
    <span class="mypage2_box_icon mypage_visited"></span>
    <div class="mypage2_box_title">방문기록</div>
    <div class="blank"></div>
    <ul>
      <visited-list
        v-for="list in lists"
        :key="list.no"
        :list="list"
        v-bind="list"
        @review-write="showReviewWriteBoard"
      ></visited-list>
    </ul>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheFooter from "@/components/inc/footer/TheFooter";
import visitedList from "@/components/visited/visitedList";
import tokenHttp from "../api/tokenHttp";
import reviewWriteBoard from "@/components/visited/reviewWriteBoard.vue";
import { directive as clickOutside } from "v-click-outside";
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
      lists: [],
      writeActive: true,
      modifyActive: false,
      attractionId: "",
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
      this.writeActive = false;
      this.modifyActive = false;
    },
  },
  async created() {
    await tokenHttp.get("attraction/visited?page=0&size=10").then((res) => {
      console.log(res);
      this.lists = res.data.data;
    });
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
</style>