import Vue from 'vue';
import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex';
import { StockDatum } from '../../../types';

Vue.use(Vuex);

export const name = 'stock';

export const namespaced = true;

interface State {
  stockList: StockDatum[]
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
  deleteStock(state, datum) {
    state.stockList = state.stockList.filter(d => d.symbol === datum.symbol);
  },
  addStock(state, datum) {
    state.stockList.push(datum);
  }
}

export const actions: ActionTree<State, any> = {

}
