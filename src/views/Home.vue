<template>
  <v-container fluid>
    <v-row justify="center" class="home-layout">
      <dividend-card
        v-for="stock in stockList"
        :key="stock.symbol"
        :symbol="stock.symbol"
        :logo="`https://storage.googleapis.com/iexcloud-hl37opg/api/logos/${stock.symbol}.png`"
      />
      <add-dividend-card @add="addStock" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import DividendCard from '../components/card/DividendCard.vue';
import AddDividendCard from '../components/card/AddDividendCard.vue';
import { mapState } from 'vuex';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { StockDatum } from '../../types';

@Component({
  components: {
    AddDividendCard,
    DividendCard,
  },
})
export default class Home extends Vue {
  get stockList(): StockDatum[] {
    return this.$store.state.stock.stockList;
  }

  public created() {
    this.$store.dispatch('stock/getStockList', 'ITMOAkbfTVZhKPsL8cSACJGgy2B3');
  }

  public addStock(symbol: string) {
    this.$store.commit('addStock', { symbol, holdings: 1 });
  }

  public deleteStock(symbol: string) {
    this.$store.commit('deleteStock', symbol);
  }
}
</script>

<style scoped lang='scss'>
.home-layout {
  max-width: 1400px;
  margin: auto;
}
</style>
