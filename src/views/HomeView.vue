<template>
  <div class="background" :style="{'background-image': 'url(' + require('@/assets/background/background1.png') + ')'}">
    <!-- 상단 정보 -->
    <HomeTop class="topInfomation"></HomeTop>
    <!-- 캐릭터 -->
    <div class="characterBox">
      <img class="myCharacter" :src="require('@/assets/character/character1.png')"/>
    </div>

    <!-- 탐색 박스 -->
    <div class="homeSide">
      <div class="findBtn">
        <div><img/></div>
        <div>탐색하기</div>
      </div>
      <div class="questBtn">
        <img/>
        <div>퀘스트</div>
      </div>
    </div>

  </div>
</template>
<script>
import HomeTop from "@/components/home/HomeTopInfomation";

export default {

  components : {
    HomeTop,
  },
  
}
</script>
<style scoped>

  /* 배경 CSS */
  .background{
    position:fixed;
    top:0px;
    z-index:1;
    width:100%;
    height:94%;
    background-position: center;
    background-size: cover;
  }
  
  /* 상단 정보  */
  .topInfomation{
    position: absolute;
    top:0px;
    width:100%;
    height:30%;
  }

  /* 캐릭터 CSS */
  .characterBox{
    position: absolute;
    top: 30%;
    width:99%;
    /* margin:80% auto; */
    /* border:1px solid black; */
  }

  .characterBox > img {
    width:100%;
    height:100%;
  }

  /* 홈 사이드 박스 */
  .homeSide{
    width:100%;
    bottom: 90px;
    position:absolute;
    display: flex;
    justify-content: space-evenly;
  }

  /* 탐색 버튼 */
  .findBtn{
    width: 65%;
    height: 60px;
    line-height: 60px;
    border-radius: 10px;
    border:4px solid #164C97;
    background-color:white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    
    font-weight:bold;
    display:flex;
    justify-content: center;
  }
  .findBtn > div {
    color: #164C97;
    font-size:27px;
  }

  .findBtn > div > img{
    padding:10px;
    width:40px;
    height:40px;
    margin:auto;
    /* border:1px solid #164C97; */
  }

  /* 퀘스트 버튼 */
  .questBtn{
    width: 16%;
    height: 60px;
    border-radius: 10px;
    border:4px solid #FDAE02;
    background-color:white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color:#4C4C4C;
    font-size:14px;
    font-weight: bold;
  }
  
  .questBtn > img{
    margin:0px auto;
    padding: 0px;
    width:90%;
    height:38px;
    border :1px solid black;
  }

  .questBtn > div{
    margin:0px;
    width:100%;
    height:20px;
  }
</style>