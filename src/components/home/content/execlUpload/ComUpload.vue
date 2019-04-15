<template>
  <div class="com-upload">
    <div 
      class="com-upload-content" 
      :class="classes"
      @click="handleClick" 
      @drop.prevent="onDrop"
      @dragover.prevent="dragOver = true"
      @dragleave.prevent="dragOver = false">
      <input 
        ref="input" 
        type="file" 
        @change="handleChange"
        :accept="accept"/>
      <slot></slot>
    </div>
    <!-- <com-upload-progress :files="fileList"></com-upload-progress> -->
    <Spin fix size="large" v-if="loading"></Spin>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
// import { VirtualFile } from '@/types';
// import ComUploadProgress from '@/components/home/content/ComUploadProgress.vue';

@Component
export default class ComUpload extends Vue {
  @Prop() private readonly accept!: string;
  @Prop({type: Array, default: () => { return [] }}) private readonly format!: string[];
  @Prop()private readonly maxSize!: number;
  @Prop({default: false})private readonly loading!: boolean;
  @Prop({type: Array, default: () => { return []}}) private readonly keys!: string[];
  @Prop({type: Function, default: () => { return {}}}) private readonly onFormatError!: Function;
  @Prop({type: Function, default: () => { return {}}}) private readonly onExceededSize!: Function;
  @Prop({type: Function, default: () => { return {}}}) private readonly onSuccess!: Function;
  @Prop({type: Function, default: () => { return {}}}) private readonly onError!: Function;
  @Prop({type: Function, default: () => { return {}}}) private readonly onExeclData!: Function;
  @Prop({type: Function, default: () => { return {}}}) private readonly onClick!: Function;
  private dragOver: boolean = false;
  // private fileList: Array<any> = [];
  // private tempIndex: number = 1;

  private handleClick (): void {
    (<HTMLElement>this.$refs.input).click();
  }

  private handleChange (e: Event): void {
    let files = (<HTMLInputElement>e.target!).files;

    if (!files) {
      return;
    }
    this.onClick();
    this.analyzUpload(files);
    (<HTMLInputElement>this.$refs.input).value = '';
  }

  private onDrop (e: DragEvent): void {
    this.dragOver = false;
    this.analyzUpload(e.dataTransfer!.files);
  }

  get classes () {
    return [this.dragOver ? 'com-upload-content-drag' : ''];
  }

  private analyzUpload (upFiles: FileList){
    let files: File[] = Array.prototype.slice.call(upFiles);
    if (files.length === 0) return;
    if (files.length > 1) {
      files = files.slice(0, 1);
    }
    for (const file of files) {
      if (this.format.length) {
        const fileSuffix: string = file.name.split('.').pop()!.toLocaleLowerCase();
        const checked: boolean = this.format.some(item => item.toLocaleLowerCase() === fileSuffix);
        if (!checked) {
          this.onFormatError(file);
          return;
        }
      }
      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.onExceededSize(file);
          return;
        }
      }
      // this.loading = true;
      // this.handleStart(file);
      this.anaylzFile(file);
    }
    return false;
  }
  private  anaylzFile (file: File): void{
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    let fileData: string[] = [];
    reader.onload = (e) => {
      /* Parse data */
      const that= this;
      const bstr = (<FileReader>e.target!).result;
      const wb = that.$xlsx.read(bstr, {type:'binary'});
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = that.$xlsx.utils.sheet_to_json(ws, {header: that.keys});
      /* Update state */
      if (data) {
        fileData = Array.prototype.slice.call(data);
      }
      if (fileData.length > 2) {
        this.$Notice.success({
            title: '数据提取成功',
          });
        // this.loading = false;
        this.onExeclData(fileData);
      } else {
        this.$Notice.error({
          title: '数据提取失败',
          desc: `您上传的文件<b>${file.name}</b>数据提取失败，请检查数据是否为空或请重新上传`,
        });
      }
    };
    reader.readAsBinaryString(file);
  }

  private handleSuccess(file: any): void {
    // const _file: VirtualFile = this.getFile(file);
    // if (_file) {
    //     _file.status = 'finished';

    //     setTimeout(() => {
    //         _file.showProgress = false;
    //     }, 1000);
    // }
  }

  private handleError(): void {

  }

  // private handleStart (file: any): void {
  //     file.uid = Date.now() + this.tempIndex++;
  //     const _file: VirtualFile = {
  //         status: 'uploading',
  //         name: file.name,
  //         size: file.size,
  //         percentage: 0,
  //         uid: file.uid,
  //         showProgress: true
  //     };
  //     this.fileList.push(_file);
  // }

  // private getFile (file: any): VirtualFile{
  //     const fileList = this.fileList;
  //     let target: VirtualFile = {};
  //     this.fileList.every(item => {
  //         target = file.uid === item.uid ? item : null;
  //         return !target;
  //     });
  //     return target;
  // }
}
</script>

<style lang="scss" scoped>
.com-upload{
  &-content{
    text-align: center;
    border: 1px dashed $border;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color .4s ease;
    overflow: hidden;

    &-drag{
      border: 2px dashed $main;
    }

    &:hover{
      border-color: $main;
    }

    

    input[type="file"]{
      display: none;
    }
  }
}
</style>
