<template>
    <div class="main-container">
        <div v-for="(blog, index) in getNaverBlogList" :key="index" class="blog-container">
            <a :href="blog.link" target="_blank">
                <span class="bloggername">{{ blog.bloggername }}</span>
                
                <div class="content-title" v-html="blog.title"></div>
                <div class="content-text" v-html="blog.description"></div>
                <span class="bloggername">{{ blog.postdate }}</span>
            </a>
        </div>
    </div>
</template>
<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            naverBlogList: null,
        }
    },
    computed:{
         ...mapGetters("ReviewStore", ["getNaverBlogList"])
    },
}
</script>
<style scoped>

.content-title {
  font-family: 'CookieRun-Regular';
  color: #164C97;
  font-size: 15px;
  margin-top: 5px;
}
.content-text{
    font-family: 'CookieRun-Regular';
    color: #515151;
    font-size: 12px;
    margin-top: 5px;
    margin-bottom : 5px;
}

.bloggername {
  font-family: 'CookieRun-Regular';
  color: #aaaaaa;
  font-size: 10px;
  margin-right: 10px;
}
.main-container {
  margin-top: 5px;
}
.blog-container {
  margin: 0 auto;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.812);
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 15px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  /* border: 2px solid #164C97; */
  text-align: left;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(16, 16, 16, 0.266);
}
.blog-container:hover {
  background-color: #D9D9D9;
  transition: 0.2s;
  cursor: pointer;
}
.blog-container:active {
  transform: scale(0.9);
  transition: 0.2s;
}
</style>