<template>
  <v-card>
    <v-card-title>
      <h3>{{ stock.symbol }}</h3>
      <v-subheader>{{ stock.company.companyName}}</v-subheader>
    </v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>price</v-list-item-content>
          <v-list-item-content>{{previousPrice.close}}$ ({{previousPrice.date}})</v-list-item-content>
        </v-list-item>
        <v-list-item v-for="key of showDescKeys" :key="key">
          <v-list-item-content>{{key}}</v-list-item-content>
          <v-list-item-content>{{stock.company[key]}}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { StockDatum } from '@/@types';
import IexCloudClient from '@/api/IexCloud';
import { IexPreviousPrice } from '@/@types/iex';

@Component({})
export default class StockInfoCard extends Vue {
  @Prop() stock!: StockDatum;

  async created() {
    if (this.stock.symbol) {
      await this.loadPreviousPrice(this.stock.symbol);
    }
  }

  private loading = false;

  private previousPrice: IexPreviousPrice | null = null;

  private showDescKeys = [
    'CEO',
    'companyName',
    'description',
    'employees',
    'exhange',
    'sector',
    'website',
  ];

  private previousPriceKeys = ['close'];

  async loadPreviousPrice(symbol: string) {
    const iexCloudClient = new IexCloudClient(
      process.env.VUE_APP_IEX_API_TOKEN,
    );
    const res = await iexCloudClient.getPreviousPrive(symbol);
    this.previousPrice = res.data;
  }
}
</script>

<style scoped lang='scss'>
</style>
