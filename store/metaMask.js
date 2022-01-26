const state = () => ({
    metaMaskLoggedIn: false,
    metaMask: {
        account: null,
    },
})

const getters = {
    metaMask(state) {
        return state.metaMask;
    },
    metaMaskLoggedIn(state) {
        return state.metaMaskLoggedIn;
    },

}

const mutations = {
    setMetaMaskLoggedIn(state, payload) {
        state.metaMaskLoggedIn = payload;
    },
    setMetaMaskDetails(state, payload) {
        state.metaMask = payload;
    },
}

const actions = {
    setMetaMaskDetails({ commit }, payload) {
        commit('setMetaMaskDetails', payload);
    },
    setMetaMaskLoggedIn({ commit }, payload) {
        commit('setMetaMaskLoggedIn', payload);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}