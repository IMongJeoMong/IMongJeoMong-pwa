<template>
    <div class="login_container">
        <div>
            <div class="login_log"></div>
            <div class="login_box">
                <div class="login_id_box">
                    <div>아이디</div>
                    <input type="text" v-model="id" v-on:keyup.enter="userLogin"/>
                </div>
                <div class="login_pw_box">
                    <div>비밀번호</div>
                    <input type="password" v-model="password" v-on:keyup.enter="userLogin"/>
                </div>
            </div>
            <div class="login_find_box">
                <div class="login_find_box_auto_login">
                    <div class="togglebox">
                        <span class="toggleContainer">
                            <input type="checkbox" id="onoff" class="onoff" hidden>
                            <label for="onoff" class="onoffToggle">
                                <span class="onoffBall"></span>
                            </label>
                        </span>
                        <span class="toggleContainer_text">자동로그인</span>
                    </div>
                    <div class="findbox">
                        <span>아이디</span>
                        <span>|</span>
                        <span>비밀번호 찾기</span>
                    </div>
                </div>
            </div>
            <div class="local_btn_box">
                <div class="register_btn" @click="$router.push({ name :'Register'})">
                    <div>회원가입</div>
                </div>
                <div class="login_btn" @click="userLogin()"> 
                    <div>로그인</div>
                </div>
            </div>
            <div class="social_register_box">
                <div>SNS 계정으로 시작하기</div>
            </div>
            <div class="social_login_box">
                <div class="kakao_login_btn"></div>
                <div class="naver_login_btn"></div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            id: "",
            password : "",
        }
    },
    methods: {
        async userLogin() {

            if (this.id == "" || this.password == "") {
                alert("아이디와 비밀번호를 입력해주세요");
            } else {

                let loginInfo = await {
                    "email": this.id,
                    "password": this.password,
                };
                console.log(loginInfo)
                this.$store.dispatch('UserInfoStore/setUserlogin' , loginInfo);
            }
        },
         //카카오 Script가 없다면 ..
         loadKakaoScript() {
            const script = document.createElement("script");
            let kakaoKey = "19b4f102b8b222489a051ece56dc8f58";
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=" + kakaoKey;

            //스크립트 로드가 끝나면 지도를 실행될 준비가 되어 있다면 지도가 실행되도록 구현
            script.addEventListener("load", () => {
                /* global kakao */
                kakao.maps.load(this.loadMap);
            });
            document.head.appendChild(script); // html>head 안에 스크립트 소스를 추가
        },
    },
    created() {
    
        //VUE 카카오맵 동적
        if (window.kakao && window.kakao.maps) {
           console.log("카카오 API 추가 완료")
        } else {
            //없다면 카카오 스크립트 추가후 맵 실행
            this.loadKakaoScript();
        }
    }

}
</script>
<style>

    .login_container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
    }

    .login_log{
        width: 100%;
        height: 30rem;
        background-image: url("/src/assets/logo.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 auto;
    }

    .login_box{
        margin: 0 auto 0 auto;
        width: 100%;
    }

    .login_box > div{
        display:flex;
        justify-content: center;
        margin: 20px calc(10% - 1rem) 5px calc(10% - 1rem);
    }

    .login_box > div > div{
       width: 100px;
       font-size: 17px;
       color: #164C97;
       text-align: left;
       height: 35px;
       line-height: 40px;
    }

    .login_box > div > input {
        width: 70%;
        height: 35px;
        /* border: 3px solid #ABC5ED; */
        border : none;
        border-radius: 8px;
        background-color: #E2EFFF;
        text-align: left;
        padding:10px;
        margin:0px;
    }


    .login_find_box{
        width: 100%;
        height: 50px;
    }

      /* 토글  관련 */
    .login_find_box_auto_login{
        display:flex;
        width: 100%;
        height: 50px;
        /* border: 1px solid black; */
        justify-content: space-around;
        font-size:13px;
        color:#164C97;
    }

    .togglebox{
        display: flex;
        line-height: 50px;
        width:120px;
    }

    .onoffToggle {
        width: 45px;
        height: 26px;
        display: block;
        position: relative;
        border-radius: 20px;
        background: #fff;
        border: 2px solid #afafaf;
        cursor: pointer;
    }

    .onoffToggle .onoffBall {
        width: 21px;
        height: 21px;
        position: absolute;
        top: 50%;
        left: 2px;
        transform: translateY(-50%);
        border-radius: 50%;
        background: #164C97;
    }

    .onoff:checked + .onoffToggle {
        border: 2px solid #164C97;
        background: #164C97;
    }

    .onoff:checked ~ .onoffToggle .onoffBall {
        left: 30px;
        left: calc(100% - 21px);
        border: 2px solid #fff;
        background: #fff;
    }

    .onoffToggle,
    .onoffBall {
        transition: all 0.2s ease-in;
    }

    .toggleContainer {
        display:inline-block;
        margin: 0 auto;
        margin-top: 10px; 
    }

    /* 찾기 */

    .findbox{
        display: inline-block;
        /* border: 1px solid black; */
        line-height: 50px;
    }


    .findbox > span{
        margin:2px;
    }
    
    .local_btn_box{
        width:100%;
        display:flex;
        justify-content: center;
    }

    .local_btn_box > div{
        width:28%;
        height:40px;
        line-height: 42px;
        border-radius: 12px;
        font-size: 15px;
        margin:10px;
    }

    .login_btn{
        /* border:1px solid black; */
        background-color: #164C97;
        color: white;
    }

    .register_btn{
        background-color: #ABABAB;
        color: white;
    }

    .social_register_box{
        margin: 25px auto 10px auto;
        height: 20px;
        font-size: 13px;
        color: #164C97;
        
    }

    .social_login_box > div{
        display:inline-block;
        width: 110px;
        height: 45px;
        background-position: center;
        background-size:cover;
        border-radius: 5px;
    }

    .kakao_login_btn{
        background-image :  url("/src/assets/resource/theme/img/icon/Kakao_login_icon.png");
        margin-right:10px;
    }

    .naver_login_btn{ 
        background-image :  url("/src/assets/resource/theme/img/icon/Naver_login_icon.png");
        margin-left:10px;
    }

    
</style>