import Vue from 'vue';
import Vuex, { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { IRootState, IUserState } from '@types';

Vue.use(Vuex);

const state: IUserState = {
  user: {
    name: '',
    uid: ''
  }
}

const getters: GetterTree<IUserState, IRootState> = {

}

const mutations: MutationTree<IUserState> = {
  setUser(state, user) {
    state.user = user
  }
}

const actions: ActionTree<IUserState, IRootState> = {

}

const user: Module<IUserState, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

export default user;
