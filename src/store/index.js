import Vue from "vue";
import Vuex from "vuex";

import SideMenuStore from "@/store/modules/SideMenuStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    SideMenuStore,
  }
});
