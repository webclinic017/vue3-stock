<template>
  <v-card outlined class="dividend-card">
    <v-container>
      <v-row row wrap align="center">
        <img class="symbol-logo-img" :src="logo" alt="logo" />
        <div class="symbol-title">{{symbol}}</div>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';

export default Vue.extend({
  name: 'DividendCard',
  data: () => ({}),
  props: {
    symbol: String,
    logo: String,
  },
  methods: {},
});
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
    padding-left: 8px;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
