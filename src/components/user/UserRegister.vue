<template>
  <div class="mypage_box">
    <img src="../../assets/resource/theme/img/icon/map_myposition.png" alt />
    <div>
      <div class="confirm_container">
        <span class="inputTitle">이메일</span>
        <div class="confirmBtn">중복확인</div>
      </div>
      <input class="inputBox" type="email" v-model="registInfo.email" />
    </div>
    <div>
      <div class="confirm_container">
        <span class="inputTitle">닉네임</span>
        <div class="confirmBtn">중복확인</div>
      </div>
      <input class="inputBox" type="nickname" v-model="registInfo.nickname" />
    </div>
    <div>
      <span class="inputTitle">비밀번호</span>
      <input class="inputBox" type="password" v-model="registInfo.password" />
    </div>
    <div>
      <span class="inputTitle">비밀번호 확인</span>
      <input class="inputBox" type="password" v-model="passwordConfirm" />
    </div>
    <div class="gender_container">
      <span>성별</span>
      <div class="gender_radio">
        <label>
          <input type="radio" name="gender" value="M" v-model="registInfo.gender" />남
        </label>
        <label>
          <input type="radio" name="gender" value="F" v-model="registInfo.gender" />여
        </label>
      </div>
    </div>
    <div class="birth_container">
      <span>생일</span>
      <input type="date" v-model="registInfo.birth" />
    </div>
    <div class="birth_container">
      <span>거주 지역</span>
      <select v-model="registInfo.sido_code">
        <option value>시를 선택하세요</option>
        <option value="0">서울특별시</option>
        <option value="1">부산광역시</option>
        <option value="2">대구광역시</option>
        <option value="3">대전광역시</option>
      </select>
    </div>
    <div class="button_container">
      <span class="cancle">취소</span>
      <span class="modify" @click="regist()">회원가입</span>
    </div>
  </div>
</template>
  <script>
import axioshttp from "../../api/axioshttp";
import router from '@/router';
export default {
  components: {},
  data() {
    return {
      registInfo: {
        email: "",
        nickname: "",
        password: "",
        gender: "",
        birth: "",
        sido_code: 3,
      },
      passwordConfirm: "",
    };
  },
  methods: {
    updateSelected(list) {
      this.lists.forEach((item) => {
        item.isSelected = item === list;
      });
    },
    regist() {
      axioshttp
        .post("/member/signup", this.registInfo)
        .then((res) => {
          console.log(res.data);
          alert("회원가입에 성공하였습니다.");
          router.push({ name: "UserLogin" });
        })
        .catch((err) => {
          console.log(err);
          alert("회원가입에 실패했습니다.");
        });
    },
  },
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