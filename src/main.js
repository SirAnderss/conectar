import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
