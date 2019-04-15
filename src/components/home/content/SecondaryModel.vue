<template>
  <div class="sub-model">
    <div class="sub-model-header">
      <slot name="header"></slot>
    </div>
    <div class="sub-model-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SubModel extends Vue {

}
</script>

<style lang="scss" scoped>
.sub-model{
  &-header, &-content{
    background: #fff;
  }
  &-header{
    margin: -10px -20px 0 -20px;
    padding: 20px;
  }
  &-content{
    margin-top: 20px;
    padding: 20px;
  }
}
</style>


