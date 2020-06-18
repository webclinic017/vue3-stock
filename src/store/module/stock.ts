import Vue from 'vue';
import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex';
import { StockDatum } from '../../../types';
import FirebaseClient from '../../../api/firebase';
Vue.use(Vuex);

export const name = 'stock';

export const namespaced = true;

interface State {
  stockList: StockDatum[];
}
export const state: State = {
  stockList: [],
}

export const getters: GetterTree<State, any> = {

}

export const mutations: MutationTree<State> = {
  setStockList(state, list) {
    state.stockList = list;
  },
  deleteStock(state, symbol) {
    state.stockList = state.stockList.filter((datum) => datum.symbol === symbol);
  },
  addStock(state, datum) {
    state.stockList.push(datum);
  }
}

export const actions: ActionTree<State, any> = {
  async getStockList({ commit }, id: string) {
    const result: any[] = [];
    await new FirebaseClient().getStockDatum(id)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => result.push(doc.data()))
        commit('setStockList', result)
      })

  }
}
