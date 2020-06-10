<template>
  <v-app>
    <v-content class="main-content">
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
});
</script>

<style scoped lang='scss'>
.main-content {
  background: #eee;
}
</style>
