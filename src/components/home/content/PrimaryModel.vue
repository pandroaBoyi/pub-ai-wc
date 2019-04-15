<template>
  <div class="common-model">
    <div class="common-model-header">
      <div class="common-model-header-left">
        <slot name="header-left"></slot>
      </div>
      <div class="common-model-header-right">
        <slot name="header-right"></slot>
      </div>
      <slot name="header"></slot>
    </div>
    <div class="common-model-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CommonModel extends Vue {

}
</script>

<style lang="scss" scoped>
.common-model{
  background: #fff;
  padding: 20px;
  border-radius: 6px;
  &-header{
    overflow: hidden;
    &-left{
      float: left;
    }
    &-right{
      float: right;
    }
  }
  &-content{
    margin-top: 20px;
  }
}
</style>


