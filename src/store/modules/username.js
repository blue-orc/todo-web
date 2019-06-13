const state = {
    username: null
};

const mutations = {
    set(state, payload) {
        state[payload.state] = payload.value;
    }
};

const actions = {
    signIn({commit}, username) {
        var payload = {
            state: "username",
            value: username
        }
        commit("set", payload)
    },
    signOut({commit}){
        var payload = {
            state: "username",
            value: null
        }
        commit("set", payload)
    }
};

const getters = {
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
