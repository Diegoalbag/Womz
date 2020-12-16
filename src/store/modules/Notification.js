const state = {
    Showingadded: false,
    ShowingSelect: false,
};
const getters = {
    IsShowingAdded: (state) => {
        return !!state.Showingadded;
    },
    IsShowingSelect: (state) => {
        return !!state.ShowingSelect;
    },
};
const actions = {
    ShowNotificationadded: ({commit}, state) => {
        commit('ShowNotificationadded');
    },
    ShowNotificationSelect: ({commit}, state) => {
        commit('ShowNotificationSelect');
    },

};
const mutations = {
    ShowNotificationadded: (state) => {
        state.Showingadded = true;
        setTimeout(() => {
            state.Showingadded = false
        }, 2000);

    },
    ShowNotificationSelect: (state) => {
        state.ShowingSelect = true;
        setTimeout(() => {
            state.ShowingSelect = false
        }, 2000);

    }
};

export default {
    state,
    getters,
    actions,
    mutations
};