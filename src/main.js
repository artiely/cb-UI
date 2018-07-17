import Vue from 'vue'
import App from './App'
import router from './router'
import cbui from './index'
// import mescroll from 'mescroll.js'
// var mescroll = new MeScroll("mescroll", { //第一个参数"mescroll"对应上面布局结构div的id
//   down: {
//     callback: downCallback //下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
//   },
//   up: {
//     callback: upCallback //上拉加载回调,简写callback:function(page){upCallback(page);}
//   }
// })
Vue.use(cbui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
