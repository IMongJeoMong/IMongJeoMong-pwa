<template>
    <li>
        <div class="visited_box">
            <img src="../../assets/resource/common/img/default_Img.png" alt="">
            <div>
                <div class="visited_title">{{ title }}</div>
                <div v-if="isWrote == false">
                    <div class="Review write">
                        <span>리뷰작성</span>
                        <span class="icon review_write"></span>
                    </div>
                </div>
                <div v-else>
                    <div class="Review modify">
                        <span>리뷰수정</span>
                        <span class="icon review_modify"></span>
                    </div>
                </div>
                <div class="visited_date">{{ date }}</div>
                <div class="visited_addr">{{ address }}</div>
            </div>
        </div>
        <!-- <div v-if="lockStatus == false" :class="{ 'active': activeStatus == true }">
            <img v-if="activeStatus == true" :src="this.$resource.themeRes.img(treeImg)" :alt="treeName" />
            <img v-else :src="this.$resource.themeRes.img(treeInActiveImg)" :alt="treeName" />
            <span class="tree_name">{{ treeName }}</span>
            <span class="num">{{ count }}</span>
            <span class="weight">{{ weight }}</span>
        </div>
        <div v-else><img :src="this.$resource.themeRes.img('tree_lock_icon.png')" alt="자물쇠" /></div> -->
    </li>
</template>
  
<script>

export default {
    name: 'visitedList',
    props: {
        title: String,
        isWrote: Boolean,
        date: String,
        address: String,
        img: String,
    }
}
</script>
<style scoped>
.visited_box {
    display: flex;
    border: 1px solid #82ACE7;
    border-radius: 10px;
    background-color: #F3F8FE;
    text-align: center;
    width: 350px;
    height: 80px;
    margin: 0 auto;
    margin-top: 20px;
}

.visited_box>img {
    margin-top: 5px;
    width: fit-content;
    height: 70px;
    margin-left: 10px;
    margin-right: 10px;
}

.visited_title {
    font-size: 23px;
    padding-top: 3px;
    width: 140px;
    text-align: left;
    margin-right: 10px;
    color: #164C97;
}

.visited_box>div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.Review {
    right: 0px;    
    display: flex;
    align-items: center;
    width: 80px;
    height: 23px;
    border-radius: 30px;
    padding: 5px;
}

.write {
    background-color: #164C97;
}
.modify{
    background-color: #7c7c7c;
}

.Review>span {
    margin: 0 auto;
    font-size: 12px;
    color: #ffffff;
}

.review_modify {
    background-image: url("../../assets/resource/theme/img/icon/review_modify.png");
}
.review_write{
    background-image: url("../../assets/resource/theme/img/icon/review_write.png");
}

.icon {
    display: inline-block;
    width: 20%;
    background-position: center;
    background-size: 15px 15px;
    background-repeat: no-repeat;
}
.visited_date{
    width: 200px;
    text-align: left;
    font-size: 12px;
}
.visited_addr{
    width: 200px;
    text-align: left;
    font-size: 12px;
    font-weight: 300;
}
</style>
  