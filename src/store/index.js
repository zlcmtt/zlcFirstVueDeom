import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    author: '',
    keepAliveArr: [],
  },
  mutations: {
    setAuthor(state, data) {
      state.author = data;
    },
    clearKeepAlive(state, data) {
      const keepAliveArr = new Set(state.keepAliveArr);
      keepAliveArr.delete(data);
      state.keepAliveArr = Array.from(keepAliveArr);
    },
    addKeepAlive(state, data) {
      const keepAliveArr = new Set(state.keepAliveArr);
      keepAliveArr.add(data);
      state.keepAliveArr = Array.from(keepAliveArr);
    },
  },
  actions: {
  },
  modules: {
  },
});
