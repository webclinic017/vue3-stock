<template>
  <v-card outlined class="dividend-card" @click="clickStockCard">
    <v-container>
      <v-row class="ma-0" wrap align="center">
        <img class="symbol-logo-img" :src="logo" alt="logo" />
        <div class="symbol-title">{{stock.symbol}}</div>
      </v-row>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>보유량</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="align-end">
            <v-list-item-title>{{stock.holdings}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>예상 배당금</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="align-end">
            <v-list-item-title>
              {{
              lastDividendAmount !== undefined ? lastDividendAmount : '알 수 없음'
              }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="lastDividend">
          <v-list-item-content>
            <v-list-item-title>배당주기</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="align-end">
            <v-list-item-title>{{ lastDividend.frequency !== undefined ? lastDividend.frequency : '알 수 없음' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>총 예상 배당금</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="align-end">
            <v-list-item-title>{{expectedAmount}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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

  get infoToArray() {
    return [
      { text: '보유량', value: 10 },
      { text: '예상 배당금', value: 1 },
      { text: '배당주기', value: 'monthly' },
      { text: '', value: 10 },
    ];
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
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
    border: 1px solid #99e9f2 !important;
    background: #ccc;
  }
  .container {
    height: 100%;
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
    .v-list {
      background: none;
    }
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
