<template>
    <li>
        <div class="challenge_box">
            <span>{{title}}</span>
            <div>
                <span class="challenge_icon medal_bronze"></span>
                <span class=" medal_next"></span>
                <span class="challenge_icon medal_silver"></span>
                <span class=" medal_next"></span>
                <span class="challenge_icon medal_gold"></span>
                <span class=" medal_next"></span>
                <span class="challenge_icon medal_award"></span>
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
    name: 'challengeList',
    props: {
        title: String,
        // treeIdx: Number,
        // treeName: String,
        // count: Number,
        // weight: String,
        // activeStatus: Boolean,
        // treeImg: String,
        // treeInActiveImg: String,
        // lockStatus: Boolean,
    }
}
</script>
<style scoped>
.challenge_box {
    border: 1px solid #82ACE7;
    border-radius: 10px;
    background-color: #F3F8FE;
    text-align: center;
    width: 350px;
    height: 130px;
    margin: 0 auto;
    margin-top: 20px;
}

.challenge_box>span {
    display: block;
    margin-top: 10px;
    font-size: 20px;
    color: #164C97;
}
.challenge_box>div{

}

.challenge_icon {
    display: inline-block;
    width: 20%;
    background-position: center;
    background-size: 55px 55px;
    background-repeat: no-repeat;
    height: 80px;
}

.medal_bronze {
    background-image: url("/src/assets/resource/theme/img/icon/medal_bronze.png");
}
.medal_silver {
    background-image: url("/src/assets/resource/theme/img/icon/medal_silver.png");
}
.medal_gold {
    background-image: url("/src/assets/resource/theme/img/icon/medal_gold.png");
}
.medal_award {
    background-image: url("/src/assets/resource/theme/img/icon/medal_award.png");
}
.medal_next {
    background-image: url("/src/assets/resource/theme/img/icon/medal_next.png");
    display: inline-block;
    width: 15px;
    background-position: center;
    background-size: 9px 14px;
    background-repeat: no-repeat;
    height: 80px;
}


</style>
  