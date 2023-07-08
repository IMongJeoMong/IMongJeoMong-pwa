<template>
  <li>
    <div class="challenge_box">
      <span>{{name}}</span>
      <div>
        <span class="challenge_icon" :class="{ 'medal_none': count < 1 , 'medal_bronze': count >= 1}"></span>
        <span class="medal_next"></span>
        <span class="challenge_icon" :class="{ 'medal_none': count < 3 , 'medal_silver': count >= 3}"></span>
        <span class="medal_next"></span>
        <span class="challenge_icon" :class="{ 'medal_none': count < 5 , 'medal_gold': count >= 5}"></span>
        <span class="medal_next"></span>
        <span v-if = "getState">
          <span class="challenge_icon medal_award"></span>
        </span>
        <span v-else>
          <span v-if = "count >= 7" class="challenge_icon medal_award_blank reward_btn_img">
            <div class="reward_btn" @click="onReward">보상 받기</div>
          </span>
          <span v-else class="challenge_icon medal_award_blank"></span>
        </span>
      </div>
    </div>
  </li>
</template>
  
<script>
import tokenHttp from '@/api/tokenHttp';

export default {
  name: "challengeList",
  props: {
    achievementId: Number,
    name: String,
    gold: Number,
    exp: Number,
    count: Number,
    getState: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    onReward() {
      tokenHttp.post("achievement/get/" + this.achievementId)
        .then((res) => {
          console.log(res.message)
          this.$emit("refresh")
        })
    }
  }
};
</script>
<style scoped>
.challenge_box {
  border: 1px solid #82ace7;
  border-radius: 10px;
  background-color: #f3f8fe;
  text-align: center;
  width: 350px;
  height: 130px;
  margin: 0 auto;
  margin-top: 20px;
  /* box-shadow: 3px 3px 4px rgba(99, 99, 99, 0.453); */
}

.challenge_box > span {
  display: block;
  margin-top: 10px;
  font-size: 20px;
  color: #164c97;
}

.challenge_icon {
  display: inline-block;
  width: 20%;
  background-position: center;
  background-size: 55px 55px;
  background-repeat: no-repeat;
  height: 80px;
}

.medal_none {
  background-image: url("/src/assets/resource/theme/img/icon/medal_blank.png");
}
.medal_bronze {
  background-image: url("/src/assets/resource/theme/img/icon/medal_bronze.png");
  filter: drop-shadow(2px 2px 2px #0a0a0a76);
}
.medal_silver {
  background-image: url("/src/assets/resource/theme/img/icon/medal_silver.png");
  filter: drop-shadow(2px 2px 2px #0a0a0a76);
}
.medal_gold {
  background-image: url("/src/assets/resource/theme/img/icon/medal_gold.png");
  filter: drop-shadow(2px 2px 2px #0a0a0a76);
}
.medal_award {
  background-image: url("/src/assets/resource/theme/img/icon/medal_award.png");
  filter: drop-shadow(3px 3px 2px #0a0a0a76) 
    drop-shadow(0 0 2px rgba(255, 221, 0, 0.7))
    drop-shadow(0 0 7px rgba(255, 221, 0, 0.7))
    drop-shadow(0 0 15px rgba(255, 221, 0, 0.7));
}
.medal_award_blank {
  background-image: url("/src/assets/resource/theme/img/icon/medal_award_blank.png");
}
.medal_next {
  background-image: url("/src/assets/resource/theme/img/icon/medal_next.png");
  display: inline-block;
  width: 15px;
  background-position: center;
  background-size: 9px 14px;
  background-repeat: no-repeat;
  height: 80px;
}

.reward_btn_img{
  position: relative;
}

.reward_btn{
  position: absolute;
  z-index: 10;
  top:25px;
  background-color: #164C97;
  color:white;
  width: 69px;
  height: 30px;
  line-height: 33px;
  font-size: 14px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #00000089;
  /* filter: drop-shadow(0 0 2px #164c97b0); */
}
</style>
  