export default {
  namespaced: true,
  state: {
    userLists: [],
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
    // getUserList({commit: any}, params: any) {
    //   window.axios.post('api/toilet/userManage/users', )
    // }
  },
};
