<template>
  <div class="pub-pic">
    <div class="pub-pic-up">
      <div class="pub-pic-up-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="pub-pic-up-list-cover">
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
      </div>
      <Upload
          ref="upload"
          type="drag"
          :show-upload-list="true"
          accept=".jpg,.jpeg,.png"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleExceededSize"
          action="http://10.0.0.161:8090/upload/ajaxUpload"
          class="pub-pic-up-content">
          <div class="pub-pic-up-content-body">
            <Icon type="ios-cloud-upload-outline" size="30"></Icon>
            <p>点击此处上传图片, 图片大小不得超过2MB</p>
          </div>
      </Upload>
    </div>
    <Divider/>
    <Form :model="pic" ref="pic" :label-width="60" class="media-form">
        <FormItem label="图片名称" name="media_name" class="media-form-ipt">
          <Input v-model="pic.media_name" placeholder="请输入图片名称"></Input>
        </FormItem>
        <FormItem label="循环间隔" name="cyc_interval" class="media-form-radio">
          <RadioGroup v-model="pic.cyc_interval">
            <Radio label="半点">半点</Radio>
            <Radio label="整点">整点</Radio>
            <Radio label="一直">一直</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="审核人" name="auditor_id" class="media-form-sel">
          <Select v-model="pic.auditor_id">
            <Option value="超级管理员">超级管理员</Option>
            <Option value="所长">所长</Option>
          </Select>
        </FormItem>
        <FormItem label="公厕分配" name="toilets_id" class="media-form-ipt">
          <Select
            v-model="pic.toilets_id"
            filterable
            remote
            multiple
            transfer
            :remote-method="searchName"
            :loading="loading">
            <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
          </Select>
        </FormItem>
        <Divider />
        <FormItem class="media-form-btn">
          <Button type="primary" @click="handleSubmit('pic')" class="ai-btn">提交</Button>
          <Button :to="$.SYS_USER" class="ai-btn">取消</Button>
        </FormItem>
      </Form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import { Upload, Form } from 'iview';
import { MediaUpload } from '@/types';

const userModule = namespace('sysUser');

@Component({
  components: {
    
  }
})
export default class PubPic extends Vue {
  private uploadList: File[] = [];
  private pic: MediaUpload = {
    media_name: '',
    media_type: 1,
    cyc_interval: '半点',
    auditor_id: '',
    toilets_id: ''
  };
  private loading: boolean = false;
  private options1: any[] = [];
  private list: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado','Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',];
  private handleSubmit(name: string): void {
    (<Form>this.$refs[name]).validate((valid?: boolean): void => {
      if (valid) {

      } else {
        this.$Message.error('Fail!');
      }
    })
  }
  private searchName(keyWord: string) : void {
    if (keyWord !== '') {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            const list = this.list.map(item => {
                return {
                    value: item,
                    label: item
                };
            });
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(keyWord.toLowerCase()) > -1);
        }, 200);
    } else {
        this.options1 = [];
    }
  }
  private handleRemove (file: File) {
    const fileList = (<Upload>this.$refs.upload).fileList;
    (<Upload>this.$refs.upload).fileList.splice(fileList.indexOf(file), 1);
  }
  private handleFormatError (file: File): void {
  this.$Notice.warning({
    title: '文件格式有误',
    desc: `您上传的文件<b>${file.name}</b>格式有误，请重新上传`,
  });
}
  private handleExceededSize (file: File): void {
    this.$Notice.warning({
      title: '文件大小超出限制',
      desc: `您上传的文件<b>${file.name}</b>超出了2MB，请上传较小文件`,
    });
  }
}
</script>

<style lang="scss" scoped>
.pub-pic{
  padding: 20px;
  &-up{
    &-list{
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      border: 1px solid transparent;
      border-radius: 4px;
      overflow: hidden;
      background: #fff;
      position: relative;
      box-shadow: 0 1px 1px rgba(0,0,0,.2);
      margin-right: 4px;

      img{
        width: 100%;
        height: 100%;
      }

      &-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);

        i{
          color: #fff;
          font-size: 20px;
          cursor: pointer;
          margin: 0 2px;
        }
      }
      &:hover &-cover{
        display: block;
      }
    }
    &-content{
      display: inline-block;
      color: #000;
      &-body{
        width: 150px;
        height: 150px;
        padding-top: 50px;
        i{
          color: $main;
        }
        p{
          font-size: 12px;
          color: $assist;
        }
      }
    }
  }
}
</style>