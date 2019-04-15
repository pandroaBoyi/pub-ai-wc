<template>
  <primary-model>
    <template slot="header-right">
      <div class="header-search">
        <span clas="">类型：</span>
        <Select v-model="type" class="header-search-sel">
          <Option value="待审核">待审核</Option>
          <Option value="驳回">驳回</Option>
          <Option value="已审核">已审核</Option>
          <Option value="已发布">已发布</Option>
        </Select>
        <Button type="primary" @click="searchData" class="ai-btn">查询</Button>
      </div>
    </template>
    <template slot="content">
      <com-tab
      :loading="loading" 
      :custzCols="columns4" 
      :data="data1" 
      :sum="100" 
      @change-page="changePage">
      </com-tab>
      <Modal
        v-model="modalShow"
        title="Title"
        :loading="loading"
        @on-ok="asyncOK">
        <p>{{modalName}}</p>
    </Modal>
    </template>
  </primary-model>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import ComTab from '@/components/home/content/ComTab.vue';
import PrimaryModel from '@/components/home/content/PrimaryModel.vue'
import { IviewRenderParams } from '@/types';

const userModule = namespace('sysUser');

@Component({
  components: {
    ComTab,
    PrimaryModel
  }
})
export default class MediaMy extends Vue {
  private loading: boolean = false;
  private modalLoading: boolean = false;
  private modalShow: boolean = false;
  private modalName: string = '';
  private type: string = '';
  private columns4: Array<any> =[
    {
    title: 'Name',
    key: 'name'
    },
    {
    title: 'Age',
    key: 'auditstatus'
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
                  disabled: params.row.age !== 3,
              },
              on: {
                  click: () => {
                    this.show(params.row.name)
                  }
              }
          }, '发布'),
        ]);
      }
    }
  ];
  private data1: Array<any> =[{
    name: 'John Brown',
    age: 18,
    address: 'New York No. 1 Lake Park',
    date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      age: 3,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    }
  ];
  private changePage(pageIdx: number) : void {
    console.log(pageIdx);
  };
  private searchData(): void {

  };
  private show(fileName: string): void {
    this.modalName = fileName;
    this.modalShow = !this.modalShow;
  };
  private asyncOK () : void {
    setTimeout(() => {
        this.modalShow = false;
    }, 2000);
  }
}
</script>

<style lang="scss" scoped>
.header-search{
  &>*+*{
    margin-left: 24px;
  }
  &-sel{
    width: 140px;
  }
  span{
    font-size: 14px;
    margin-right: -14px;
  }
}
</style>