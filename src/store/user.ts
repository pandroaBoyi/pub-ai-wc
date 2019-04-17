import SysUser from '../views/sys/SysUser.vue';
import { SysUserParams } from '../types/index';
export default {
  namespaced: true,
  state: {
    userList: [],
    delLists: [],
    uploadLists: [],
    uploadListsErr: 0,
    upLoading: false,
  },
  getters: {

  },
  mutations: {
    updateUserList(state: any, data: any[]): void {
      state.userList = data;
    },
    updateDelLists(state: any, data: any[]): void {
      state.delLists = data;
    },
    updateUploadLists(state: any, data: any[]): void {
      state.uploadLists = data;
    },
    addErr(state: any, data: number): void {
      state.uploadListsErr += data;
    },
    clearErr(state: any): void {
      state.uploadListsErr = 0;
    },
    setUpLoading(state: any, data: boolean): void {
      state.upLoading = data;
    },
  },
  actions: {
    getUserList({commit}: {commit: any}, {search, that}: {search: SysUserParams, that: SysUser}) {
      const param = {
        roleName: search.role,
        status: search.status,
        pageNum: search.pageNum,
        pageSize: search.pageSize,
      };
      window.axios.get('/toilet/userManage/users', {
        params: param,
      }).then((resp) => {
        const respData = resp.data;
        if (respData.code === 2000) {
          commit('updateUserList', respData.data);
        } else {
          that.$Message.error(respData.msg);
        }
      }).catch((e) => {
        that.$Message.error(e);
      });
    },
  },
};
