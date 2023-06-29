import Vue from "vue";
import Vuex from "vuex";

import PreviewStore from "@/store/modules/PreviewStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PreviewStore,
  }
});
