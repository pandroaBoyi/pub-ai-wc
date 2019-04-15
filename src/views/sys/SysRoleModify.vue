<template>
  <secondary-model>
    <template slot="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem >{{$NAV_CONST.SYS}}</BreadcrumbItem>
        <BreadcrumbItem :to="$URL_CONST.SYS_ROLE">{{$NAV_CONST.SYS_ROLE}}</BreadcrumbItem>
        <BreadcrumbItem v-if="true">{{$NAV_CONST.SYS_ROLE_ADD}}</BreadcrumbItem>
        <BreadcrumbItem v-else>{{$NAV_CONST.SYS_ROLE_UPDATE}}</BreadcrumbItem>
      </Breadcrumb>
    </template>
    <template slot="content"></template>
  </secondary-model>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import SecondaryModel from '@/components/home/content/SecondaryModel.vue'

const userModule = namespace('sysUser');

@Component({
  components: {
    SecondaryModel
  }
})
export default class SysRoleModify extends Vue {

}
</script>

<style lang="scss" scoped>

</style>