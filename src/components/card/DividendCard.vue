<template>
  <v-card outlined class="dividend-card" @click="clickStockCard">
    <v-container>
      <v-row row wrap align="center">
        <img class="symbol-logo-img" :src="logo" alt="logo" />
        <div class="symbol-title">{{stock.symbol}}</div>
      </v-row>
      <v-row>
        <div>보유량: {{stock.holdings}}</div>
      </v-row>
      <v-row>
        <div v-if="lastDividendAmount !== undefined">배당금 : {{ lastDividendAmount }}</div>
        <div v-else>배당금 : 알 수 없음</div>
      </v-row>
      <v-row>
        <div>배당주기 : {{ lastDividend.frequency }}</div>
      </v-row>
      <v-row>
        <div>예상 배당금 : {{ expectedAmount }}</div>
      </v-row>
    </v-container>
    <div class="delete-div">
      <v-btn class="delete-btn" fab depressed color="red" dark @click.stop="deleteStock">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { StockDatum } from '../../../@types';

@Component({})
export default class DividendCard extends Vue {
  @Prop() stock!: StockDatum;
  @Prop() logo!: string;

  get expectedAmount() {
    if (this.lastDividend) {
      const amount = this.stock.holdings * Number(this.lastDividend.amount);
      return this.formatCurrency(Number(amount), this.lastDividend.currency);
    }
    return undefined;
  }

  get lastDividend() {
    if (this.stock.dividend.length > 0) {
      return this.stock.dividend[0];
    }
    return undefined;
  }

  get lastDividendAmount() {
    if (this.lastDividend) {
      return this.formatCurrency(
        Number(this.lastDividend.amount),
        this.lastDividend.currency,
      );
    }
    return undefined;
  }

  public deleteStock() {
    this.$emit('deleteStock', this.stock.symbol);
  }
  public clickStockCard() {
    this.$emit('clickStockCard', this.stock);
  }
  public formatCurrency(value: number, currency: string) {
    return new Intl.NumberFormat('ko-KR', {
      currency,
      style: 'currency',
      minimumFractionDigits: 3,
    }).format(value);
  }
}
</script>

<style scoped lang='scss'>
.dividend-card {
  padding: 4px;
  margin: 4px;
  width: 200px;
  height: 200px;
  &:hover {
    cursor: pointer;
    background: #ccc;
  }
  .symbol-logo-img {
    width: 32px;
    height: 32px;
  }
  .symbol-title {
    padding: 0 8px;
    font-size: 18px;
    font-weight: 700;
    min-width: 120px;
    max-width: 120px;
  }
  .delete-div {
    position: absolute;
    top: 8px;
    right: 8px;
    .delete-btn {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
