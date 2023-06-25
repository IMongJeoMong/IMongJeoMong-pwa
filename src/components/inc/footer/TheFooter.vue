<template>
    <footer>
        <ul class="sidebar">
            <li class="main">
                <router-link :to="{name : 'Main'}">
                    <img />
                    <span>홈</span>
                </router-link>
            </li>
            <li class="map">
                <router-link :to="{name : 'Map'}">
                    <img />
                    <span>탐험</span>
                </router-link>
            </li>
            <li class="shop">
                <router-link :to="{name : 'Shop'}">
                    <img />
                    <span>상점</span>
                </router-link>
            </li>
            <li class="mypage">
                <router-link :to="{name : 'Mypage'}">
                    <img />
                    <span>마이페이지</span>
                </router-link>
            </li>
        </ul>
    </footer>
</template>

<script>

export default {
    data() {
        return {
            //현재 선택되어있는 메뉴
            selectMenu: 'home',
        }
    },
    methods: {
        //메뉴 클릭시 화면 이동
    }
}
</script>
<style scoped>
    
    .sidebar{
        margin:0px auto;
        width: 100%;
        border-radius: 45px 45px 0px 0px;
        height: 100px;
        background-color: hsl(214.88,74.57%,33.92%);
        position:absolute;
        bottom:0px;
        z-index: 50;
        display: flex;
    }

    .sidebar > li {
        width: 25%;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        /* border:1px solid black; */
    }

    .sidebar > li > a {
        width:100%;
        height: 100%;
        display: block;
        position:relative;
        box-sizing: border-box;
        padding-top : 15px;
        text-align: center;
        background-repeat: no-repeat;
        /* border: 1px solid black; */
    }
    
    .sidebar > li > a > img {
        display: block;
        width: 30%;
        margin: 5px auto;
        margin-bottom: 15px;
    }

    .sidebar > li.main > a > img {content:url("/src/assets/resource/common/img/icon/homeIcon.png");} 
    .sidebar > li.main > a.router-link-exact-active > img {content: url("/src/assets/resource/common/img/icon/homeSelectIcon.png"); }

    .sidebar > li.map > a > img {content:url("/src/assets/resource/common/img/icon/adventureIcon.png");} 
    .sidebar > li.map > a.router-link-exact-active > img {content: url("/src/assets/resource/common/img/icon/adventureSelectIcon.png"); }

    .sidebar > li.shop > a > img {content:url("/src/assets/resource/common/img/icon/shopIcon.png");} 
    .sidebar > li.shop > a.router-link-exact-active > img {content: url("/src/assets/resource/common/img/icon/shopSelectIcon.png"); }

    .sidebar > li.mypage > a > img {content:url("/src/assets/resource/common/img/icon/myPageIcon.png");} 
    .sidebar > li.mypage > a.router-link-exact-active > img {content: url("/src/assets/resource/common/img/icon/myPageSelectIcon.png"); }

    .sidebar > li > a > span {
        width:90px;
        margin:0px auto;
        color: white;
        font-size: 18px;
    }
    .sidebar > li >  a.router-link-exact-active > span {
        color: rgb(187,212,248);
    }
</style>