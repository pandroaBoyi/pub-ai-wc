import Vue, { PluginObject, VueConstructor } from 'vue';
import axios from 'axios';
import qs from 'qs';
import store from '@/store';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
axios.defaults.baseURL = '/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const http = axios.create(config);

http.interceptors.request.use(
  (cfg) => {
    // Do something before request is sent
    if (cfg.method === 'post') {
      cfg.headers = {'Content-Type':'application/x-www-form-urlencoded'};
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
http.interceptors.response.use(
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
    vue.$axios = http;
  },
};
Plugin.install = (vue: Vue | VueConstructor) => {
  vue.$axios = http;
  window.axios = http;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return http;
      },
    },
  });
};

Vue.use(Plugin);

export default {Plugin, http};
