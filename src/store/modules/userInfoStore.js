const PreviewStore = {
    namespaced: true,
    state: {
        userInfo: Object,
    },
    getters: {
        getPreviewItem : (state) => {
            return state.previewItem;
        },
    },
    mutations: {
        SET_PREVIEW_ITEM(state, data) {
            state.previewItem = data;
        }
    },
    actions: {
        setItemList({ state }) {
            state.userInfo = {
                
            }
        }
    },
  };
    
  export default PreviewStore;