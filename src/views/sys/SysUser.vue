<template>
  <primary-model>
    <template slot="header-left">
      <com-btn :addPath="$URL_CONST.SYS_USER_MODIFY" :impPath="$URL_CONST.SYS_USER_UPLOAD" @batch-remove="batchRemove"></com-btn>
    </template>
    <template slot="header-right">
      <user-search></user-search>
    </template>
    <template slot="content">
      <com-tab
      selection = "true"
      modify ="true"
      :loading="loading" 
      :custzCols="columns4" 
      :data="data1" 
      :sum="100" 
      @change-page="changePage"
      @update-row="updateRow"
      @remove-row="removeRow"
      @set-sel-lists="setDelLists"/>
    </template>
  </primary-model>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation, Action, namespace } from 'vuex-class';
import PrimaryModel from '@/components/home/content/PrimaryModel.vue'
import ComTab from '@/components/home/content/ComTab.vue';
import ComBtn from '@/components/home/content/ComBtn.vue';
import UserSearch from '@/components/home/content/sys/user/UserSearch.vue'

const userModule = namespace('sysUser');

@Component({
  components: {
    ComTab,
    ComBtn,
    UserSearch,
    PrimaryModel
  }
})
export default class SysUser extends Vue {
  @userModule.Mutation('updateDelLists') private updateDelLists: any;
  private loading: boolean = false;
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
    age: 18,
    address: 'New York No. 1 Lake Park',
    date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      age: 24,
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
  private updateRow(rowData: any) : void {
    console.log(rowData);
  };
  private removeRow(rowData: any) : void {
    console.log(rowData);
  };
  private setDelLists(selArr: Array<any>) : void {
    this.updateDelLists(selArr);
  };
  private batchRemove(): void {

  };
}
</script>

<style lang="scss" scoped>

</style>


