<template>
  <secondary-model>
    <template slot="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem >{{$NAV_CONST.SYS}}</BreadcrumbItem>
        <BreadcrumbItem :to="{name: $UNAME_CONST.SYS_USER}">{{$NAV_CONST.SYS_USER}}</BreadcrumbItem>
        <BreadcrumbItem v-if="true">{{$NAV_CONST.SYS_USER_ADD}}</BreadcrumbItem>
        <BreadcrumbItem v-else>{{$NAV_CONST.SYS_USER_UPDATE}}</BreadcrumbItem>
      </Breadcrumb>
    </template>
    <template slot="content">
      <div class="modify-block">
        <user-form></user-form>
      </div>
    </template>
  </secondary-model>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, namespace } from 'vuex-class';
import SecondaryModel from '@/components/home/content/SecondaryModel.vue';
import UserForm from '@/components/home/content/sys/user/modify/UserForm.vue';

const userModule = namespace('sysUser');

@Component({
  components: {
    SecondaryModel,
    UserForm
  }
})
export default class SysUserAdd extends Vue {

}
</script>

<style lang="scss" scoped>
.modify-block{
  
}
</style>
