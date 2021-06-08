import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as API from './api'
// import 'element-ui/lib/theme-chalk/index.css'
// import element from './element/index'

//Vue.use(element)
Vue.config.productionTip = false
Vue.prototype.$API = API
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
