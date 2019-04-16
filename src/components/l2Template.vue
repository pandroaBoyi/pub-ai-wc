<template>
  <secondary-model>
    <template slot="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem >{{$NAV_CONST.WC}}</BreadcrumbItem>
        <BreadcrumbItem :to="{name: $UNAME_CONST.WC_FIX}">{{$NAV_CONST.WC_FIX}}</BreadcrumbItem>
        <BreadcrumbItem v-if="true">{{$NAV_CONST.WC_FIX_ADD}}</BreadcrumbItem>
        <BreadcrumbItem >{{$NAV_CONST.WC_FIX_UPDATE}}</BreadcrumbItem>
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
export default class SysRole extends Vue {

}
</script>

<style lang="scss" scoped>

</style>