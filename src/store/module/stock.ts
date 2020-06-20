import Vue from 'vue';
import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex';
import { StockDatum, IexSymbol } from '../../../@types';
import FirebaseClient from '../../../api/firebase';
import IexCloudClient from '../../../api/IexCloud';

Vue.use(Vuex);

export const name = 'stock';

export const namespaced = true;

interface State {
  stockList: StockDatum[];
  symbolList: IexSymbol[];
}
export const state: State = {
  stockList: [],
  symbolList: [],
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
  },
  setSymbolList(state, list) {
    state.symbolList = list;
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
  },
  async getSymbolList({ commit }, token: string) {
    const result = await new IexCloudClient(token).getSymbolList();
    commit('setSymbolList', result.data)
  }
}
