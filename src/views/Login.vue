<template>
  <div class="login">
    <div class="ai-container">
      <div class="login-box">
        <div class="login-box-title title-lg">智慧公厕后台管理系统</div>
        <Form ref="loginForm" :model="user" :rules="inputRules">
          <FormItem prop="name">
            <Input type="text" v-model.trim="user.name" placeholder="Username" prefix="ios-person-outline"/>
          </FormItem>
          <FormItem prop="pwd">
            <Input type="password" v-model="user.pwd" placeholder="Password" prefix="ios-lock-outline"/>
          </FormItem>
          <!-- <FormItem>
            <Row type="flex" justify="space-between">
              <Checkbox v-model="user.autolog">自动登录</Checkbox>
              <router-link to="">忘记密码</router-link>
            </Row>
          </FormItem> -->
          <FormItem>
            <Button type="primary" @click="handleSubmit('loginForm')" long>登录</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Form } from 'iview';

@Component
export default class Login extends Vue {
  private user: any = {
    name: '',
    pwd: '',
    // autolog: false
  };
  @Action('login') private userLogin: any;

  private inputRules:any = {
    name: [{
      required: true,
      message: 'Please fill in the user name',
      trigger: 'blur',
    }],
    pwd: [{
      required: true,
      message: 'Please fill in the password.',
      trigger: 'blur',
    },{
      type: 'string', 
      min: 4, 
      message: 'The password length cannot be less than 6 bits', 
      trigger: 'blur'
    }]
  };

  private handleSubmit(name: string): void {
    (<Form>this.$refs[name]).validate((valid?: boolean): void => {
      if (valid) {
        this.userLogin(this);
      } else {
        this.$Message.error('Fail!');
      }
    })
  }

}
</script>

<style lang="scss" scoped>
.login{
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  &-box{
    width: 400px;
    margin: 0 auto;
    margin-top: -100px;
    &-title{
      text-align: center;
      margin-bottom: 60px;
    }
  }
}
</style>


