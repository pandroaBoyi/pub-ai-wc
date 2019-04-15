<template>
  <div class="upload-tab">
    <div class="upload-tab-header ai-text">
      您一共上传了{{data.length}}条数据，共{{errLen}}条错误
    </div>
    <div class="upload-tab-content">
      <Table :columns="cols" :data="data" class="upload-tab-content-tab"></Table>
      <div class="ai-text-assist upload-tab-content-notice">*错误类型：编号重复、电话号码重复、号码错误、密码错误（6~16位字符）</div>
    </div>
    <div class="upload-tab-footer">
      <Button class="ai-btn" @click="reUpload">重新上传</Button>
      <Button class="ai-btn" type="primary" :disabled="errLen > 0">保存</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class ComUploadTab extends Vue {
  @Prop({default: () => {return []}}) private readonly cols!: Array<any>;
  @Prop({default: () => {return []}}) private readonly data!: Array<any>;
  @Prop({default: 0}) private readonly errLen!: number;
  @Emit()
  private reUpload(): void {}
}
</script>

<style lang="scss" scoped>
.upload-tab{
  &-header{
    background: $main;
    color: #fff;
    padding: 10px;
  }
  &-content{
    &-tab{
      max-height: 300px;
    }
    &-notice{
      margin-top: 20px;
    }
  }
  &-footer{
    margin-top: 50px;
    text-align: center;
    &>button + button{
      margin-left: 24px;
    }
  }
}
</style>
