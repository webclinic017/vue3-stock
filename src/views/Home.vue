<template>
  <v-container fluid>
    <v-row justify="center" class="home-layout">
      <dividend-card
        v-for="stock in stockList"
        :key="stock"
        :symbol="stock"
        :logo="`https://storage.googleapis.com/iexcloud-hl37opg/api/logos/${stock}.png`"
      />
      <add-dividend-card @add="addStock" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import DividendCard from '../components/card/DividendCard.vue';
import AddDividendCard from '../components/card/AddDividendCard.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    DividendCard,
    AddDividendCard,
  },
  data: () => ({
    stockList: ['MSFT', 'T', 'MAIN', 'O', 'TSLA', 'KO', 'SPY'],
  }),
  methods: {
    addStock: function addStock(symbol: string) {
      this.stockList.push(symbol);
    },
    deleteStock: function deleteStock(symbol: string) {
      this.stockList = this.stockList.filter(stock => stock !== symbol);
    },
  },
});
</script>

<style scoped lang='scss'>
.home-layout {
  max-width: 1400px;
  margin: auto;
}
</style>
