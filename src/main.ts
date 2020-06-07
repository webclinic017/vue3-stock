import Vue from 'vue';
import * as firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import firebaseConfig from '../firebase-config.json';

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
