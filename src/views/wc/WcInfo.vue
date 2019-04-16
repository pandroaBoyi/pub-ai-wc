<template>
  <primary-model>
    <template slot="header-left">
      <com-btn :addPath="{name: $UNAME_CONST.WC_INFO_MODIFY, params: {id: 'add'}}" :impPath="$UNAME_CONST.WC_INFO_UPLOAD" @batch-remove="batchRemove"></com-btn>
    </template>
    <template slot="header-right">
     <div class="search">
      <span class="ai-sel-label">公厕名称：</span>
      <Select
        class="ai-sel search-ipt"
        placeholder="请输入公厕名称"
        v-model="wcName"
        filterable
        remote
        :remote-method="getWcName"
        :loading="wcLoading">
      </Select>
      <span class="ai-sel-label">类型</span>
      <wc-cascader :data.sync="wcType" class="ai-sel search-ipt"></wc-cascader>
      <Button type="primary" class="ai-btn" @click="handleSearch">查询</Button>
    </div>
    </template>
    <template slot="content">
      <com-tab
      selection="true"
      modify="true"
      exportCsv="true"
      :loading="loading" 
      :custzCols="columns4" 
      :data="data1" 
      :sum="100" 
      @change-page="changePage">
      </com-tab>
    </template>
  </primary-model>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';
import ComTab from '@/components/home/content/ComTab.vue';
import ComBtn from '@/components/home/content/ComBtn.vue';
import PrimaryModel from '@/components/home/content/PrimaryModel.vue';
import WcCascader from '@/components/home/content/wc/info/WcCascader.vue';
import { IviewRenderParams, IviewCascader, WcInfo } from '@/types/index';
import { wcInfo } from '@/util/const/namespace';

@Component({
  components: {
    ComTab,
    PrimaryModel,
    ComBtn,
    WcCascader
  }
})
export default class WcEvaluate extends Vue {
  @wcInfo.State('wcList') private wcList!: any[];
  @wcInfo.Action('getWcList') private getWcList!: Function;
  private reqData: WcInfo = {
    name: '',
    level: '',
    pageNum: 10,
    pageSize: 1
  };
  private wcType: string[] = [];
  private wcName: string = '';
  private loading: boolean = false;
  private wcLoading: boolean = false;
  private columns4: Array<any> =[
    {
    title: '编号',
    key: 'codeid'
    },
    {
    title: '公厕名称',
    key: 'name'
    },
    {
    title: '类型',
    key: 'level'
    },
    {
    title: '所长',
    key: 'managername'
    },
  ];
  private data1: Array<any> =[{
    name: 'John Brown',
    status: 1,
    address: 'New York No. 1 Lake Park',
    date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      status: 2,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      status: 1,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      status: 3,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    }
  ];
  private changePage(pageIdx: number) : void {
    console.log(pageIdx);
  };
  private handleSearch(): void {
    console.log(this.wcType);
  };
  private batchRemove(): void {
  };
  private getWcName(): void {

  };
  mounted() {
   this.getWcList(this.reqData);
  }
}
</script>

<style lang="scss" scoped>
.search{
  &-ipt{
    width: 200px;
  }
}
</style>