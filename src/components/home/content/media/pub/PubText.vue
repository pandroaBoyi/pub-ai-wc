<template>
  <Form :model="text" ref="text" :label-width="60" class="media-form">
    <FormItem label="标题" name="media_name" class="media-form-ipt">
      <Input v-model="text.media_name" placeholder="请输入文本名称"></Input>
    </FormItem>
    <FormItem label="内容" name="uname" class="media-form-ipt">
      <Input v-model="text.media_contentorurl" placeholder="请输入内容" type="textarea" :rows="4"></Input>
    </FormItem>
    <FormItem label="循环间隔" name="cyc_interval" class="media-form-radio">
      <RadioGroup v-model="text.cyc_interval">
        <Radio label="半点">半点</Radio>
        <Radio label="整点">整点</Radio>
        <Radio label="一直">一直</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="审核人" name="auditor_id" class="media-form-sel">
      <Select v-model="text.auditor_id">
        <Option value="超级管理员">超级管理员</Option>
        <Option value="所长">所长</Option>
      </Select>
    </FormItem>
    <FormItem label="公厕分配" name="toilets_id" class="media-form-ipt">
      <Select
        v-model="text.toilets_id"
        filterable
        remote
        multiple
        transfer
        :remote-method="searchName"
        :loading="loading">
        <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
      </Select>
    </FormItem>
    <Divider/>
    <FormItem class="media-form-btn">
      <Button type="primary" @click="handleSubmit('text')" class="ai-btn">提交</Button>
      <Button :to="$URL_CONST.SYS_USER" class="ai-btn">取消</Button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import { Form } from 'iview';
import { MediaUpload } from '@/types';

const textModule = namespace('sysUser');

@Component({
  components: {
  }
})
export default class PubText extends Vue {
  private text: MediaUpload = {
    media_name: '',
    media_content: '',
    media_type: 1,
    cyc_interval: '半点',
    auditor_id: '',
    toilets_id: ''
  }
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
}
</script>

<style lang="scss" scoped>
</style>