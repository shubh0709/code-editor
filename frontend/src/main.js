import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
//import client from './client.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.headers.common['Access-Control-Allow-Origin'] = true;
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
