<template>
    <div class="mypage_box">
        <span class="mypage2_box_icon mypage_background"></span>
        <div class="mypage2_box_title">획득한 배경</div>
        <div class="blank"></div>
        <div class="scroll">
            <div class="container" v-for="list in lists" :key="list.no" :list="list" v-bind="{ list: list }">
                <div class="title_box">
                    <span>{{ list.title }}</span>
                </div>
                <img class="backgroundImg" :class="{ 'selected': list.isSelected }" :src="list.img" alt="" @click="updateSelected(list)">
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
                    title: "[대전] 엑스포의 낮",
                    isSelected: true,
                    img: "/img/background1.959c6b8e.png",
                },
                {
                    title: "[대전] 엑스포의 밤",
                    isSelected: false,
                    img: "/img/background2.3488fbdd.jpg",
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

.backgroundImg {
    width: 250px;
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