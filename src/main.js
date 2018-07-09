import Vue from 'vue'
import App from './App'
import router from './router'
import cbui from './index'
Vue.use(cbui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
