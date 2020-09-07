import Vue from 'vue';
import Vuex, { MutationTree, ActionTree, GetterTree, Module } from 'vuex';
import { IRootState, IStockState } from '@/@types';
import FirebaseClient from '@/api/firebase';
import IexCloudClient from '@/api/IexCloud';

Vue.use(Vuex);

const state: IStockState = {
  stockList: [],
  symbolList: [],
}


const getters: GetterTree<IStockState, IRootState> = {

}

const mutations: MutationTree<IStockState> = {
  setStockList(state, list) {
    state.stockList = list;
  },
  deleteStock(state, symbol) {
    state.stockList = state.stockList.filter((datum) => datum.symbol !== symbol);
  },
  addStock(state, datum) {
    state.stockList.push(datum);
  },
  setSymbolList(state, list) {
    state.symbolList = list;
  }
}

const actions: ActionTree<IStockState, IRootState> = {
  async getStockList({ commit }, id: string) {
    const result: { [key: string]: string | number }[] = [];
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

const stock: Module<IStockState, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

export default stock;
