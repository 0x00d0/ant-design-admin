// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import il8n from "./locale";

import antDesignVue from 'ant-design-vue'

Vue.use(antDesignVue)

Vue.config.productionTip = false

if(process.env.NODE_ENV === 'mock'){
  require('@/mock/index');
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  il8n,
  store,
})
