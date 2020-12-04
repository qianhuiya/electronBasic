import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'

import 'font-awesome/css/font-awesome.min.css'

import "./assets/electron-js/element-ui"

import Element from 'element-ui';

import config from "./assets/electron-js/config"

Vue.prototype.$config = config;

Vue.use(Element, { size: 'small', zIndex: 3000 });


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Element);
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
