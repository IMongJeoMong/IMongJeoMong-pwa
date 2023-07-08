import Vue from "vue";
import Vuex from "vuex";

import PreviewStore from "@/store/modules/PreviewStore";
import AttractionInfoStore from "@/store/modules/AttractionInfoStore";
import UserInfoStore from "@/store/modules/UserInfoStore";
import ReviewStore from "@/store/modules/ReviewStore";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({

  plugins: [createPersistedState()],

  modules: {
    PreviewStore,
    AttractionInfoStore,
    UserInfoStore,
    ReviewStore,
  }
});
