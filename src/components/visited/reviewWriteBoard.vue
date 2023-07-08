<template>
  <div v-if="reviewInfo.reviewId != null" class="reviewBoard">
    <span>
      <span>리뷰수정</span>
      <span @click="reviewDelete()">삭제</span>
    </span>
    <span>{{ reviewInfo.name }}</span>
    <textarea placeholder="내용을 입력하세요" v-model="content"></textarea>
    <div class="imgBtn">
      <div class="image_input_box">
        <label for="inputImage">사진수정</label>
        <input value="추후예정" placeholder="추후예정" class="upload-name" ref="inputName"/>
      </div>
    </div>
    <div class="btn">
      <span @click="closeReview()">취소</span>
      <span @click="reviewModify()">수정</span>
    </div>
  </div>
  <div v-else class="reviewBoard">
    <span>리뷰작성</span>
    <span>{{reviewInfo.name}}</span>
    <textarea placeholder="내용을 입력하세요" v-model="content"></textarea>
    <div class="imgBtn">
      <img src alt />
      <div class="image_input_box">
        <label for="inputImage">사진첨부</label>
        <input value="첨부파일" placeholder="첨부파일" class="upload-name" ref="inputName"/>
      </div>
      <input type="file" id="inputImage" name="imgfile" @change="handleFileChange" accept="image/*">
    </div>
    <div class="btn">
      <span @click="closeReview()">취소</span>
      <span @click="reviewSubmit()">작성</span>
    </div>
  </div>
</template>
<script>
// import axioshttp from '@/api/axioshttp';
import axioshttp from '@/api/axioshttp';
import tokenHttp from '@/api/tokenHttp';
// import axios from 'axios';

export default {
  props: {
    reviewInfo : Object
  },
  data() {
    return {
      questNum: 1,
      content : "",
      imageFile: null,
    };
  },
  created() {
      //리뷰 아이디가 null이 아니라면 <- 이미 리뷰 존재
      if (this.reviewInfo.reviewId != null) {
        axioshttp.get("review/id/" + this.reviewInfo.reviewId)
          .then((res) => {
            this.content = res.data.data.content;
          })
      }
    },
  methods: {
    //커스텀 파일 이름
    handleFileChange(event) {
      this.imageFile = event.target.files[0];
      this.$refs.inputName.value = this.imageFile.name;
      console.log(this.imageFile)
    },
    closeReview() {
      this.$emit("closeReview")
    },
    //리뷰 작성
    async reviewSubmit() {
      let form = new FormData();
      console.log(this.content.trim())
      if (this.content.trim() === "") {
        alert("리뷰를 작성해주세요")
        return;
      }

      console.log(this.reviewInfo)

      form.append("image", this.imageFile);
      form.append("attractionId", this.reviewInfo.attractionId);
      form.append("content", this.content);

      console.log(form)
      //서버 전송
      tokenHttp.post("review/"+ this.reviewInfo.myAttractionId, form)
        .then((res) => {
          //새로 리스트 받기
          this.$store.dispatch("ReviewStore/setMyReviewList");
          alert(res.data.message);
          console.log(res.data.code, res.data.message)
        })
        .catch((err) => {
        console.log(err)
        })
      //화면 닫기
      this.closeReview();
    },
    //리뷰 수정
    async reviewModify() {
      let form = new FormData();
      form.append("content", this.content);

      tokenHttp.patch("/review/" + this.reviewInfo.reviewId, form)
        .then((res) => {
          console.log(res)
           //새로 리스트 받기
           this.$store.dispatch("ReviewStore/setMyReviewList");
           alert(res.data.message);
        })
        .catch((err) => {
          console.log(err)
        })
      //화면 닫기
      this.closeReview();
    },
    //삭제
    async reviewDelete() {
      tokenHttp.delete("review/" + this.reviewInfo.reviewId)
        .then((res) => {
          console.log(res.data.message)
          //새로 리스트 받기
          this.$store.dispatch("ReviewStore/setMyReviewList");
          alert(res.data.message)
        })
       //화면 닫기
       this.closeReview();
    }
    
  }
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
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 20px 20px 0px 20px;
  color: #164c97;
}

.reviewBoard > span:nth-child(1) >span:nth-child(2) {
  color: #164c97;
  width:40px;
  text-align: center;
  border-bottom: 1.5px solid #164c97;
  border-radius: 1px;
}

.reviewBoard > span:nth-child(2) {
  margin-top: 20px;
  display: block;
  font-size: 30px;
  margin-bottom: 20px;
  color: #164c97;
}
.reviewBoard > textarea {
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
.reviewBoard > textarea::placeholder {
  color: #a5bcdb;
}
.imgBtn {
  width: 85%;
  margin-left: 20px;
  margin-top: 10px;
  height: 30px;
  font-size: 15px;
  border-radius: 30px;
  color: #164c97;
  /* background-color: #e2efff; */
  display: flex;
}

.image_input_box{
  display: flex;
  height:30px;
  width:500px;
}

.image_input_box > input {
  display: inline-block;
  background-color: #ffffff00;
  height: 30px;
  overflow: hidden;
  border: 0;
}

.image_input_box > label {
  width: 90px;
  /* margin-top: 30px; */
  display: inline-block;
  background-color: #e2efff;
  margin-left: 10px;
  margin-right: 5px;
  border-radius: 30px;
  height: 30px;
  line-height: 35px;

 
  font-size: 15px;
  
  /* padding-top: 5px; */
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

.upload-name {
    display: inline-block;
    height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    width: 78%;
    color: #999999;
}


#inputImage{
  overflow:hidden;
  width:0;
  height:0;
  padding:0;
  border:0;
}
.btn > span:nth-child(1) {
  background-color: #bababa;
}
.btn > span:nth-child(2) {
  background-color: #164c97;
}
</style>