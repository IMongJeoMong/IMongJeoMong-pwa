import tokenHttp from "@/api/tokenHttp";

const PreviewStore = {
    namespaced: true,
    state: {
        itemList: [],
        mongList: [],
        myMongList: [],
        previewItem: null,
        previewbackground : null,
    },
    getters: {
        getPreviewItem : (state) => {
            return state.previewItem;
        },
        getPriviewBackground: (state) => {
            return state.previewbackground;
        },
        itemList: (state) => {
            return state.itemList;
        },
        mongList: (state) => {
            return state.mongList;
        },
        myMongList: (state) => {
            return state.myMongList;
        }

    },
    mutations: {
        SET_PREVIEW_ITEM(state, data) {
            state.previewItem = data;
        },
        SET_PREVIEW_BACKGROUND(state, data) {
            state.previewbackground = data;
        },
        SET_ITEM_LIsT(state, data) {
            state.itemList = data;
        }
    },
    actions: {
        setItemList({ state }) {
            tokenHttp.get("/item/all-own/list" )
            .then((res) => {
                state.itemList = res.data.data;
            })

        },
        setMongList({ state }) {
            
        tokenHttp.get("mong/list")
           .then((res)=> {
                console.log("전체 몽 ", res.data.data)
                state.mongList = res.data.data;
           })

        tokenHttp.get("mong/own/list")
           .then((res) =>{
            console.log("나의 몽 ", res.data.data)
            state.myMongList = res.data.data;
           })
        },

      
    },
  };
    
  export default PreviewStore;