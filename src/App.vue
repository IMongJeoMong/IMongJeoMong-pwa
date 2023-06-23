<template>
  <div id="app">
    <router-view/>
    <SideView class="sideComponent"></SideView>
  </div>
</template>
<script>

import SideView from '@/views/SideView.vue'
import { mapGetters } from 'vuex';
import router from './router';

export default {
  components: {
   SideView, 
  }, 
  computed: {
    ...mapGetters("SideMenuStore", ['getSelectMenu']),
  },
  watch: {
    getSelectMenu(newType) {
      this.routerPushLogic(newType);
    }
  },
  methods: {
    routerPushLogic(newMenu) {
      router.push({ name: newMenu });
    }
  }
}
</script>

<style>
  #app{
    position:fixed;
    left:0px;
    text-align:center;
    width:100%;
    height:100%;
  }
</style>
