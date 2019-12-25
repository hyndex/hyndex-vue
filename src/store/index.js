import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    username:'',
    role:'',
    viewed:'',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setRole(state, role) {
      state.role = role;
    },
    setViewed(state, viewed) {
      state.viewed = viewed;
    }
  },
  actions: {
  },
  modules: {
  }
})
