import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import SIdentify from './components/identify'

Vue.config.productionTip = false
Vue.use(ElementUI,SIdentify);
// Vue.use(SIdentify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
