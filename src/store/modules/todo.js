import storage from "../../utilities/storage-utility";
import api from "../../utilities/api-utility";
const state = {
    todos: storage.getItemArray("todos")
};

const mutations = {
    set(state, payload) {
        localStorage.setItem(payload.state, JSON.stringify(payload.value));
        state[payload.state] = storage.getItem(payload.state);
    }
};

const actions = {
    async create({dispatch, rootState}, todo) {
        var request = {
            controller: "todo"
        };
        todo.username = rootState.username.username;
        let res = await api.post(request, todo);
        if (res.status === 200){
            dispatch("get")
        }
    },
    async get({commit, rootState}) {
        var request = {
            controller: "todo",
            queryParameters: {username: rootState.username.username}
        };
        let res = await api.get(request)
        var payload = {
            state: "todos",
            value: res.data
        }
        if (res.status === 200 && res.data !== null){
            commit("set", payload)
        }
    },
    async delete({commit, dispatch}, todoId){
        var request = {
            controller: "todo",
            queryParameters: {todoId: todoId}
        };
        let res = await api.del(request)
        var payload = {
            state: "todos",
            value: res.data
        }
        if (res.status === 200 && res.data !== null){
            commit("set", payload)
        }
        dispatch("get")
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
