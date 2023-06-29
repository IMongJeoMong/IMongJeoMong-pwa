<template>
    <div class="marker_overlay">
        <div class="marker_overlay_drage"></div>
        <marker-small-overlay></marker-small-overlay>
        <div class="tab_menu_box">
            <div v-for="(tab, index) in tabs" :key="index"
                :class="['tab_menu_box_' + tab.name, { active: activeTab === tab.name }]"
                @click="toggleComponent(tab.name)"
                >
                {{ tab.label }}
            </div>
        </div>
        <div v-for="(tab, index) in tabs" :key="index">
            <div v-if="activeTab === tab.name">
                <component class="tab_menu_component" :is="tab.component"></component>
            </div>
        </div>
    </div>
</template>
<script>
import MarkerSmallOverlay from './MarkerSmallOverlay.vue';
import HomeComponent from './overlaycomponent/HomeComponent.vue';
import ReviewComponent from './overlaycomponent/ReviewComponent.vue';
import PictureComponent from './overlaycomponent/PictureComponent.vue';
import BlogComponent from './overlaycomponent/BlogComponent.vue';


export default {
 
    components: {
        MarkerSmallOverlay,
        HomeComponent,
        ReviewComponent,
        PictureComponent,
        BlogComponent,
    },
    data() {
        return {
            activeTab: 'home',
            tabs: [
                { name: 'home', label: '홈', component: 'home-component' },
                { name: 'review', label: '리뷰', component: 'review-component' },
                { name: 'picture', label: '사진', component: 'picture-component' },
                { name: 'blog', label: '블로그', component: 'blog-component' },
            ],
            overlayHeight: 300, 
            startHeight: 0,
            startY: 0,
        } 
    },
    methods: {
        toggleComponent(tab) {
            this.activeTab = this.activeTab === tab ? null : tab;
        },
    },
}
</script>
<style>
.marker_overlay_drage{
    cursor: ns-resize;
}

.marker_overlay{
    position: relative;
    left:2.5%;
    width: 95%;
    background-color: white;
    border-radius: 10px;
}

.marker_overlay_drage{
    margin: 10px auto;
    width: 30%;
    height: 10px;
    background-color:rgba(95, 95, 95, 0.784);
    border-radius: 10px;
}

.tab_menu_box {
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    font-size: 17px;
    color: #164C97;
}

.tab_menu_box > div {
    width: 15%;
    padding-bottom:5px;
}

.active {
    border-bottom: 1px solid #164C97;
}

.tab_menu_component{
    /* border: 1px solid black; */
    margin: 0 15px;
}
</style>