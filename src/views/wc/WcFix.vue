<template>
  <primary-model>
    <template slot="header-left">
      <Button type="primary" icon="md-add" class="ai-btn" :to="$URL_CONST.WC_FIX_MODIFY">新建</Button>
    </template>
    <template slot="header-right">
      <span class="ai-sel-label">状态：</span>
      <Select :model="status" class="ai-sel">
        <Option value="待维修">待维修</Option>
        <Option value="维修中">维修中</Option>
        <Option value="已完成">已完成</Option>
        <Option value="已停用">已停用</Option>
      </Select>
      <Button type="primary" class="ai-btn" @click="searchData">查询</Button>
    </template>
    <template slot="header-right"></template>
    <template slot="content">
      <com-tab
      selection="true"
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
import PrimaryModel from '@/components/home/content/PrimaryModel.vue'
import { IviewRenderParams } from '../../types/index';

const userModule = namespace('sysUser');

@Component({
  components: {
    ComTab,
    PrimaryModel
  }
})
export default class WcEvaluate extends Vue {
  private loading: boolean = false;
  private status: string = '';
  private columns4: Array<any> =[
    {
    title: 'Name',
    key: 'name'
    },
    {
    title: 'Status',
    key: 'status',
    render: (h: Function, params: IviewRenderParams) => {
        const row = params.row;
        const color = row.status === 1 ? 'primary' : row.status === 2 ? 'success' : 'error';
        const text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail';

        return h('Tag', {
            props: {
                type: 'dot',
                color: color
            }
        }, text);
    }
    },
    {
    title: 'Address',
    key: 'address'
    },
    {
      title: 'Action',
      key: 'action',
      width: 150,
      align: 'center',
      render: (h: Function, params: IviewRenderParams) => {
        return h('div', [
          h('Button', {
              props: {
                  type: 'primary',
                  size: 'small',
                  to: this.$URL_CONST.WC_FIX_MODIFY
              }
          }, '修改'),
        ]);
      }
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
  private searchData(): void {

  }
}
</script>

<style lang="scss" scoped>
</style>