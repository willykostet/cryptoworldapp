import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curRub: 0,
    btcCur: 0,
  },
  mutations: {
    SET_CURRUB: (state, cur) => {
      state.curRub = cur;
    },
    SET_BTC: (state, cur) => {
      state.btcCur = cur;
    },
  },
  actions: {},
  getters: {
    GET_CURRUB(state) {
      return state.curRub;
    },
    GET_BTC(state) {
      return state.btcCur;
    },
  },
});
