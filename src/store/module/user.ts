import Vue from 'vue';
import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex';

Vue.use(Vuex);

export const name = 'user';

export const namespaced = true;

interface State {
  user: {
    name: string;
    uid: string;
  };
}
export const state: State = {
  user: {
    name: '',
    uid: ''
  }
}

export const getters: GetterTree<State, any> = {

}

export const mutations: MutationTree<State> = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions: ActionTree<State, any> = {

}
