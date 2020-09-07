<template>
  <v-card>
    <v-card-title>
      <h3>{{ stock.symbol }}</h3>
      <v-subheader>{{ stock.company.companyName}}</v-subheader>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { StockDatum } from '@/@types';

@Component({})
export default class StockInfoCard extends Vue {
  @Prop() stock!: StockDatum;
}
</script>

<style scoped lang='scss'>
</style>
