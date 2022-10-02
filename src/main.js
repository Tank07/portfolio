import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueTypedJs from 'vue-typed-js'
 
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')