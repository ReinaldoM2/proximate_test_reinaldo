import { createStore } from 'vuex'
export default createStore({
  state: {
    token: null
  },
  getters: {
    getToken(){
      let token = localStorage.getItem(`token`);
      return token;
    },
    getMenu(){
      let menu = localStorage.getItem(`menu`);
      return JSON.parse(menu);
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setMenu(state, menu) {
      state.menu = menu
    }
  },
  actions: {
    saveToken({commit},token) {
      commit(`setToken`, token);
      localStorage.setItem(`token`,token);
    },
    saveMenu({commit},menu) {
      commit(`setMenu`,null);
      localStorage.setItem(`menu`,menu);
    }
  },
  modules: {
  }
})
