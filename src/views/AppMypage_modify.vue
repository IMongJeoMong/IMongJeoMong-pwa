<template>
  <div class="mypage_box">
    <img src="../assets/resource/theme/img/icon/map_myposition.png" alt />
    <div>
      <span class="inputTitle">이메일</span>
      <input class="inputBox" type="email" :placeholder="email" v-model="email"  />
    </div>
    <div>
      <div class="confirm_container">
        <span class="inputTitle">닉네임</span>
        <div class="confirmBtn">중복확인</div>
      </div>
      <input class="inputBox" type="nickname" v-model="nickname" />
    </div>
    <div>
      <span class="inputTitle">비밀번호</span>
      <input class="inputBox" type="password" v-model="password" />
    </div>
    <div>
      <span class="inputTitle">비밀번호 확인</span>
      <input class="inputBox" type="password" v-model="passwordConfirm" />
    </div>
    <div class="gender_container">
      <span>성별</span>
      <div class="gender_radio">
        <label>
          <input type="radio" name="gender" value="M" v-model="gender" />남
        </label>
        <label>
          <input type="radio" name="gender" value="F" v-model="gender" />여
        </label>
      </div>
    </div>
    <div class="birth_container">
      <span>생일</span>
      <input type="date" v-model="birth" />
    </div>
    <div class="birth_container">
      <span>거주 지역</span>
      <select v-model="location">
        <option value>시를 선택하세요</option>
        <option value="서울특별시">서울특별시</option>
        <option value="부산광역시">부산광역시</option>
        <option value="대구광역시">대구광역시</option>
        <option value="대전광역시">대전광역시</option>
      </select>
    </div>
    <div class="button_container">
      <span class="cancle" @click="$router.push({name: 'Mypage'})">취소</span>
      <span class="modify">정보수정</span>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheFooter from "@/components/inc/footer/TheFooter";
import { mapGetters } from "vuex";
export default {
  components: {
    TheFooter,
  },
  data() {
    return {
      email: "aaaa@aaa.com",
      nickname: "",
      password: "",
      passwordConfirm: "",
      gender: "M",
      birth: "",
      location: "대전광역시",
    };
  },
  methods: {
    updateSelected(list) {
      this.lists.forEach((item) => {
        item.isSelected = item === list;
      });
    },
  },
  computed: {
    ...mapGetters("UserInfoStore", ["getUserInfo"])
  },
  created() {
    this.email = this.getUserInfo.email;
    this.nickname = this.getUserInfo.nickname;
    this.gender = this.getUserInfo.getnder;
  }
};
</script>
<style scoped>
.mypage_box {
  width: 100%;
  height: 100%;
  overflow: auto; /* 스크롤이 필요한 경우에만 표시 */
}
.mypage_box > div {
  margin-top: 30px;
  /* border: 1px solid saddlebrown; */
}
.mypage_box > img {
  margin-top: 30px;
  width: 150px;
}
.inputTitle {
  font-size: 15px;
  display: block;
  margin-bottom: 10px;
  color: #164c97;
}
.inputBox {
  border: none;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  background-color: #e2efff;
  color: #164c97;
  font-family: "GmarketSans";
}
.confirm_container {
  display: flex;
  justify-content: center;
}
.confirm_container > span {
  margin-right: 50px;
  margin-left: 140px;
}
.confirmBtn {
  width: 80px;
  font-size: 13px;
  height: 30px;
  margin-top: -5px;
  padding-top: 7px;
  border-radius: 10px;
  background-color: #abc5ed;
  color: #164c97;
}
input[type="radio"] {
  -webkit-appearance: radio;
  appearance: radio;
  width: 15px;
}
.gender_container {
}
.gender_container > span {
  font-size: 15px;
  color: #164c97;
  margin-right: 30px;
}
.gender_radio {
  display: inline-block;
}
.gender_radio > label {
  margin-right: 20px;
  font-size: 15px;
  color: #164c97;
}
.birth_container > span {
  font-size: 15px;
  color: #164c97;
  margin-right: 30px;
}
input[type="date"] {
  width: 120px;
}
select {
  width: 130px;
  height: 30px;
  border-radius: 10px;
  font-size: 15px;
  /* background-color: #ececec; */
  color: #164c97;
  font-family: "GmarketSans";
  border: 1px solid #8b8b8b;
}

/* 선택된 옵션의 스타일 */
select option:checked {
  font-weight: bold;
  color: #ffffff;
  background-color: #164c97;
}
.button_container > span {
  display: inline-block;
  width: 100px;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 15px;
  padding: 5px;
  border-radius: 30px;
}
.button_container > .cancle {
  background-color: #9b9b9b;
  color: white;
}
.button_container > .modify {
  background-color: #164c97;
  color: white;
}
</style>