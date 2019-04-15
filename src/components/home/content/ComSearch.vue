<template>
  <div class="com-search">
    <div class="com-search-ipt">
      <Select
        v-model="wcName"
        filterable
        remote
        multiple
        :remote-method="searchName"
        :loading="loading"
        @on-change="handlerChange">
        <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
      </Select>
    </div>
    <div class="com-search-choose">
      <div class="com-search-choose-check">
        <span>{{wcName}}</span>
        <icon type="ios-close" size="22"></icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';

const userModule = namespace('sysUser');

@Component({
  components: {

  }
})
export default class ComSearch extends Vue {
  private wcName: string = '';
  private loading: boolean = false;
  private list: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado'];
  private selList: string[] = [];
  private options1: any[] = [];
  
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

  private handlerChange(): void {

  }
}
</script>

<style lang="scss" scoped>
.com-search{
  &-choose{
    &-check{
      display: inline-block;
      height: 22px;
      line-height: 22px;
      padding: 0 8px;
      border: 1px solid $dividLine;
      border-radius: 4px;
      background: #f7f7f7;
      vertical-align: middle;
      overflow: hidden;
      cursor: pointer;
      i{
        vertical-align: top;
      }
    }
  }
}
</style>
