import Vue from 'vue'
import App from './App'
import router from './router'
import pageSwitcher from './plugins/page-switcher.js'
import './assets/css/transition.css'
import './assets/css/main.css'
import jQuery from 'jquery'
import nicescroll from 'nicescroll'
window.$ = jQuery;

Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  data: {
    animation: ''
  },
  render: h => h(App)
});

Vue.use(pageSwitcher, { router: router, vm: app });