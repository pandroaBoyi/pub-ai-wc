<template>
  <primary-model>
    <template slot="header-right">
      <div class="header-search">
        <span clas="">类型：</span>
        <Select v-model="type" class="header-search-sel">
          <Option value="文本">文本</Option>
          <Option value="图片">图片</Option>
          <Option value="音频">音频</Option>
          <Option value="视频">视频</Option>
        </Select>
        <Button type="primary" @click="searchData" class="ai-btn">查询</Button>
      </div>
    </template>
    <template slot="content">
      <com-tab
      :loading="loading" 
      :custzCols="columns4" 
      :data="data1" 
      :sum="100" 
      @change-page="changePage">
      </com-tab>
    </template>
  </primary-model>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import ComTab from '@/components/home/content/ComTab.vue';
import PrimaryModel from '@/components/home/content/PrimaryModel.vue'

const userModule = namespace('sysUser');

@Component({
  components: {
    ComTab,
    PrimaryModel
  }
})
export default class MediaPubHis extends Vue {
  private loading: boolean = false;
  private type: string = '';
  private columns4: Array<any> =[
    {
    title: 'Name',
    key: 'name'
    },
    {
    title: 'Age',
    key: 'age'
    },
    {
    title: 'Address',
    key: 'address'
    }
  ];
  private data1: Array<any> =[{
    name: 'John Brown',
    age: 18,
    address: 'New York No. 1 Lake Park',
    date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    }
  ];
  private changePage(pageIdx: number) : void {
    console.log(pageIdx);
  };
  private searchData(): void {

  }
}
</script>

<style lang="scss" scoped>
.header-search{
  &>*+*{
    margin-left: 24px;
  }
  &-sel{
    width: 140px;
  }
  span{
    font-size: 14px;
    margin-right: -14px;
  }
}
</style>