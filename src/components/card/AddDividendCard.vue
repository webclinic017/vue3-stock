<template>
  <v-card outlined class="add-dividend-card" @click="addStock">
    <v-container class="card-container">
      <v-row column wrap align="center" justify="center" class="card-row">
        <div class>
          <v-icon size="20">mdi-plus</v-icon>
        </div>
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
  methods: {
    addStock: function addStock(symbol: string) {
      this.$emit('add', symbol);
    },
  },
});
</script>

<style scoped lang='scss'>
.add-dividend-card {
  padding: 4px;
  margin: 4px;
  width: 200px;
  height: 200px;

  &:hover {
    cursor: pointer;
    background: #ccc;
  }
  .card-container {
    width: 100%;
    height: 100%;
    .card-row {
      height: 100%;
    }
  }
}
</style>
