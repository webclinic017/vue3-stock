<template>
  <v-container fluid>
    <v-row justify="center" class="home-layout">
      <dividend-card
        v-for="stock in stockList"
        :key="stock.symbol"
        :stock="stock"
        :logo="`https://storage.googleapis.com/iexcloud-hl37opg/api/logos/${stock.symbol}.png`"
        @deleteStock="deleteStock"
        @clickStockCard="clickStockCard"
      />
      <add-dividend-card @add="openSearchStockCard" />
    </v-row>
    <v-dialog v-model="showAddDialog" width="600">
      <search-stock-card @addStock="addStock" />
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DividendCard from '../components/card/DividendCard.vue';
import AddDividendCard from '../components/card/AddDividendCard.vue';
import SearchStockCard from '../components/card/SearchStockCard.vue';
import { StockDatum } from '../../@types';
import FirebaseClient from '../../api/firebase';

@Component({
  components: {
    AddDividendCard,
    DividendCard,
    SearchStockCard,
  },
})
export default class Home extends Vue {
  private showAddDialog = false;

  private detailStockDialog = false;

  private selectStock!: StockDatum;

  get stockList(): StockDatum[] {
    return this.$store.state.stock.stockList;
  }

  get userUid(): string {
    return this.$store.state.user.user.uid;
  }

  async mounted() {
    if (this.userUid && this.stockList.length === 0) {
      const firebaseClient = new FirebaseClient();
      firebaseClient.getStockDatum(this.userUid).then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          this.$store.commit('stock/addStock', doc.data());
        });
      });
    }
  }

  public openSearchStockCard() {
    this.showAddDialog = true;
  }

  public addStock(datum: StockDatum) {
    new FirebaseClient().setStockDatum(this.userUid, datum).then(() => {
      this.$store.commit('stock/addStock', datum);
      this.showAddDialog = false;
    });
  }

  public deleteStock(symbol: string) {
    new FirebaseClient().deleteStockDatum(this.userUid, symbol).then(() => {
      this.$store.commit('stock/deleteStock', symbol);
    });
  }

  public clickStockCard(stock: StockDatum) {
    if (stock) {
      Object.assign(this.selectStock, stock);
      this.detailStockDialog = true;
    }
  }
}
</script>

<style scoped lang='scss'>
.home-layout {
  max-width: 1400px;
  margin: auto;
}
</style>
