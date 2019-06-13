import Vue from 'vue'
import Vuex from 'vuex'

import Username from './modules/username'
import Todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  modules: {
    username: Username,
    todo: Todo
  }
});
