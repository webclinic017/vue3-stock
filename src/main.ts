import Vue from 'vue';
import * as firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import { store } from './store';
import vuetify from './plugins/vuetify';

const firebaseConfigString: string = process.env.VUE_APP_FIREBASE_CONFIG;
firebase.initializeApp(JSON.parse(firebaseConfigString.replace(/\'/gi, '"')));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    console.log(process.env)
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push('/login')
      } else {
        this.$store.commit('user/setUser', {
          name: user.displayName,
          uid: user.uid,
        })
      }
    });
  }
}).$mount('#app');
