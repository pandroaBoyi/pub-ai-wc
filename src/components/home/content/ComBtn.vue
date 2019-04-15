<template>
  <div class="com-btn">
    <Button type="primary" icon="md-add" class="ai-btn" :to="addPath">新建</Button>
    <Button class="ai-btn" :to="impPath">批量导入</Button>
    <Button class="ai-btn" @click="batchRemove">批量删除</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
@Component
export default class ComBtn extends Vue {
  @Prop() private readonly addPath!: string; 
  @Prop() private readonly impPath!: string; 
  @Emit()
  private batchRemove () {}
}
</script>

<style lang="scss" scoped>
.com-btn{
  &>* + *{
    margin-left: 16px;
  }
}
</style>


