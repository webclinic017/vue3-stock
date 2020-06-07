<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-card outlined class="login-card">
        <h3>Login</h3>
        <v-row>
          <v-col v-for="type in avaliableLoginType" :key="type">
            <v-btn icon class="logo-icon-btn">
              <img class="logo-icon" :src="require(`../assets/icon/${type}-icon.png`)" />
            </v-btn>
          </v-col>
          <v-col v-for="type in disableLoginType" :key="type">
            <v-btn icon class="logo-icon-btn" disabled>
              <img class="logo-icon disabled" :src="require(`../assets/icon/${type}-icon.png`)" />
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';

export default Vue.extend({
  name: 'Login',
  data: () => ({
    avaliableLoginType: ['google', 'github'],
    disableLoginType: ['facebook'],
  }),
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.fill-height {
  height: 100%;
}
.login-card {
  padding: 16px;
  min-width: 300px;
  text-align: center;
  .logo-icon-btn {
    margin: 16px;
    .logo-icon {
      height: 32px;
      width: 32px;

      &.disabled {
        filter: grayscale(100%);
      }
    }
  }
}
</style>
