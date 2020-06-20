<template>
  <v-app>
    <v-content class="main-content">
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {}
</script>

<style scoped lang='scss'>
.main-content {
  background: #eee;
}
</style>
