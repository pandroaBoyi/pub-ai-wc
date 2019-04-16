<template>
  <secondary-model>
    <template slot="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem >{{$NAV_CONST.WC}}</BreadcrumbItem>
        <BreadcrumbItem :to="{name: $UNAME_CONST.WC_FIX}">{{$NAV_CONST.WC_FIX}}</BreadcrumbItem>
        <BreadcrumbItem v-if="true">{{$NAV_CONST.WC_FIX_ADD}}</BreadcrumbItem>
        <BreadcrumbItem v-else>{{$NAV_CONST.WC_FIX_UPDATE}}</BreadcrumbItem>
      </Breadcrumb>
    </template>
    <template slot="content">
      <Form :model="wc" :rules="ruleValidate" ref="wc" :label-width="60" class="wc-form">
        <FormItem label="报修时间" name="date" class="wc-form-ipt">
          <DatePicker type="date" placeholder="选择报修日期" v-model="wc.date"></DatePicker>
        </FormItem>
        <FormItem label="编号" name="uname" class="wc-form-ipt">
          <Input v-model="wc.uname" placeholder="请输入公测编号"></Input>
        </FormItem>
        <FormItem label="公厕名称" name="phone" class="wc-form-ipt">
          <Input v-model="wc.phone" placeholder="请输入公厕名称"></Input>
        </FormItem>
        <FormItem label="所长" name="password" class="wc-form-ipt">
          <Input v-model="wc.password" placeholder="请输入所长吗名称"></Input>
        </FormItem>
        <FormItem label="性别" name="sex" class="wc-form-radio">
          <RadioGroup v-model="wc.sex">
            <Radio label="男">男</Radio>
            <Radio label="女">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="账号状态" name="status" class="wc-form-radio">
          <RadioGroup v-model="wc.status">
            <Radio label="1">启用</Radio>
            <Radio label="0">禁用</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem class="wc-form-btn">
          <Button type="primary" @click="handleSubmit('wc')" class="ai-btn">确定</Button>
          <Button :to="$UNAME_CONST.SYS_USER" class="ai-btn">取消</Button>
        </FormItem>
      </Form>
    </template>
  </secondary-model>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import SecondaryModel from '@/components/home/content/SecondaryModel.vue'
import { WcFix } from '@/types';
import { Form } from 'iview';

const wcModule = namespace('sysUser');

@Component({
  components: {
    SecondaryModel
  }
})
export default class WcFixModify extends Vue {
  private wc: WcFix = {
    date: '',
    uname: '',
    phone: '',
    password: '',
    sex: '男',
    status: '1',
    roleid: '',
    CreateUserId: ''
  }
  private ruleValidate: any = {};
  private handleSubmit(name: string): void {
    (<Form>this.$refs[name]).validate((valid?: boolean): void => {
      if (valid) {

      } else {
        this.$Message.error('Fail!');
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.wc-form{
  &-ipt{
    width: 30%;
  }
}
</style>