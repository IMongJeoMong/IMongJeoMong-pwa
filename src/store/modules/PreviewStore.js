const PreviewStore = {
    namespaced: true,
    state: {
        itemList: [],
        holdItemList: [],
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
        holdItemList: (state) => {
            return state.holdItemList;
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
    },
    actions: {
        setItemList({ state }) {
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
        setMongList({ state }){
            state.mongList =[ {
                "id": 1,
                "name": "a",
                "level": 0,
                "imagePath": "/a.jpg",
                "description": null
            },
            {
                "id": 2,
                "name": "b",
                "level": 0,
                "imagePath": "/b.jpg",
                "description": null
            }],
            state.myMongList = [
                {
                    "id": 1,
                    "mong": {
                        "id": 1,
                        "name": "a",
                        "level": 0,
                        "imagePath": "/a.jpg",
                        "description": null
                    },
                    "memberId": 1,
                    "level": 0,
                    "exp": 400
                },
                {
                    "id": 2,
                    "mong": {
                        "id": 2,
                        "name": "b",
                        "level": 0,
                        "imagePath": "/b.jpg",
                        "description": null
                    },
                    "memberId": 1,
                    "level": 0,
                    "exp": 0
                }
            ]
        },
    },
  };
    
  export default PreviewStore;