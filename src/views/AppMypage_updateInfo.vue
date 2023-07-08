<template>
    <div class="version_container">
        <div>
            <div class="version_login"></div>
            <div class="version_box">
                앱 버전 정보 : {{ version }} V
            </div>      
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            version : "1.0"
    }
   }

}
</script>
<style scoped>

    .version_container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
    }

    .version_login{
        width: 100%;
        height: 30rem;
        background-image: url("/src/assets/logo.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 auto;
    }

    .version_box{
        margin: 0 auto 0 auto;
        width: 100%;
        font-size: 20px;
        color:#164C97;
    }


    
</style>