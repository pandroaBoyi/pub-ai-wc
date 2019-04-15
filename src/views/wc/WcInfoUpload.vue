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
          <info-upload-tab v-if="upList.length > 0"/>
          <info-upload v-else/>
        </transition>
      </div>
    </template>
  </secondary-model>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, namespace } from 'vuex-class';
import { WcInfo } from '@/types';
import SecondaryModel from '@/components/home/content/SecondaryModel.vue';
import InfoUpload from '@/components/home/content/wc/info/upload/InfoUpload.vue';
import InfoUploadTab from '@/components/home/content/wc/info/upload/InfoUploadTab.vue';
import { wcInfo } from '@/util/const/namespace';

@Component({
  components: {
    SecondaryModel,
    InfoUpload,
    InfoUploadTab
  }
})
export default class SysUserUpload extends Vue {
  @wcInfo.State('upList') private upList!: WcInfo[];
}
</script>

<style lang="scss" scoped>
.upload-block{
  position: relative;
}
</style>
