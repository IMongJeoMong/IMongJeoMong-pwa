<template>
    <div class="mapBox">
        <div class="mapSide">
            <div class="searchMemu">
                <div class="searchBox">검색</div>
                <div class="listBtn">리스트</div>
            </div>
            <div class="filterMemu">
                <div>주차장</div>
                <div>타다</div>
            </div>
        </div>
        <div id="map" style="width:100%; height:100%; margin:0px auto;"></div>

        <the-footer></the-footer>

    </div>
</template>
<script>
import TheFooter from "@/components/inc/footer/TheFooter";

export default {
    
    components : {
        TheFooter,
    },
    mounted() {
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
    },
    methods: {
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
        //맵 로드
        loadMap() {

            var container = document.getElementById("map");
            let center = null;

            if (this.mapviewChange) {
                //현재 위치 유지해
                center = this.map.getCenter();
            } else {
                //보여지는 위치 변경하기위해 초기값 세팅
                center = new kakao.maps.LatLng(33.450701, 126.570667);
                //만약에 이미 this.map이 있으면 이동해
                if (this.map) {
                    this.map.panTo(center);
                }
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

        },
        //맵의 마커 초기화
        clearMarker() {
            for(let marker of this.markers) {
                marker.setMap(null);
            }
        },
    }
}
</script>
<style>
    .mapBox{
        z-index:1px;
        position: fixed;
        top:0px;
        width: 100%;
        height: 100%;
    }

    #id {
        position: relative;
    }

    .mapSide{
        position:absolute;
        z-index:10;
        width:100%;
        top:20px;
    }

    .searchMemu{
       display: flex;
       justify-content: space-around;
    }

    .filterMemu{
        width: 100%;
        display: flex;
        justify-content: start;
        margin-left:calc(5% - 5px)
    }

    .searchBox{
        width:60%;
        background-color: white;
        border: 1px solid black;
    }

    .listBtn{
        width:20%;
        background-color: white;
        border: 1px solid black;
    }

    .filterMemu > div{
        margin:5px;
        width:15%;
        background-color: white;
        border: 1px solid black;
    }
    
</style>