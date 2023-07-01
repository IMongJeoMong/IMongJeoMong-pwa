<template>
    <div class="exploration_board">
        <div class="exploration_text">
            <b>{{ findPlace.name  }}</b> 이(가)<br>발견되었어요!
        </div>
        <div class="exploration_btns">
           <div class="exploration_btn_cancel">취소</div>
           <div class="exploration_btn_okey">방문</div>
        </div>
    </div>
</template>
<script>



export default {
    data() {
        return {
            findPlace: {
                name: "성심당",         
            }
        }
    },
}
</script>
<style scoped>
    .exploration_board{
        background-color: white;
        position: absolute;
        z-index:20;
        top:30%;
        left:10%;
        width:80%;
        height:20%;
        border-radius: 10px;
        border:3px solid #164C97;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
    }

    .exploration_text{
        width: 95%;
        height: 60%;
        padding: calc(10% - 2rem) 0;
        margin: 0px auto;
        /* border: 1px solid black; */
        font-size: 29px;
        color: #164C97;
    }

    .exploration_btns{
        margin: 0 auto;
        width: 95%;
        height: 40%;
        display: flex;
        justify-content: space-around;
        
    }

    .exploration_btns > div {
        width: 35%;
        height: 45px;
        line-height: 45px;
        font-size: 25px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
        /* border: 2px solid black; */
        
    }

    .exploration_btn_cancel{
        background-color: #D9D9D9;
        color: #164C97;
    }

    .exploration_btn_okey{
        color: white;
        border:2px solid #164C97;
        background-color: #164C97;
    }

    /* .explorationlist{
        height: 55px;
        background-color: white;
        border:4px solid #164C97;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        line-height: 55px;
        color: #144284;
        font-weight:500;
    }
    
    .explorationlist > div {
        height:35px;
        padding-bottom:1px;
        font-size: 30px;
        font-weight: bold;
    }

    .active{
        border-bottom: 2px solid #164C97;  
    }

    .today_exploration{
        margin : 3%;
        width: 94%;
        height: calc(100% - 6rem);
    } */

</style>