<template>
  <v-container fluid>
    <v-row justify="center" class="home-layout">
      <basic-bar-chart :data="monthlyDividend"></basic-bar-chart>
    </v-row>
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
      <search-stock-card
        @addStock="addStock"
        @close="showAddDialog = false"
        v-if="showAddDialog === true"
      />
    </v-dialog>
    <v-dialog v-model="showStockInfoDialog" width="680">
      <stock-info-card :stock="selectStock" v-if="showStockInfoDialog === true" />
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
import DividendCard from '../components/card/DividendCard.vue';
import AddDividendCard from '../components/card/AddDividendCard.vue';
import SearchStockCard from '../components/card/SearchStockCard.vue';
import StockInfoCard from '../components/card/StockInfoCard.vue';
import BasicBarChart from '../components/chartjs/BasicBarChart.vue';
import { StockDatum } from '../../@types';
import FirebaseClient from '../../api/firebase';

@Component({
  components: {
    AddDividendCard,
    DividendCard,
    SearchStockCard,
    StockInfoCard,
    BasicBarChart,
  },
})
export default class Home extends Vue {
  private showAddDialog = false;

  private showStockInfoDialog = false;

  private selectStock!: StockDatum;

  private monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  private Q1 = ['January', 'April', 'July', 'October'];

  private Q2 = ['February', 'May', 'August', 'November'];

  private Q3 = ['March', 'June', 'September', 'December'];

  get stockList(): StockDatum[] {
    return this.$store.state.stock.stockList;
  }

  get userUid(): string {
    return this.$store.state.user.user.uid;
  }

  get monthlyDividend(): number[] {
    const chartData = new Map<string, number>();
    this.monthList.forEach((month) => {
      chartData.set(month, 0);
    });
    this.stockList.forEach((stock) => {
      if (stock.dividend.length > 0) {
        const firstDividend = stock.dividend[0];
        if (firstDividend.frequency === 'monthly') {
          chartData.forEach((value, index) => {
            chartData.set(index, value + Number(firstDividend.amount));
          });
        } else if (firstDividend.frequency === 'quarterly') {
          const standardMonth = moment(firstDividend.paymentDate).format(
            'MMMM',
          );

          const isContainQ1 = this.Q1.indexOf(standardMonth) > -1;
          const isContainQ2 = this.Q2.indexOf(standardMonth) > -1;
          const isContainQ3 = this.Q3.indexOf(standardMonth) > -1;

          let containQ: string[] = [];
          if (isContainQ1) containQ = this.Q1;
          if (isContainQ2) containQ = this.Q2;
          if (isContainQ3) containQ = this.Q3;

          containQ.forEach((month) => {
            chartData.set(
              month,
              (chartData.get(month) || 0) + Number(firstDividend.amount),
            );
          });
        }
      }
    });
    return Array.from(chartData.values()).map(
      (value) => Math.floor(value * 100) / 100,
    );
  }

  async mounted() {
    if (this.userUid && this.stockList.length === 0) {
      const firebaseClient = new FirebaseClient();
      firebaseClient.getStockDatum(this.userUid).then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
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
      this.selectStock = stock;
      this.showStockInfoDialog = true;
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
