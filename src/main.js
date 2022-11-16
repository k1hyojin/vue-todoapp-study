import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

new Vue({
  el:"#app",
  store, // 축약버전.. 원래는 store:store
  render: h => h(App)
});
