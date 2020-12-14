const state = {
    MobileMenu: false,
};
const getters = {
    IsMobileMenu: (state) => {
        return !!state.MobileMenu;
    },
};
const actions = {
    ShowHideMenu: ({commit}, state) => {
        commit('ShowHideMenu');
    },
};
const mutations = {
    ShowHideMenu: (state) => {
        state.MobileMenu = !state.MobileMenu;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};