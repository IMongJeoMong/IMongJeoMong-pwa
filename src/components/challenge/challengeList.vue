<template>
  <li>
    <div class="challenge_box">
      <span>{{name}}</span>
      <div>
        <span class="challenge_icon" :class="{ 'medal_none': count < 3 , 'medal_bronze':count>=3}"></span>
        <span class="medal_next"></span>
        <span class="challenge_icon" :class="{ 'medal_none': count < 5 , 'medal_silver':count>=5}"></span>
        <span class="medal_next"></span>
        <span class="challenge_icon" :class="{ 'medal_none': count < 7 , 'medal_gold':count>=7}"></span>
        <span class="medal_next"></span>
        <span class="challenge_icon" :class="{ 'medal_award_blank': count < 7 , 'medal_award':count>=7}"></span>
      </div>
    </div>
  </li>
</template>
  
<script>
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
}
.medal_silver {
  background-image: url("/src/assets/resource/theme/img/icon/medal_silver.png");
}
.medal_gold {
  background-image: url("/src/assets/resource/theme/img/icon/medal_gold.png");
}
.medal_award {
  background-image: url("/src/assets/resource/theme/img/icon/medal_award.png");
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
</style>
  