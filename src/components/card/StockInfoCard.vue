<template>
  <v-card>
    <v-card-title>
      <h3>{{ stock.symbol }}</h3>
      <v-subheader>{{ stock.company.companyName}}</v-subheader>
    </v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item v-for="key of showKeys" :key="key">
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

@Component({})
export default class StockInfoCard extends Vue {
  @Prop() stock!: StockDatum;

  private showKeys = [
    'CEO',
    'companyName',
    'description',
    'employees',
    'exhange',
    'sector',
    'website',
  ];
}
</script>

<style scoped lang='scss'>
</style>
