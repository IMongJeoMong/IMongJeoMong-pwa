<template>
    <div class="mypage_box">
        <span class="mypage2_box_icon mypage_visited"></span>
        <div class="mypage2_box_title">방문기록</div>
        <div class="blank"></div>
        <ul>
            <visited-list v-for="list in lists" :key="list.no" :list="list" v-bind="list"></visited-list>
        </ul>
        <the-footer></the-footer>
    </div>
</template>
<script>

import TheFooter from "@/components/inc/footer/TheFooter";
import visitedList from '@/components/visited/visitedList';
export default {
    components: {
        TheFooter, visitedList,
    },
    data() {
        return {
            lists: [
                {
                    title:"성심당",
                    isWrote:true,
                    date:"2023.06.28",
                    address:"대전 중구 대종로 480번길 15",
                    img:"",
                },
                {
                    title:"유성온천",
                    isWrote:true,
                    date:"2023.06.28",
                    address:"대전 중구 대종로 480번길 15",
                    img:"",
                },
                {
                    title:"한밭대학교",
                    isWrote:false,
                    date:"2023.06.28",
                    address:"대전 중구 대종로 480번길 15",
                    img:"",
                },
                {
                    title:"대전역",
                    isWrote:true,
                    date:"2023.06.28",
                    address:"대전 중구 대종로 480번길 15",
                    img:"",
                },
            ],
        }
    }
}
</script>
<style scoped>
.mypage2_box_icon {
    position: absolute;
    left: 20px;
    top: 35px;
    height: 50px;
    width: 50px;
    background-position: center;
    background-size: 25px 30px;
    background-repeat: no-repeat;
}

.mypage2_box_title {
    position: absolute;
    top: 42px;
    align-items: end;
    height: 10%;
    text-align: left;
    padding-left: 80px;
    color: #164C97;
    font-size: 30px;
}

.blank {
    height: 100px;
}
</style>