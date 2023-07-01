<template>
    <div class="mypage_box">
        <span class="mypage2_box_icon mypage_challenge"></span>
        <div class="mypage2_box_title">업적</div>
        <div class="blank"></div>
        <ul class="col-12 tree_list_con">
            <challenge-list v-for="list in lists" :key="list.no" :list="list" v-bind="list"></challenge-list>
        </ul>

        <the-footer></the-footer>
    </div>
</template>
<script>

import TheFooter from "@/components/inc/footer/TheFooter";
import challengeList from '@/components/challenge/challengeList';
export default {
    components: {
        TheFooter, challengeList,
    },
    data() {
        return {
            lists: [
                {
                    title:"대전 관광지 방문하기",
                },
                {
                    title:"출석하기",
                },
                {
                    title:"리뷰 작성하기",
                },
                {
                    title:"아이템 구매하기",
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