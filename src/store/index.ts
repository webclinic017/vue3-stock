import Vue from 'vue';
import Vuex from 'vuex';
import * as user from './module/user';
import * as stock from './module/stock';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    stock,
  },
});
