<template>
  <div v-if="users" class="upload-tab">
    <com-upload-tab 
      :cols="userCols" 
      :data="users" 
      :errLen="errLen"
      @re-upload="clearUpData"></com-upload-tab>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class'
import ComUploadTab from '@/components/home/content/execlUpload/ComUploadTab.vue';
import { User, TableCol } from '@/types';

const userModule = namespace('sysUser');

@Component({
  components: {
    ComUploadTab
  }
})
export default class UserUploadTab extends Vue {
  @userModule.State('uploadListsErr') private errLen!: number;
  @userModule.State('uploadLists') private users!: any[];
  @userModule.Mutation('updateUploadLists') private updateUploadLists!: Function;
  @userModule.Mutation('clearErr') private clearErr!: Function;
  private userCols: Array<TableCol> = [
    {
      title: '姓名',
      key: 'uname',
    },
    {
      title: '编号',
      key: 'number',
    },
    {
      title: '角色',
      key: 'roleid',
    },
    {
      title: '性别',
      key: 'sex',
    },
    {
      title: '电话',
      key: 'phone',
    },
    {
      title: '密码',
      key: 'password',
    },
    {
      title: '账号状态',
      key: 'status',
    },
    {
      title: '公厕分配',
      key: 'toiletId',
    },
  ];
  private clearUpData(): void{
    this.updateUploadLists([]);
    this.clearErr();
  }
}
</script>

<style lang="scss" scoped>
.upload-tab{
  height: 550px;
}
</style>


