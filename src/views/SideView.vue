<template>
    <div class="sidebar">
        <div @click="menuClick('home')" class="sidebarContent">
            <img class="sideImg" :src="selectMenu === 'home' ? require('@/assets/icon/homeSelectIcon.png') : require('@/assets/icon/homeIcon.png')"/>
            <div :class="selectMenu === 'home' ? 'selectSideText' : 'sideText'">홈</div>
        </div>
        <div @click="menuClick('map')" class="sidebarContent">
            <img class="sideImg" :src="selectMenu === 'map' ? require('@/assets/icon/adventureSelectIcon.png') : require('@/assets/icon/adventureIcon.png')"/>
            <div :class="selectMenu === 'map' ? 'selectSideText' : 'sideText'">탐험</div>
        </div>
        <div @click="menuClick('shop')" class="sidebarContent">
            <img class="sideImg" :src="selectMenu === 'shop' ? require('@/assets/icon/shopSelectIcon.png') : require('@/assets/icon/shopIcon.png')"/>
            <div :class="selectMenu === 'shop' ? 'selectSideText' : 'sideText'">상점</div>
        </div>
        <div @click="menuClick('mypage')" class="sidebarContent">
            <img class="sideImg" :src="selectMenu ===  'mypage' ? require('@/assets/icon/myPageSelectIcon.png') : require('@/assets/icon/myPageIcon.png')"/>
            <div :class="selectMenu === 'mypage' ? 'selectSideText' : 'sideText'">마이페이지</div>
        </div>
     </div>
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
        menuClick(type) {
            this.selectMenu = type;
            this.$store.commit('SideMenuStore/SET_SELECT_MENU', this.selectMenu);
        }
    }
}
</script>
<style scoped>
    .sidebar{
        margin:0px auto;
        /* min-width:450px; */
        width: 100%;
        /* border: 1px solid black; */
        border-radius: 45px 45px 0px 0px;
        display: flex;
        height: 100px;
        background-color: hsl(214.88,74.57%,33.92%);
        position:fixed;
        bottom:1px;
        z-index: 50;
    }

    .sidebarContent{
        margin:auto auto;
        /* border: 1px solid black; */
        width:100px;
        height:100px;
    }

    .sideImg{
        width:40px;
        height:40px;
        line-height: 50px;
        /* border: 1px solid black; */
        margin:15px auto 3px auto;
    }
    .sideText{
        width:90px;
        margin:0px auto;
        color: white;
    }
    .selectSideText{
        color: rgb(187,212,248);
    }
</style>