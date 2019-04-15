<template>
  <primary-model>
    <template slot="header-left">
      <com-btn :addPath="$URL_CONST.WC_INFO_MODIFY" :impPath="$URL_CONST.WC_INFO_UPLOAD" @batch-remove="batchRemove"></com-btn>
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
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import ComTab from '@/components/home/content/ComTab.vue';
import ComBtn from '@/components/home/content/ComBtn.vue';
import PrimaryModel from '@/components/home/content/PrimaryModel.vue';
import WcCascader from '@/components/home/content/wc/info/WcCascader.vue';
import { IviewRenderParams, IviewCascader } from '../../types/index';

const userModule = namespace('sysUser');

@Component({
  components: {
    ComTab,
    PrimaryModel,
    ComBtn,
    WcCascader
  }
})
export default class WcEvaluate extends Vue {
  private wcType: string[] = [];
  private wcName: string = '';
  private loading: boolean = false;
  private wcLoading: boolean = false;
  private columns4: Array<any> =[
    {
    title: 'Name',
    key: 'name'
    },
    {
    title: 'Age',
    key: 'age'
    },
    {
    title: 'Address',
    key: 'address'
    }
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
}
</script>

<style lang="scss" scoped>
.search{
  &-ipt{
    width: 200px;
  }
}
</style>