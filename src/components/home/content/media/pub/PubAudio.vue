<template>
  <div class="pub-audio">
    <div class="pub-audio-up">
      <Upload
          ref="upload"
          :show-upload-list="true"
          accept=".mp3"
          :format="['mp3']"
          :max-size="2048"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleExceededSize"
          action="http://10.0.0.161:8090/upload/ajaxUpload"
          class="pub-audio-up-content">
          <div class="pub-audio-up-content-body" style="padding:20px">
            <Button icon="ios-cloud-upload-outline">点击此处上传音频</Button>
            <span>注意：音频大小不得超过10MB</span>
          </div>
      </Upload>
    </div>
    <Divider/>
    <Form :model="audio" ref="audio" :label-width="60" class="media-form">
        <FormItem label="图片名称" name="media_name" class="media-form-ipt">
          <Input v-model="audio.media_name" placeholder="请输入图片名称"></Input>
        </FormItem>
        <FormItem label="循环间隔" name="cyc_interval" class="media-form-radio">
          <RadioGroup v-model="audio.cyc_interval">
            <Radio label="半点">半点</Radio>
            <Radio label="整点">整点</Radio>
            <Radio label="一直">一直</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="审核人" name="auditor_id" class="media-form-sel">
          <Select v-model="audio.auditor_id">
            <Option value="超级管理员">超级管理员</Option>
            <Option value="所长">所长</Option>
          </Select>
        </FormItem>
        <FormItem label="公厕分配" name="toilets_id" class="media-form-ipt">
          <Select
            v-model="audio.toilets_id"
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
          <Button type="primary" @click="handleSubmit('audio')" class="ai-btn">提交</Button>
          <Button :to="{name: $UNAME_CONST.SYS_USER}" class="ai-btn">取消</Button>
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
  private audio: MediaUpload = {
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
.pub-audio{
  &-up{
    &-content{
      &-body{
        span{
          font-size: 12px;
          color: $assist;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>