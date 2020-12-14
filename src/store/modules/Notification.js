const state = {
    Showing: false
};
const getters = {
    IsShowing: (state) => {
        return !!state.Showing;
    },
};
const actions = {
    ShowNotification: ({commit}, state) => {
        commit('ShowNotification');
    },
};
const mutations = {
    ShowNotification: (state) => {
        state.Showing = true;

        setTimeout(() => {
            state.Showing = false
        }, 5000);

    }
};

export default {
    state,
    getters,
    actions,
    mutations
};