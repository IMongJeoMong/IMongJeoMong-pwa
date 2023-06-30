const AttractionInfoStore = {
    namespaced: true,
    state: {
        attInfoList : [],
    },
    getters: {
        getattInfoList : (state) => {
            return state.attInfoList;
       }
    },
    mutations: {
        SET_ATTINFO_LIST(state, data) {
            state.attInfoList = data;
        }
    },
    actions: {

    },
  };
    
  export default AttractionInfoStore;