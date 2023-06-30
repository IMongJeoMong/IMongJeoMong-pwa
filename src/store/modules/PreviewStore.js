const PreviewStore = {
    namespaced: true,
    state: {
        itemList: [],
        holdItemList: [],
        previewItem : null,
    },
    getters: {
        getPreviewItem : (state) => {
            return state.previewItem;
        },
        itemList: (state) => {
            return state.itemList;
        },
        holdItemList: (state) => {
            return state.holdItemList;
        }
    },
    mutations: {
        SET_PREVIEW_ITEM(state, data) {
            state.previewItem = data;
        }
    },
    actions: {
        setItemList({ state }) {
            console.log("헤헤")
            state.itemList = [
                {
                    itemId: 1,
                    name: "balloon",
                    price: 1000,
                },
                {
                    itemId: 2,
                    name: "heart",
                    price: 1000,
                },
                {
                    itemId: 3,
                    name: "lollipop",
                    price: 1000,
                },
                {
                    itemId: 4,
                    name: "monocle",
                    price: 1000,
                },
                {
                    itemId: 5,
                    name: "sunglasses1",
                    price: 1000,
                },
                {
                    itemId: 6,
                    name: "sunglasses2",
                    price: 1000,
                }
            ];

            state.holdItemList = [
                {
                    itemId : 3,
                    name: "lollipop",
                    price: 1000,
                },
                {
                    itemId : 4,
                    name: "monocle",
                    price: 1000,
                },
                {
                    itemId : 5,
                    name: "sunglasses1",
                    price: 1000,
                },
            ]

            for (let i = 0; i < state.itemList.length; i++) {
                let holdState = state.holdItemList.some(holdItem => holdItem.itemId === state.itemList[i].itemId)
                state.itemList[i]["holdState"] = holdState;
            }
            
        },
    },
  };
    
  export default PreviewStore;