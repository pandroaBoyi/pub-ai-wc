export default {
  namespaced: true,
  state: {
    upList: [],
  },
  getters: {
  },
  mutations: {
    updateUpList(state: any, data: string[]): void{
      state.upList = data;
    },
  },
  actions: {
  },
};
