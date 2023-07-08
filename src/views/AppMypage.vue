<template>
    <div class="mypage_container">
        <div class="mypage_box">
            <div class="mypage_box_title">마이페이지</div>
            <div class="mypage_box_header">
                <router-link :to="{ name: 'MypageChallenge' }">
                    <div>
                        <span class="mypage_box_icon mypage_challenge"></span>
                        <span class="mypage_box_text">업적</span>
                        <span class="mypage_box_icon mypage_box_btnicon"></span>
                    </div>
                </router-link>
                <router-link :to="{ name: 'MypageVisited' }">
                    <div>
                        <span class="mypage_box_icon  mypage_visited"></span>
                        <span class="mypage_box_text">방문일지</span>
                        <span class="mypage_box_icon mypage_box_btnicon"></span>
                    </div>
                </router-link>
                <router-link :to="{ name: 'MypageBackground' }">
                    <div>
                        <span class="mypage_box_icon mypage_background"></span>
                        <span class="mypage_box_text">획득한 배경</span>
                        <span class="mypage_box_icon mypage_box_btnicon"></span>
                    </div>
                </router-link>
                <router-link :to="{ name: 'MypageCharacter' }">
                    <div>
                        <span class="mypage_box_icon mypage_charter"></span>
                        <span class="mypage_box_text">획득한 캐릭터</span>
                        <span class="mypage_box_icon mypage_box_btnicon"></span>
                    </div>
                </router-link>
                <router-link :to="{ name: 'VisitdCard' }">
                    <div>
                        <span class="mypage_box_icon  mypage_visitedCard"></span>
                        <span class="mypage_box_text">획득한 관광지 카드</span>
                        <span class="mypage_box_icon mypage_box_btnicon"></span>
                    </div>
                </router-link>
            </div>
            <div class="mypage_box_footer">
                <router-link :to="{ name: 'MypageModify' }">
                    <div>
                        <span class="mypage_box_icon mypage_user"></span>
                        <span class="mypage_box_text">회원정보 수정</span>
                        <span class="mypage_box_icon mypage_box_btnicon"></span>
                    </div>
                </router-link>
                <router-link :to="{ name: 'UpdateInfo' }">
                    <div>
                        <span class="mypage_box_icon mypage_update"></span>
                        <span class="mypage_box_text">업데이트 정보</span>
                        <span class="mypage_box_icon mypage_box_btnicon"></span>
                    </div>
                </router-link>
                <a @click="logout()">
                    <div class="logout">
                        <span class="mypage_box_text">로그아웃</span>
                    </div>
                </a>
                <a>
                    <div class="Withdrawal">
                        <span class="mypage_box_text">회원탈퇴</span>
                    </div>
                </a>
                
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>
<script>

import TheFooter from "@/components/inc/footer/TheFooter";

export default {
    components: {
        TheFooter,
    },
    methods: {
        async logout() {
            sessionStorage.clear(); 
            this.$router.push({name : "UserLogin"})
        }
    }
}
</script>
<style scoped>
.mypage_container{
    height:100%;
}
.mypage_box {
    position: fixed;
    width: 100%;
    height: calc(100% - 10rem);
    background-color: #FFFFFF;
    overflow:scroll;
}


.mypage_box>div>a>div {
    width: 80%;
    height: 50px;
    margin: 10px auto;
    border: 2px solid #7496C3;
    color: #164C97;
    border-radius: 10px;
    background-color: #F3F8FE;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
}

.mypage_box_icon {
    display: inline-block;
    width: 20%;
    background-position: center;
    background-size: 25px 25px;
    background-repeat: no-repeat;
}

.mypage_challenge {
    background-size: 25px 30px;
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_challenge_icon.png");
}

.mypage_box_btnicon {
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_btn_icon.png");
}

.mypage_background {
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_background_icon.png");
}

.mypage_charter {
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_charter_icon.png");
}

.mypage_trophy {
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_trophy_icon.png");
}

.mypage_user {
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_user_icon.png");
}

.mypage_update {
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_update_icon.png");
}

.mypage_visited {
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_visited_icon.png");
}

.mypage_visitedCard{
    background-image: url("/src/assets/resource/theme/img/icon/Mypage_visitedCard_icon.png");
}

.mypage_box_text {
    width: 60%;
    font-size: large;
    text-align: left;
}

.mypage_box_btnicon {
    width: 20%;
    color: #164C97;
    font-weight: bold;
}

.mypage_box_title {
    display: flex;
    align-items: end;
    height: 10%;
    text-align: left;
    padding-left: 10%;
    color: #164C97;
    font-size: 30px;
}

.mypage_box_header {
    margin-top: 5%;
    height: 10%;
}

.mypage_box_header>div {
    height: 100%;
}

.mypage_box_footer {
    margin-top: 80%;
}

.mypage_box_footer>a>div {
    background-color: #ebebeb !important;
    color: #313131 !important;
    border: 2px solid #585858 !important;
}
.logout{
    margin-top: 50px !important;
    display: block !important; 
}
.Withdrawal{
    display: block !important; 
}
</style>