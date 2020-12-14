import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { createProvider } from './vue-apollo'

var app = firebase.initializeApp({
  apiKey: "AIzaSyAsAyhmhpPS35AL2_9GOniKnfyx5umKnz4",
  authDomain: "womz-4732c.firebaseapp.com",
  databaseURL: "https://womz-4732c.firebaseio.com",
  projectId: "womz-4732c",
  storageBucket: "womz-4732c.appspot.com",
  messagingSenderId: "634920466466",
  appId: "1:634920466466:web:e6030cccd5808155dd327b"
})

export default app.firestore()


Vue.config.productionTip = true

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')