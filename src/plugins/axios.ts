import Vue, { PluginObject, VueConstructor } from 'vue';
import axios from 'axios';
import qs from 'qs';
import store from '@/store';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.baseURL = '/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const instance = axios.create(config);

instance.interceptors.request.use(
  (cfg) => {
    // Do something before request is sent
    if (cfg.method === 'post') {
      cfg.data = qs.stringify(cfg.data);
    }
    if (store.state.token) {
      cfg.headers.Token = store.state.token;
    }
    return cfg;
  },
  (err) => {
    // Do something with request error
    return Promise.reject(err);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  (res) => {
    // Do something with response data
    return res;
  },
  (err) => {
    // Do something with response error
    return Promise.reject(err);
  },
);

const Plugin: PluginObject<any> = {
  install: (vue: Vue | VueConstructor) => {
    vue.$axios = instance;
  },
};
Plugin.install = (vue: Vue | VueConstructor) => {
  vue.$axios = instance;
  window.axios = instance;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return instance;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
