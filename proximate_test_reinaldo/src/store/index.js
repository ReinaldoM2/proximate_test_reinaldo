import { createStore } from 'vuex'
export default createStore({
  state: {
    token: null
  },
  getters: {
    getToken(){
      let token = localStorage.getItem(`token`);
      return token;
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    saveToken({commit},token) {
      commit(`setToken`, token);
      localStorage.setItem(`token`,token);
    },
    prueba({commit}) {
      commit(`setToken`,null);
      localStorage.removeItem(`token`);
    }
  },
  modules: {
  }
})
