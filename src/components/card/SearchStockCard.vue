<template>
  <v-card>
    <v-card-title>Find Symbol</v-card-title>
    <v-card-text>
      <v-autocomplete
        autofocus
        v-model="searchSymbol"
        :items="symbolList"
        item-text="name"
        item-value="symbol"
      >
        <template v-slot:selection="data">
          <v-list-item-content>
            <v-list-item-title>{{data.item.name}}</v-list-item-title>
            <v-list-item-subtitle>{{data.item.symbol}}</v-list-item-subtitle>
          </v-list-item-content>
        </template>
        <template v-slot:item="data">
          <v-list-item-content>
            <v-list-item-title>{{data.item.name}}</v-list-item-title>
            <v-list-item-subtitle>{{data.item.symbol}}</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-autocomplete>
      <v-text-field v-model="holdings" label="보유수량" suffix="주"></v-text-field>
    </v-card-text>
    <v-card-text class="text-right">
      <v-btn class="mx-2" depressed color="primary" @click="addStock">추가</v-btn>
      <v-btn class="mx-2" depressed @click="$emit('close')">닫기</v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { StockDatum } from '@/@types';
import IexCloudClient from '@/api/IexCloud';
@Component({})
export default class SearchStockCard extends Vue {
  private searchSymbol = '';

  private holdings = 1;

  get symbolList() {
    return this.$store.state.stock.symbolList;
  }

  beforeMount() {
    if (this.symbolList.length === 0) {
      this.$store.dispatch(
        'stock/getSymbolList',
        process.env.VUE_APP_IEX_API_TOKEN,
      );
    }
  }

  async addStock() {
    const iexCloudClient = new IexCloudClient(
      process.env.VUE_APP_IEX_API_TOKEN,
    );
    const [dividendResult, companyResult] = await Promise.all([
      iexCloudClient.getDividends(this.searchSymbol),
      iexCloudClient.getCompanyInfomation(this.searchSymbol),
    ]);

    if (dividendResult && companyResult) {
      const datum: StockDatum = {
        symbol: this.searchSymbol,
        holdings: this.holdings,
        dividend: dividendResult.data,
        company: companyResult.data,
      };
      return this.$emit('addStock', datum);
    }

    alert(`not found ${this.searchSymbol}`);
  }
}
</script>
