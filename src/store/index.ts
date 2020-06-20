import Vue from 'vue';
import Vuex, { GetterTree, MutationTree, ActionTree, ModuleTree } from 'vuex';
import user from '@/store/module/user';
import stock from '@/store/module/stock';
import { IRootState } from '@types';

Vue.use(Vuex);

export const state: IRootState = {
  token: ''
}

export const getters: GetterTree<IRootState, IRootState> = {

}

export const mutations: MutationTree<IRootState> = {

}

export const actions: ActionTree<IRootState, IRootState> = {

}

export const modules: ModuleTree<IRootState> = {
  user,
  stock,
}

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
})
