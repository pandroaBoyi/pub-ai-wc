<template>
  <secondary-model>
    <template slot="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem >{{$NAV_CONST.WC}}</BreadcrumbItem>
        <BreadcrumbItem :to="{name: $UNAME_CONST.WC_INFO}">{{$NAV_CONST.WC_INFO}}</BreadcrumbItem>
        <BreadcrumbItem v-if="true">{{$NAV_CONST.WC_INFO_ADD}}</BreadcrumbItem>
        <BreadcrumbItem v-else>{{$NAV_CONST.WC_INFO_UPDATE}}</BreadcrumbItem>
      </Breadcrumb>
    </template>
    <template slot="content">
      <Form :model="wc" :rules="ruleValidate" ref="wc" :label-width="80" class="wc-form">
        <FormItem label="编号" prop="codeId" class="wc-form-ipt">
          <Input v-model="wc.codeId" placeholder="请输入编号"></Input>
        </FormItem>
        <FormItem label="公厕名称" prop="name" class="wc-form-ipt">
          <Input v-model="wc.name" placeholder="请输入公测名称"></Input>
        </FormItem>
        <FormItem label="公厕地址" prop="address" class="wc-form-ipt">
          <Input v-model="wc.address" placeholder="请输入公厕地址"></Input>
        </FormItem>
        <Row type="flex">
          <FormItem label="经度" prop="longitude" class="wc-form-ipt-short">
            <Input v-model="wc.longitude" ></Input>
          </FormItem>
          <FormItem label="纬度" prop="latitude" class="wc-form-ipt-short">
            <Input v-model="wc.latitude" ></Input>
          </FormItem>
        </Row>
        <FormItem label="公厕类型" prop="level" class="wc-form-sel">
          <wc-cascader :data.sync="wc.level"></wc-cascader>
        </FormItem>
        <FormItem label="所长" prop="status" class="wc-form-ipt">
           <Input v-model="wc.managerName" placeholder="请输入所长名字"></Input>
        </FormItem>
        <FormItem label="添加厕位" prop="place" class="wc-form-tree">
           <!-- <Tree :data="data4" show-checkbox multiple ref="tree"></Tree> -->
           <wc-type-checkbox :lists.sync="wc.place"></wc-type-checkbox>
        </FormItem>
        <FormItem class="wc-form-btn">
          <Button :to="$UNAME_CONST.WC_INFO" class="ai-btn">取消</Button>
          <Button type="primary" @click="handleSubmit('wc')" class="ai-btn">确定</Button>
        </FormItem>
      </Form>
    </template>
  </secondary-model>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import SecondaryModel from '@/components/home/content/SecondaryModel.vue';
import WcCascader from '@/components/home/content/wc/info/WcCascader.vue';
import WcTypeCheckbox from '@/components/home/content/wc/info/WcTypeCheckbox.vue';
import { Wc, IviewTree } from '../../types';
import { Form, Tree } from 'iview';
import { wcInfo } from '@/util/const/namespace';

Component.registerHooks([
  'beforeRouteEnter'
])

@Component({
  components: {
    SecondaryModel,
    WcCascader,
    WcTypeCheckbox
  }
})
export default class WcInfoModify extends Vue {
  @wcInfo.Action('wcModify') private wcModify!: Function;
  @wcInfo.State('wcList') private wcList!: Wc[];
  private wc: Wc = {
    toiletid: '',
    codeId: '',
    name: '',
    address: '',
    longitude: '',
    latitude: '',
    level: [],
    managerName: '',
    place: []
  };
  private ruleValidate: Wc = {
    codeId: [
      {
        required: true,
        message: '编号不能为空'
      }
    ],
    name: [
      {
        required: true,
        message:'公厕名称不能为空',
      }
    ],
    address: [
      {
        required: true,
        message: '公厕地址不能为空',
      }
    ],
    level: [
      {
        required: true,
        message: '请选择公厕类型'
      }
    ],
    place: [
      {
        required: true,
        message: '请选择厕位'
      },
    ]
  };
  private handleSubmit(name: string): void {
    (<Form>this.$refs[name]).validate((valid?: boolean): void => {
      if (valid) {
        this.wcModify(this.wc);
      } else {
        this.$Message.error('Fail!');
      }
    })
  };
  beforeRouteEnter (to: any, from: any, next: any) {
    const id = to.params.id;
    next((vm: WcInfoModify): void => {
      if (id !== 'add') {
        for (const wcIns of vm.wcList) {
          if (wcIns.toiletid === id) {
            vm.wc = wcIns;
          }
        }
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.wc-form{
  &-ipt{
    width: 30%;
    &-short{
      width: 15%;
    }
  }
  &-sel{
    width: 30%;
  }
  &-btn{
    a{
      margin-right: 24px;
    }
  }
  &-tree{
    width: 80%;
  }
}
</style>