const PreviewStore = {
    namespaced: true,
    state: {
        previewItem : null,
    },
    getters: {
        getPreviewItem : (state) => {
            return state.previewItem;
       }
    },
    mutations: {
        SET_PREVIEW_ITEM(state, data) {
            state.previewItem = data;
        }
    },
    actions: {


    },
  };
    
  export default PreviewStore;