<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-card outlined class="login-card">
        <h3>Login</h3>
        <v-row>
          <section id="firebaseui-auth-container"></section>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { Vue } from 'vue-property-decorator';
import 'firebaseui/dist/firebaseui.css';

export default Vue.extend({
  name: 'Login',
  data: () => ({}),
  methods: {
    initFirebase(): void {
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
      }
      const uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
      };
      ui.start('#firebaseui-auth-container', uiConfig);
    },
  },
  mounted: function mounted() {
    this.initFirebase();
  },
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

<!--
  firebase auth setting url
  https://softauthor.com/firebaseui-vue-login-with-facebook-google-and-email-pasword/
-->
