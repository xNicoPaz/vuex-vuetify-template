// Dependencias de la aplicacion
require('./bootstrap.js')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './vuex'
import router from './router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
