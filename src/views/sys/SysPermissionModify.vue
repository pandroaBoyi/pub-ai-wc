<template>
  <secondary-model>
    <template slot="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem >{{$NAV_CONST.SYS}}</BreadcrumbItem>
        <BreadcrumbItem :to="{name: $UNAME_CONST.SYS_ROLE}">{{$NAV_CONST.SYS_ROLE}}</BreadcrumbItem>
        <BreadcrumbItem v-if="true">{{$NAV_CONST.SYS_ROLE_ADD}}</BreadcrumbItem>
        <BreadcrumbItem v-else>{{$NAV_CONST.SYS_ROLE_UPDATE}}</BreadcrumbItem>
      </Breadcrumb>
    </template>
    <template slot="content">
      <Form :model="role" :rules="ruleValidate" ref="role" :label-width="80" class="role-form">
        <FormItem label="角色名称:" prop="name" class="role-form-ipt">
          <Input v-model="role.name" placeholder="请输入角色名称"></Input>
        </FormItem>
        <FormItem label="角色描述:" prop="desc" class="role-form-ipt">
          <Input v-model="role.name" placeholder="请输入角色描述" type="textarea" :rows="4"></Input>
        </FormItem>
        <FormItem label="选择权限:" prop="permission" class="role-form-ipt">
          <Button  @click="choosePermission" class="ai-btn">选择角色</Button>
        </FormItem>
        <Divider/>
        <FormItem class="role-form-btn">
          <Button :to="{name: $UNAME_CONST.SYS_Permission}" class="ai-btn">取消</Button>
          <Button type="primary" @click="handleSubmit('role')" class="ai-btn">确定</Button>
        </FormItem>
      </Form>
      <Modal
        v-model="show"
        title="角色选择"
        @on-ok="handleConfirm">
         <Tree :data="data2" show-checkbox empty-text="获取角色列表失败" ref="roleTree"></Tree>
    </Modal>
    </template>
  </secondary-model>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import SecondaryModel from '@/components/home/content/SecondaryModel.vue'
import { } from '@/util/const/namespace';
import { Form, Tree } from 'iview';

@Component({
  components: {
    SecondaryModel
  }
})
export default class SysRoleModify extends Vue {
  private show: boolean = false;
  private role: any = {
    name: '',
    desc: '',
    permission: []
  };
  private ruleValidate: any = {
    name: [
      {
        required: true,
        message: '角色名称不能为空'
      }
    ]
  };
  private data2: any = [
    {
      title: 'parent 1',
      expand: true,
      children: [
        {
          title: 'parent 1-1',
          expand: true,
          children: [
            {
              title: 'leaf 1-1-1'
            },
            {
              title: 'leaf 1-1-2'
            }
          ]
        },
        {
          title: 'parent 1-2',
          expand: true,
          children: [
            {
              title: 'leaf 1-2-1'
            },
            {
              title: 'leaf 1-2-1'
            }
          ]
        }
      ]
    }
  ]
  private handleSubmit(name: string): void {
    (<Form>this.$refs[name]).validate((valid?: boolean): void => {
      if (valid) {
      } else {
        this.$Message.error('Fail!');
      }
    })
  };
  private choosePermission(): void {
    this.show = true;
  };
  private handleConfirm(): void {
    console.log((<Tree>this.$refs.roleTree).getCheckedNodes());
  }
}
</script>

<style lang="scss" scoped>
.role-form{
  &-ipt{
    width: 30%;
  }
  &-btn{
    a{
      margin-right: 24px;
    }
  }
}
</style>