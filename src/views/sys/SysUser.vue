<template>
  <primary-model>
    <template slot="header-left">
      <!-- <com-btn :addPath="{name: $UNAME_CONST.SYS_USER_MODIF}" :impPath="$UNAME_CONST.SYS_USER_UPLOAD" @batch-remove="batchRemove"></com-btn> -->
      <Button type="primary" icon="md-add" class="ai-btn" :to="{name: $UNAME_CONST.SYS_USER_MODIFY, params: {id: 'add'}}">新建</Button>
      <Button class="ai-btn" :to="{name: $UNAME_CONST.SYS_USER_UPLOAD}">批量导入</Button>
      <Button class="ai-btn" @click="batchRemove">批量删除</Button>
    </template>
    <template slot="header-right">
      <div class="search-form">
        <span>角色：</span>
        <Select v-model="search.role" class="search-form-sel">
          <Option value="全部">全部</Option>
          <Option value="超级管理员">超级管理员</Option>
          <Option value="所长">所长</Option>
        </Select>
        <span>状态：</span>
        <Select v-model="search.status" class="search-form-sel">
          <Option :value="0">全部</Option>
          <Option :value="1">可用</Option>
          <Option :value="2">禁用</Option>
        </Select>
        <Button type="primary" @click="handleSubmit('searchItem')" class="ai-btn">查询</Button>
      </div>
    </template>
    <template slot="content">
      <com-tab
      selection = "true"
      modify ="true"
      :loading="loading" 
      :custzCols="columns4" 
      :data="userList" 
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
// import UserSearch from '@/components/home/content/sys/user/UserSearch.vue'
import { Search, SysUserParams, User } from '@/types';
import {sysUser} from '@/util/const/namespace';

@Component({
  components: {
    ComTab,
    ComBtn,
    // UserSearch,
    PrimaryModel
  }
})
export default class SysUser extends Vue {
  @sysUser.Mutation('updateDelLists') private updateDelLists!: Function;
  @sysUser.Action('getUserList') private getUserList!: Function;
  @sysUser.State('userList') private userList!: User;
  private loading: boolean = false;
  private search: SysUserParams = {
    status: '',
    role: '',
    pageNum: 1,
    pageSize: 10
  };
  private columns4: Array<any> =[
    {
    title: '姓名',
    key: 'uname'
    },
    {
    title: '编号',
    key: 'numbers'
    },
    {
    title: '角色',
    key: 'rolename'
    },
    {
    title: '性别',
    key: 'sex'
    },
    {
    title: '手机号码',
    key: 'phone'
    },
    {
    title: '状态',
    key: 'status'
    },
    {
    title: '创建人',
    key: 'createuser'
    },
    {
    title: '创建时间',
    key: 'createdatetime'
    },
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
  mounted(): void {
    this.getUserList({search: this.search, that: this});
  };
}
</script>

<style lang="scss" scoped>
.ai-btn{
  margin-right: 16px;
}
.search-form{
  span{
    font-size: 14px;
  }
  &>*+*{
    margin-left: 24px;
  }
  &-sel{
    width: 130px;
  }
}
</style>


