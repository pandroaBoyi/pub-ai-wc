<template>
  <Form :model="user" :rules="ruleValidate" ref="user" :label-width="60" class="user-form">
    <FormItem label="编号" name="number" class="user-form-ipt">
      <Input v-model="user.number" placeholder="请输入编号"></Input>
    </FormItem>
    <FormItem label="姓名" name="uname" class="user-form-ipt">
      <Input v-model="user.uname" placeholder="请输入姓名"></Input>
    </FormItem>
    <FormItem label="手机号码" name="phone" class="user-form-ipt">
      <Input v-model="user.phone" placeholder="请输入11位有效手机号码"></Input>
    </FormItem>
    <FormItem label="初始密码" name="password" class="user-form-ipt">
      <Input v-model="user.password" placeholder="请输入6-16位字符"></Input>
    </FormItem>
    <FormItem label="性别" name="sex" class="user-form-radio">
      <RadioGroup v-model="user.sex">
        <Radio label="男">男</Radio>
        <Radio label="女">女</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="账号状态" name="status" class="user-form-radio">
      <RadioGroup v-model="user.status">
        <Radio label="1">启用</Radio>
        <Radio label="0">禁用</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="角色分配" name="roleid" class="user-form-select">
      <Select v-model="user.roleid">
        <Option value="超级管理员">超级管理员</Option>
        <Option value="所长">所长</Option>
      </Select>
    </FormItem>
    <FormItem label="公厕分配" name="CreateUserId" class="user-form-ipt">
      <Select
        v-model="user.CreateUserId"
        filterable
        remote
        multiple
        :remote-method="searchName"
        :loading="loading">
        <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
      </Select>
      <!-- <com-search></com-search> -->
    </FormItem>
    <FormItem class="user-form-btn">
      <Button type="primary" @click="handleSubmit('user')" class="ai-btn">确定</Button>
      <Button :to="{name: $UNAME_CONST.SYS_USER}" class="ai-btn">取消</Button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, namespace } from 'vuex-class';
import { User } from '@/types';
import { Form } from 'iview';
// import ComSearch from '@/components/home/content/ComSearch.vue'

const userModule = namespace('sysUser');

@Component({
  components: {
    // ComSearch
  }
})
export default class UserForm extends Vue {
  private user: User = {
    number: '',
    uname: '',
    phone: '',
    password: '',
    sex: '男',
    status: '1',
    roleid: '',
    CreateUserId: ''
  }
  private ruleValidate: any = {};
  private loading: boolean = false;
  private options1: any[] = [];
  private list: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado'];
  private handleSubmit(name: string): void {
    (<Form>this.$refs[name]).validate((valid?: boolean): void => {
      if (valid) {

      } else {
        this.$Message.error('Fail!');
      }
    })
  }
  private searchName(keyWord: string) : void {
    if (keyWord !== '') {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            const list = this.list.map(item => {
                return {
                    value: item,
                    label: item
                };
            });
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(keyWord.toLowerCase()) > -1);
        }, 200);
    } else {
        this.options1 = [];
    }
  }
}
</script>

<style lang="scss" scoped>
.user-form{
  &-ipt{
    width: 30%;
  }
  &-radio{

  }
  &-select{
    width: 25%;
  }
  &-btn{
    a{
      margin-left: 24px;
    }
  }
}
</style>

