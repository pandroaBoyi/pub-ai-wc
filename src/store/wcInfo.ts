import { WcInfo, Wc } from '@/types/index';

export default {
  namespaced: true,
  state: {
    upList: [],
    wcList: [],
    upLoading: false,
    upListsErr: 0,
  },
  getters: {
  },
  mutations: {
    updateUpList(state: any, data: string[]): void {
      state.upList = data;
    },
    updateWcList(state: any, data: string[]): void {
      state.wcList = data;
    },
    addWcList(state: any, data: Wc): void {
      state.wcList.push(data);
    },
    setUpLoading(state: any, data: boolean): void {
      state.upLoading = data;
    },
    addErr(state: any, data: number): void {
      state.upListsErr += data;
    },
    clearErr(state: any): void {
      state.upListsErr = 0;
    },
  },
  actions: {
    async getWcList({commit}, data: WcInfo): Promise<any> {
      const param: WcInfo = {
        name: data.name,
        level: data.level,
        pageSize: data.pageSize,
        pageNum: data.pageNum,
      };
      return window.axios.get('/toilet/toiletManage/toilet/list', {
        params: param,
      }).then((resp) => {
        const respData = resp.data;
        if (respData.code === 2000) {
          commit('updateWcList', respData.data);
        }
      });
    },
    async wcModify({commit}, data: Wc): Promise<any> {
      const params: Wc = {
        codeId: data.codeId,
        name: data.name,
        address: data.address,
        longitude: data.latitude,
        latitude: data.latitude,
        level: data.level,
        managerName: data.managerName,
        place: data.place,
      };
      return window.axios.post('/toilet/toiletManage/toilet', params).then((resp) => {
        const respData = resp.data;
        if (respData === 2000) {
          commit('addWcList');
        }
      });
    },
  },
};
