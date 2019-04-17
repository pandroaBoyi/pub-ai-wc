<template>
  <Form :model="user" :rules="ruleValidate" ref="user" :label-width="80" class="user-form">
    <FormItem label="编号" prop="numbers" class="user-form-ipt">
      <Input v-model="user.numbers" placeholder="请输入编号"></Input>
    </FormItem>
    <FormItem label="姓名" prop="uname" class="user-form-ipt">
      <Input v-model="user.uname" placeholder="请输入姓名"></Input>
    </FormItem>
    <FormItem label="手机号码" prop="phone" class="user-form-ipt">
      <Input v-model="user.phone" placeholder="请输入11位有效手机号码"></Input>
    </FormItem>
    <FormItem label="初始密码" prop="password" class="user-form-ipt">
      <Input v-model="user.password" placeholder="请输入6-16位字符"></Input>
    </FormItem>
    <FormItem label="性别" prop="sex" class="user-form-radio">
      <RadioGroup v-model="user.sex">
        <Radio label="男">男</Radio>
        <Radio label="女">女</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="账号状态" prop="status" class="user-form-radio">
      <RadioGroup v-model="user.status">
        <Radio label="1">启用</Radio>
        <Radio label="0">禁用</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="角色分配" prop="roleid" class="user-form-select">
      <Select v-model="user.roleid">
        <Option value="管理员">管理员</Option>
        <Option value="所长">所长</Option>
      </Select>
    </FormItem>
    <FormItem label="公厕分配" prop="toiletId" class="user-form-ipt">
      <Select
        v-model="user.toiletId"
        filterable
        remote
        multiple
        :remote-method="getWc"
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
import { sysUser } from '@/util/const/namespace';
// import ComSearch from '@/components/home/content/ComSearch.vue'

const userModule = namespace('sysUser');

@Component({
  components: {
    // ComSearch
  }
})
export default class UserForm extends Vue {
  private user: User = {
    numbers: '',
    uname: '',
    phone: '',
    password: '',
    sex: '男',
    status: '1',
    rolename: '',
    toiletId: ''
  }
  private ruleValidate: User = {
    numbers: [
      {
        required: true,
        message: '请输入编号'
      }
    ],
    uname: [
      {
        required: true,
        message: '请输入姓名'
      }
    ],
    phone: [
      {
        required: true,
        message: '请输入手机号码'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码'
      }
    ]
  };
  private loading: boolean = false;
  private options1: any[] = [];
  private handleSubmit(name: string): void {
    (<Form>this.$refs[name]).validate((valid?: boolean): void => {
      if (valid) {
        console.log(this.user);
        this.$axios.post('/toilet/userManage/users', this.user).then((resp) => {
          const respData = resp.data;
          if (respData.code === 2000) {
            this.$Message.success('创建用户成功');
            this.$router.push({name: this.$UNAME_CONST.SYS_USER});
          } else {

          }
        }).catch((e) => {
          this.$Message.error(e);
        })
      } else {
        this.$Message.error('Fail!');
      }
    })
  };
  private getWc(keyWord: string): void {
    if (keyWord !== '') {
        this.loading = true;
        this.$axios.get('/toilet/toiletManage/toilet/list', {params: this.user.toiletId}).then((resp) => {
          const respData = resp.data;
          if (respData.code === 2000) {
            this.loading = false;
            const list = respData.data.map((item: any) => {
              return {
                value: item.toiletid,
                label: item.name,
              };
            });
            this.options1 = list.filter((item: any) => item.label.toLowerCase().indexOf(keyWord.toLowerCase()) > -1);
          } else {
            this.options1 = [];
          }
        }).catch((e) => {
          this.$Message.error(e);
        });
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

