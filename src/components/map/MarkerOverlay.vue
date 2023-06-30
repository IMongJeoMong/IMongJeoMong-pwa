<template>
    <div class="marker_overlay" ref="overlaydiv">
        <div class="marker_overlay_drage" @click="overlayHeightChange"></div>
        <marker-small-overlay :attInfo="overlayInfo"></marker-small-overlay>
        <div class="tab_menu_box">
            <div v-for="(tab, index) in tabs" :key="index"
                :class="['tab_menu_box_' + tab.name, { active: activeTab === tab.name }]"
                @click="toggleComponent(tab.name)"
                >
                {{ tab.label }}
            </div>
        </div>
        <div v-for="(tab, index) in tabs" :key="index">
            <div v-if="activeTab === tab.name" :ref="`${tab.name}ComponentDiv`">
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
    props: {
      attInfo : Object,  
    },
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
            overlayInfo: Object,
            overlayHeight : false,
        } 
    },
    mountde() {
        this.componentMenuHeight();
    },
    methods: {
        toggleComponent(tab) {
            this.activeTab = this.activeTab === tab ? null : tab;
            this.$nextTick(() => {
                this.componentMenuHeight();
            });

        },
        overlayHeightChange() {
            if (this.overlayHeight) {
                this.$refs.overlaydiv.style.height = "40%";
                this.overlayHeight = false;
            }
            else {
                this.$refs.overlaydiv.style.height = "calc(100% - 25rem)";
                this.overlayHeight = true;
            }
            this.componentMenuHeight();
        },
        componentMenuHeight() {
             // overlaydiv 레퍼런스를 이용해 실제 높이를 픽셀 단위로 구함
            let overlayDivHeight = this.$refs.overlaydiv.offsetHeight;
            console.log(overlayDivHeight)
            // 높이 계싼 수행
            let componentDivHeight = overlayDivHeight - 240;
            console.log(componentDivHeight)
            console.log(this.$refs.componentdiv)
            // componentdiv 레퍼런스의 높이로 설정합니다.
            this.$refs[this.activeTab + 'ComponentDiv'][0].style.height = `${componentDivHeight}px`;
            
        },
    },
    watch: {
        attInfo: {
            immediate: true, //컴포넌트가 생성될 떄도 watch 콜백 함수 호출
            deep : true, //중첩된 객체의 변경까지 감지
            handler(newVal) {
                this.overlayInfo = newVal
            }
        }
    }
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
    height: 40%;
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
    overflow: scroll;
    height: 100%;
}
</style>