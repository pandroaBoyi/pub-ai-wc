<template>
 <div class="search-form">
  <span>角色：</span>
  <Select v-model="role" class="search-form-sel">
    <Option value="超级管理员">超级管理员</Option>
    <Option value="所长">所长</Option>
  </Select>
  <span>状态：</span>
  <Select v-model="status" class="search-form-sel">
    <Option value="可用">可用</Option>
    <Option value="禁用">禁用</Option>
  </Select>
  <Button type="primary" @click="handleSubmit('searchItem')" class="ai-btn">查询</Button>
 </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { UserSearch } from '@/types';
@Component
export default class UserHeaderSearch extends Vue {
  private role: string = '';
  private status: string = '';
}
</script>

<style lang="scss" scoped>
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
