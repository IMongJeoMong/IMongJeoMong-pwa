<template>
    <div class="mapbox">
        <div class="mapheader">
            <div class="searchbox">
                <div class="searchcontainer">
                    <div class="searchicon"></div>
                    <input class="searchinput" placeholder="장소를 검색해주세요" v-model="keyword"  v-on:keyup.enter="keywordSerch()">
                </div>
                <div class="listbtn"><div @click="listView()"></div></div>
            </div>
            <div class="filterbox">
                <div class="car" @click="filterActive('car')" ref="carContainer">
                    <div class="icon"></div>
                    <div>주차장</div>
                </div>
                <div class="bicycle" @click="filterActive('bicycle')" ref="bicycleContainer">
                    <div class="icon"></div>
                    <div>타슈</div>
                </div>
            </div>
        </div>
        <div class="mylocationbox" @click="loadMap()"></div>
        <marker-small-overlay v-if="overlayS" class="samll_overlay" :attInfo="overlayInfo"  v-click-outside="onClickOutside" @overlayOpen="overlayChange"></marker-small-overlay>
        <marker-overlay  v-if="overlay" class="default_overlay" :attInfo="overlayInfo" v-click-outside="onClickOutside2"></marker-overlay>

        <div id="map" style="width:100%; height:100%; margin:0px auto;"></div>
        <the-footer></the-footer>
    </div>
</template>
<script>
import TheFooter from "@/components/inc/footer/TheFooter";
import MarkerSmallOverlay from "@/components/map/MarkerSmallOverlay";
import MarkerOverlay from "@/components/map/MarkerOverlay";
import {directive as clickOutside} from 'v-click-outside'
import { mapGetters } from "vuex";

export default {
    //clickOutside 함수 선언!
    directives: {
        clickOutside
    },

    data(){
        return {
            mylocation: false,
            mapLevel: 5,
            carActive: false,
            bicycleActive: false,
            bicycleStyle: {
                color: "#FDAE02",
                activeColor: "white",
                backColor: "white",
                activebackColor: "#FDAE02",
            },
            carStyle: {
                color: "#33B122",
                activeColor: "white",
                backColor: "white",
                activebackColor: "#33B122",
            },
            keyword : "",
            mypositionList: [
                {
                    name: "현재 위치",
                    lat: null,
                    lng: null,
                }
            ],
            bicycleList: [
                {
                    id: 142,
                    lat: 36.35213,
                    lng: 127.346011,
                    address: "유성구 봉명동 328-22",
                },

            ],
            carList: [
                {
                    id: 605,
                    name: "청주해장국[대전 유성 16호점]",
                    lat: 36.35551841647418,
                    lng: 127.34520542527122,
                    address: "대전 유성구 봉명동 538-16",
                },
            ],

            //오버레이
            overlay: false,
            overlayS: false,
            overlayInfo : null,

            //마커 위치정보들이 저장될 공간!
            mypositionMarkers: [],
            attractionMarkers: [],
            bicycleMarkers: [],
            carMarkers: [],
        }
    },
    components : {
        TheFooter,
        MarkerSmallOverlay,
        MarkerOverlay,
    },
    computed: {
        ...mapGetters("AttractionInfoStore", ["attractionList"]),  
    },
    async created() {

        // 현재 위치 가져오기
        this.mylocation = await this.geofind();

        //VUE 카카오맵 동적
        if (window.kakao && window.kakao.maps) {
            //카카오 객체가 있고, 카카오 맵그릴 준비가 되어 있다면 맵 실행
            if (this.map) {
                this.map.setMap(null);
            }
            this.loadMap();
        } else {
            //없다면 카카오 스크립트 추가후 맵 실행
            this.loadKakaoScript();
        }

        await Promise.resolve(); 

        //VUE-X 초기 값 세팅 
        let mapdata = {
            lat: this.mypositionList[0].lat,
            lng: this.mypositionList[0].lng,
            keyword: this.keyword,
        }
        this.$store.dispatch('AttractionInfoStore/setAttractionList', mapdata )
    },
    methods: {

        async keywordSerch() {
            let mapdata = {
                lat: this.mypositionList[0].lat,
                lng: this.mypositionList[0].lng,
                keyword: this.keyword
            }
            this.$store.dispatch('AttractionInfoStore/setAttractionList', mapdata);
        },
        overlayChange() {
            this.overlayS = false;  
            this.overlay = true;
        },

        onClickOutside() {
            this.overlayS = false;
        },

        onClickOutside2() {
            this.overlay = false;  
        },

        async filterActive(type) {
            let elementRef = this.$refs[`${type}Container`];
            let isActive = !this[`${type}Active`];
            let isStyle = this[`${type}Style`];
            let newBackgroundColor = isActive ? isStyle.activebackColor : isStyle.backColor;
            let newColor = isActive ? isStyle.activeColor : isStyle.color;
            let newIcon = isActive ? `${type}SelectIcon.png` : `${type}Icon.png`;

            this[`${type}Active`] = isActive;
            elementRef.style.backgroundColor = newBackgroundColor;
            elementRef.style.color = newColor;
            elementRef.childNodes[0].style.backgroundImage = `url(${require(`/src/assets/resource/theme/img/icon/${newIcon}`)})`;
       
            await this.changeMap(this.mylocation);
            this.overlayS = true;
        },
        
        //현재 위치 가져오기
        async geofind() {
            if(!("geolocation" in navigator)) {
                this.textContent = 'Geolocation is not available.';
                return false;
            }
            return new Promise((resolve, reject)=> {
                // get position
                navigator.geolocation.getCurrentPosition(pos => {
                    this.mypositionList[0].lat = pos.coords.latitude;
                    this.mypositionList[0].lng = pos.coords.longitude;
                    resolve(true);
                }, err => {
                    this.textContent = err.message;
                    reject(false);
                })    
            })
        },

        //카카오 Script가 없다면 ..
        loadKakaoScript() {
            const script = document.createElement("script");
            let kakaoKey = "19b4f102b8b222489a051ece56dc8f58";
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=" + kakaoKey;

            //스크립트 로드가 끝나면 지도를 실행될 준비가 되어 있다면 지도가 실행되도록 구현
            script.addEventListener("load", () => {
                /* global kakao */
                kakao.maps.load(this.loadMap);
            });
            document.head.appendChild(script); // html>head 안에 스크립트 소스를 추가
        },
        //맵 로드 (변경할예정!)
        loadMap() {

            var container = document.getElementById("map");
            let center = null;
            
            //보여지는 위치 변경하기위해 초기값 세팅
            if (this.mylocation) {
                center = new kakao.maps.LatLng(this.mypositionList[0].lat, this.mypositionList[0].lng);
            }
            else {
                center = new kakao.maps.LatLng(33.450701, 126.570667);
            }
            //만약에 이미 this.map이 있으면 이동해
            if (this.map) {
                this.map.panTo(center);
            }
        
            var options = {
                //지도 생성 옵션
                center: center,
                level: this.mapLevel, // 지도의 레벨(확대, 축소 정도)
            };

            //지도가 없을때만 로드해
            if (!this.map) {
                this.map = new kakao.maps.Map(container, options);
            }

            //현재 내위치
            //this.changeMap(this.mylocation);

        },

        //맵의 마커 초기화
        clearMarker(markerList) {
            for(let marker of markerList) {
                marker.setMap(null);
            }
        },

        //일정이 바뀔때 맵을 변경 (현재는 위치가 잇다면 - 변경할예정)
        async changeMap(mylocation) {

            //마커들이 있으면 초기화
            if (this.mypositionMarkers) this.clearMarker(this.mypositionMarkers)
            if (this.attractionMarkers) this.clearMarker(this.attractionMarkers)
            if (this.bicycleMarkers) this.clearMarker(this.bicycleMarkers)
            if (this.carMarkers) this.clearMarker(this.carMarkers)

            this.mypositionMarkers = []
            this.attractionMarkers = []
            this.bicycleMarkers = []
            this.carMarkers = []

            
            this.setMarker(mylocation, "attraction");
            if (this.bicycleActive) this.setMarker(mylocation, "bicycle");
            if (this.carActive) this.setMarker(mylocation, "car");
            this.setMarker(mylocation, "myposition");

        },

        async setMarker(mylocation, type){

            if (mylocation) {
                //이미지 설정
                let imageSrc = await require(`/src/assets/resource/theme/img/icon/map_${type}.png`);
                
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = await new kakao.maps.Size(58, 60);

                // 마커 이미지를 생성합니다
                var markerImage = await new kakao.maps.MarkerImage(imageSrc, imageSize);

                //포지션 추가
                var positions = [];
                for (var mapP of this[`${type}List`]) {
                    positions.push({
                        name: mapP.name,
                        latlng: new kakao.maps.LatLng(mapP.lat, mapP.lng),
                        contentId: mapP.id,
                        description : mapP.description,
                        imagePath : mapP.imagePath,
                        contentTypeId : mapP.contentTypeId,
                    });                    
                }
                console.log(positions)

                for (var i = 0; i < positions.length; i++) {
                    // 마커를 생성합니다
                    let marker = await new kakao.maps.Marker({
                        map: this.map,
                        position: positions[i].latlng,
                        title: positions[i].name,
                        image: markerImage,
                    });

                    marker.info = positions[i];
                    
                    await this[`${type}Markers`].push(marker);
                    //관광지 일때만 click해서 오버레이 열리는 이벤트 발생
                    if (type === "attraction") { 
                        kakao.maps.event.addListener(marker, 'click', () => {
                            this.openOverlay(marker.info);
                        });
                    }

                }
                if (this.keyword != "") {
                    let moveLatLon = new kakao.maps.LatLng(this.attractionList[0].lat, this.attractionList[0].lng);
                    this.map.panTo(moveLatLon);    
                } else {
                    let moveLatLon = new kakao.maps.LatLng(this.mypositionList[0].lat, this.mypositionList[0].lng);
                    this.map.panTo(moveLatLon);
                }
            }
        },
        //리스트 보는화면으로
        async listView() {
            console.log("실행되나요?");
            this.searchListActivate = await true;
            this.$router.push({ name: "MapList" });
        },

        openOverlay(markerInfo) {
            console.log("test", markerInfo);
            this.overlayInfo = markerInfo;
            this.overlayS = true;
        }
        
    },
    watch: {
        attractionList() {
            this.changeMap(this.mylocation);
        }
    }
}
</script>

<style>

    .samll_overlay{
        position: absolute;
        bottom: 110px;
        z-index: 20;
    }

    .default_overlay{
        position: absolute;
        z-index: 20;
        bottom: 110px;
    }

    .mapbox{ z-index:1px; position: fixed; top:0px; width: 100%; height: 100%; }

    #map { position: relative; }

    .mapheader{ position:absolute; z-index:10; width:100%; top:20px; }

    .searchbox{ display: flex; height:40px; justify-content: space-around; }

    .searchcontainer{ width:75%; background-color: white; border: 3px solid #164C97; border-radius: 8px;}

    .searchicon { 
        width: 10%; height:32px; 
        background-image: url("/src/assets/resource/theme/img/icon/searchIcon.png");
        background-position: center;
        background-size: cover; 
        display:inline-block; 
        margin:2px;}
    
    .searchinput{ width: 85%; float:right; height: 30px; margin:2px; border:none; font-size:16px; overflow:hidden;}

    .listbtn{ width:10%; background-color: white; border: 3px solid #164C97; border-radius: 8px; }

    .listbtn > div {
        width:70%; height:70%;
        margin:15%;
        background-image: url("/src/assets/resource/theme/img/icon/searchListIcon.png");
        background-position: center;
        background-size: cover;
    }

    
    .filterbox{
        width: 100%;
        margin-top:5px;
        display: flex;
        justify-content: start;
        margin-left:calc(5% - 10px);
        
    }

    .filterbox > div {
        height:30px;
        line-height:30px;
        width:auto;
        margin:5px;
        border-radius: 5px;
        font-weight: bold;
        box-shadow: 3px 3px 4px rgba(99, 99, 99, 0.453);
    }

    .car{
        background-color: white;
        color:#33B122;
        border:2px solid #33B122;
    }

    .bicycle{
        background-color: white;
        color:#FDAE02;
        border:2px solid #FDAE02;
    }

    .filterbox > div > div {
        display:inline-block;
        margin-right:4px;
    }

    .icon{
        width: 30px; height:18px;
        background-position: left 5px top 3px; background-size: 20px 15px; background-repeat: no-repeat;
    }
    .car > .icon{ background-image: url("/src/assets/resource/theme/img/icon/carIcon.png"); }
    .bicycle > .icon{   background-image: url("/src/assets/resource/theme/img/icon/bicycleIcon.png");}
    
    .mylocationbox{
        position: absolute;
        z-index: 5;
        width: 50px;
        height: 50px;
        bottom: 150px;
        right: 10%;
        background-color: white;
        border-radius: 100%;
        box-shadow: 3px 3px 3px rgba(99, 99, 99, 0.296);
        background-image: url("/src/assets/resource/theme/img/icon/locationIcon.png");
        background-position: left 8px top 8px;
        background-size: 35px 35px;
        background-repeat: no-repeat
    }

</style>