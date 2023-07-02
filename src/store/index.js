import Vue from "vue";
import Vuex from "vuex";

import PreviewStore from "@/store/modules/PreviewStore";
import AttractionInfoStore from "@/store/modules/AttractionInfoStore";
import UserInfoStore from "@/store/modules/userInfoStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PreviewStore,
    AttractionInfoStore,
    UserInfoStore,
  }
});
