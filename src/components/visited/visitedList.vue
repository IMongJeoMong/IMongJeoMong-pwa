<template>
  <li>
    <div class="visited_box" v-for="(list, index) in getMyReviewList" :key="index">
      <img v-if="list.imagePath != '' " :src="list.imagePath" alt />
      <img v-else :src ="require('@/assets/resource/common/img/default_Img.png')">
      
      <div>
        <div class="visited_title">{{ list.name }}</div>
        <div v-if="list.reviewId == null">
          <div class="Review write" @click="reviewWrite(list)">
            <span>리뷰작성</span>
            <span class="icon review_write"></span>
          </div>
        </div>
        <div v-else>
          <div class="Review modify" @click="reviewModify(list)">
            <span>리뷰수정</span>
            <span class="icon review_modify"></span>
          </div>
        </div>
        <div class="visited_date">{{ list.visitTime }}</div>
        <div class="visited_addr">{{ list.address }}</div>
      </div>
    </div>
  </li>
</template>
  
<script>
import { mapGetters } from 'vuex';

export default {
  name: "visitedList",
  methods: {
    reviewWrite(list) {
      this.$emit("review-write", list); // 이벤트 발생
    },
    reviewModify(list) {
      this.$emit("review-modify", list);
    }
  },
  computed: {
    ...mapGetters("ReviewStore", ["getMyReviewList"])
  },
};
</script>
<style scoped>
.visited_box {
  display: flex;
  border: 1px solid #82ace7;
  border-radius: 10px;
  background-color: #f3f8fe;
  text-align: center;
  width: 350px;
  height: 80px;
  margin: 0 auto;
  margin-top: 20px;
}

.visited_box > img {
  margin-top: 5px;
  width: 100px;
  height: 70px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
}

.visited_title {
  font-size: 17px;
  padding-top: 3px;
  width: 140px;
  text-align: left;
  color: #164c97;
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 설정 */
  overflow: hidden; /* 내용이 컨테이너를 벗어나면 숨김 처리 */
  text-overflow: ellipsis; /* 생략 부호(...)로 표시 */
}

.visited_box > div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.Review {
  right: 0px;
  display: flex;
  align-items: center;
  width: 80px;
  height: 23px;
  border-radius: 30px;
  padding: 5px;
}

.write {
  background-color: #164c97;
}
.modify {
  background-color: #7c7c7c;
}

.Review > span {
  margin: 0 auto;
  font-size: 12px;
  color: #ffffff;
}

.review_modify {
  background-image: url("../../assets/resource/theme/img/icon/review_modify.png");
}
.review_write {
  background-image: url("../../assets/resource/theme/img/icon/review_write.png");
}

.icon {
  display: inline-block;
  width: 20%;
  background-position: center;
  background-size: 15px 15px;
  background-repeat: no-repeat;
}
.visited_date {
  width: 200px;
  text-align: left;
  font-size: 12px;
  font-weight: 300;
}
.visited_addr {
  width: 200px;
  text-align: left;
  font-size: 12px;
  font-weight: 300;
}
</style>
  