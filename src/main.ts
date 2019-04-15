import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/axios';
import './plugins/iview';

import xlsx from 'xlsx';
import NAV from './util/const/nav';
import URL from './util/const/url';

import './assets/scss/global.scss';

Vue.config.productionTip = false;
Vue.prototype.$xlsx = xlsx;
Vue.prototype.$NAV_CONST = NAV;
Vue.prototype.$URL_CONST = URL;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
