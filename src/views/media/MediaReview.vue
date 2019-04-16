<template>
  <primary-model>
    <template slot="header-right">
      <div class="header-search">
        <Button  class="ai-btn" :to="{name: $UNAME_CONST.MEDIA_REVIEW_HIS}">审核记录</Button>
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
export default class MediaReview extends Vue {
  private loading: boolean = false;
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
                  to: this.$UNAME_CONST.MEDIA_REVIEW_DETAIL
              }
          }, '审核'),
        ]);
      }
    }
  ];
  private data1: Array<any> =[{
    name: 'John Brown',
    auditstatus: 18,
    address: 'New York No. 1 Lake Park',
    date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      auditstatus: 30,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      auditstatus: 30,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      auditstatus: 26,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    }
  ];
  private changePage(pageIdx: number) : void {
    console.log(pageIdx);
  };
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