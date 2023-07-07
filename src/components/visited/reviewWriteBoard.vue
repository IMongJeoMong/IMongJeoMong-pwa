<template>
  <div class="reviewBoard">
    <span>리뷰작성</span>
    <span>{{name}}</span>
    <input type="textarea" placeholder="내용을 입력하세요"/>
    <div class="imgBtn">
      <img src alt />
      <span>사진첨부</span>
    </div>
    <div class="btn">
      <span>취소</span>
      <span>작성</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    attractionId: String,
  },
  data() {
    return {
      questNum: 1,
    };
  },
  components: {},
};
</script>
<style scoped>
.reviewBoard {
  background-color: #ffffff;
  position: absolute;
  z-index: 20;
  top: 20%;
  left: 10%;
  width: 80%;
  height: 45%;
  border-radius: 10px;
  border: 1px solid #164c97;
}
.reviewBoard > span:nth-child(1) {
  font-size: 15px;
  margin-top: 20px;
  display: block;
  text-align: left;
  margin-left: 20px;
  color: #164c97;
}
.reviewBoard > span:nth-child(2) {
  margin-top: 20px;
  display: block;
  font-size: 30px;
  margin-bottom: 20px;
  color: #164c97;
}
.reviewBoard > input {
  width: 250px;
  height: 150px;
  border: 1px solid #164c97;
  border-radius: 10px;
  font-size: 15px;
  font-family: "GmarketSans";
  font-weight: 300;
  padding: 10px;
  color: #164c97;
}
.reviewBoard > input::placeholder{
    color: #a5bcdb;
}
.imgBtn {
  width: 80px;
  margin-left: 20px;
  margin-top: 10px;
  height: 30px;
  font-size: 15px;
  border-radius: 30px;
  padding-top: 5px;
  color: #164c97;
  background-color: #e2efff;
}
.btn > span {
  width: 90px;
  margin-top: 30px;
  display: inline-block;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 30px;
  font-size: 15px;
  padding-top: 5px;
  color: #ffffff;
}
.btn > span:nth-child(1) {
  background-color: #bababa;
}
.btn > span:nth-child(2) {
  background-color: #164c97;
}
</style>