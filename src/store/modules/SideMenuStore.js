const SideMenuStore = {
    namespaced: true,
    state: {
        selectMenu : 'home',
    },
    getters: {
        getSelectMenu : (state) => {
            return state.selectMenu;
       }
    },
    mutations: {
        SET_SELECT_MENU(state, data) {
            state.selectMenu = data;
        }
    },
    actions: {


    },
  };
    
  export default SideMenuStore;