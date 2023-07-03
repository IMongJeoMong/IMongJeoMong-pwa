<template>
    <div class="mypage_box">
        <span class="mypage2_box_icon mypage_charter"></span>
        <div class="mypage2_box_title">획득한 캐릭터</div>
        <div class="blank"></div>
        <div class="scroll">
            <div class="container" v-for="list in lists" :key="list.no" :list="list" v-bind="{ list: list }">
                <div class="title_box">
                    <span>{{ list.title }}</span>
                </div>
                <div class="character_container" :class="{ 'selected': list.isSelected }">
                    <img class="backgroundImg"  :src="list.img" alt=""
                        @click="updateSelected(list)">
                </div>
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
    data() {
        return {
            lists: [
                {
                    title: "[대전] 꿈돌이",
                    isSelected: true,
                    img: "/img/character1.85188a45.gif",
                },
                {
                    title: "[대전] 꿈순이",
                    isSelected: false,
                    img: "/img/character2.b7503a94.gif",
                },
            ],
        }
    },
    methods: {
        updateSelected(list) {
            this.lists.forEach((item) => {
                item.isSelected = item === list;
            });
        },
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

.scroll {
    display: flex;
    overflow-x: scroll;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    height: 650px;
    justify-content: center;
    margin-top: -10%;
}

.title_box {
    width: 150px;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #164C97;
    color: rgb(255, 255, 255);
    font-size: 15px;
    margin-bottom: 20px;
}
.character_container{
    width: 250px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: #F3F8FE;
    box-shadow: 2px 2px 4px #82ACE7;
}

.backgroundImg {
    width: 200px;
    height: fit-content;
}

.selected {
    border: 3px solid #164C97;
    box-sizing: border-box;
}

input {
    margin-top: 30px;
    -webkit-appearance: radio;
    appearance: radio;
}
</style>