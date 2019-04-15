import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import User from '@/store/user';
import WcInfo from '@/store/wcInfo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    siderNavs: [{subMenu: []}],
    userName: '',
    token: '',
  },
  getters: {
    siderNavsFilter(state) {
      if (state.siderNavs &&
        state.siderNavs.length > 0 &&
        state.siderNavs[0].subMenu &&
        state.siderNavs[0].subMenu.length > 0) {
        return state.siderNavs[0].subMenu;
      }
    },
  },
  mutations: {
    setSiderNavs(state, data: any) {
      state.siderNavs = data;
    },
    setUsers(state, user: any) {
      state.userName = user.name;
      state.token = user.token;
    },
  },
  actions: {
    async getSiderNavs({commit}, that?: any): Promise<any> {
      return window.axios.get('api/toilet/main/index').then((resp: any) => {
        commit('setSiderNavs', resp.data.data);
      }).catch((e) => {
        that.$Message.error(e);
      });
    },
    async login({commit}, that?: any): Promise<any> {
      return window.axios.post('api/toilet/userManage/account/login', {
        phone: that.user.name,
        password: that.user.pwd,
      }).then((resp: any) => {
        const respData = resp.data;
        if (respData && respData.code === 2000) {
          that.$Message.success(respData.msg);
          const user = {
            name: that.user.name,
            token: respData.data.token,
          };
          commit('setUsers', user);
          that.$router.push('/home');
        } else {
          that.$Message.error(respData.msg);
        }
      });
    },
  },
  modules: {
    sysUser: User,
    wcInfo: WcInfo,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      // reducer: (state) => {
      //   return {
      //     userName: state.userName,
      //     pwd: state.pwd,
      //   };
      // },
    }),
  ],
});
