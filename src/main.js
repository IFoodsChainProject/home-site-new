// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Cookies from 'js-cookie'
import i18n from './language'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n, //挂载在根实例中
  router,
  components: { App },
  template: '<App/>'
})
