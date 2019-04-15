<template>
  <secondary-model>
    <template slot="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem >{{$NAV_CONST.WC}}</BreadcrumbItem>
        <BreadcrumbItem :to="$URL_CONST.WC_INFO">{{$NAV_CONST.WC_INFO}}</BreadcrumbItem>
        <BreadcrumbItem :to="$URL_CONST.WC_INFO_UPLOAD">{{$NAV_CONST.WC_INFO_UPLOAD}}</BreadcrumbItem>
      </Breadcrumb>
    </template>
    <template slot="content">
      <div class="upload-block">
        <transition name="fade" mode="out-in">
          <user-upload-tab v-if="users.length > 0"/>
          <user-upload v-else/>
        </transition>
      </div>
    </template>
  </secondary-model>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, namespace } from 'vuex-class';
import { User } from '@/types';
import SecondaryModel from '@/components/home/content/SecondaryModel.vue';
import UserUpload from '@/components/home/content/sys/user/upload/UserUpload.vue';
import UserUploadTab from '@/components/home/content/sys/user/upload/UserUploadTab.vue';

const userModule = namespace('sysUser');

@Component({
  components: {
    SecondaryModel,
    UserUpload,
    UserUploadTab
  }
})
export default class SysUserUpload extends Vue {
  @userModule.State('uploadLists') private users!: User[];
}
</script>

<style lang="scss" scoped>
.upload-block{
  position: relative;
}
</style>
