<template>
  <secondary-model>
    <template slot="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem >{{$NAV_CONST.WC}}</BreadcrumbItem>
        <BreadcrumbItem :to="$URL_CONST.WC_INFO">{{$NAV_CONST.WC_INFO}}</BreadcrumbItem>
        <BreadcrumbItem v-if="true">{{$NAV_CONST.WC_INFO_ADD}}</BreadcrumbItem>
        <BreadcrumbItem v-else>{{$NAV_CONST.WC_INFO_UPDATE}}</BreadcrumbItem>
      </Breadcrumb>
    </template>
    <template slot="content">
      <Form :model="wc" :rules="ruleValidate" ref="wc" :label-width="60" class="wc-form">
        <FormItem label="编号" name="codeId" class="wc-form-ipt">
          <Input v-model="wc.codeId" placeholder="请输入编号"></Input>
        </FormItem>
        <FormItem label="公厕名称" name="name" class="wc-form-ipt">
          <Input v-model="wc.name" placeholder="请输入公测名称"></Input>
        </FormItem>
        <FormItem label="公厕地址" name="address" class="wc-form-ipt">
          <Input v-model="wc.address" placeholder="请输入公厕地址"></Input>
        </FormItem>
        <Row type="flex">
          <FormItem label="经度" name="longitude" class="wc-form-ipt-short">
            <Input v-model="wc.longitude" ></Input>
          </FormItem>
          <FormItem label="纬度" name="latitude" class="wc-form-ipt-short">
            <Input v-model="wc.latitude" ></Input>
          </FormItem>
        </Row>
        <FormItem label="公厕类型" name="level" class="wc-form-sel">
          <wc-cascader :data.sync="wc.level"></wc-cascader>
        </FormItem>
        <FormItem label="所长" name="status" class="wc-form-ipt">
           <Input v-model="wc.managerName" placeholder="请输入所长名字"></Input>
        </FormItem>
        <FormItem label="添加厕位" name="place" class="wc-form-tree">
           <!-- <Tree :data="data4" show-checkbox multiple ref="tree"></Tree> -->
           <wc-type-checkbox></wc-type-checkbox>
        </FormItem>
        <FormItem class="wc-form-btn">
          <Button :to="$URL_CONST.WC_INFO" class="ai-btn">取消</Button>
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

const wcUpModule = namespace('wcUpload');

@Component({
  components: {
    SecondaryModel,
    WcCascader,
    WcTypeCheckbox
  }
})
export default class WcInfoModify extends Vue {
  private wc: Wc = {
    codeId: '',
    name: '',
    address: '',
    longitude: '',
    latitude: '',
    level: [],
    managerName: '',
    place: []
  };
  private data4: IviewTree[] = [
    {
      title: '男厕',
      children: [
        {
          title: '蹲位',
          children: []
        },
        {
          title: '坐位',
          children: []
        },
        {
          title: '小便池',
          children: []
        },
        {
          title: '无障碍厕位',
          children: []
        },
      ]
    },
    {
      title: '女厕',
      children: [
        {
          title: '蹲位',
          children: []
        },
        {
          title: '坐位',
          children: []
        },
        {
          title: '无障碍厕位',
          children: []
        },
      ]
    },
    {
      title: '母婴室',
      children: [
        {
          title: '女厕母婴室',
          children: []
        },
        {
          title: '独立母婴室',
          children: []
        },
      ]
    },
    {
      title: '第三卫生间',
      children: [
        {
          title: '坐位',
          children: []
        }
      ]
    },
  ];
  private ruleValidate: any = {};
  private handleSubmit(name: string): void {
    console.log(1);
    console.log((<Tree>this.$refs.tree).getCheckedNodes());
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