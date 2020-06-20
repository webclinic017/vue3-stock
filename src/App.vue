<template>
  <v-app>
    <v-content class="main-content">
      <v-row class="spinner" align="center" justify="center" v-if="loading">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-row>
      <router-view v-else />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  get loading() {
    return this.$store.state.loading;
  }
}
</script>

<style scoped lang='scss'>
.main-content {
  background: #eee;
}
.spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: white;
}
</style>
