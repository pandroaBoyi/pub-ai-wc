<template>
  <secondary-model>
    <template slot="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem >{{$NAV_CONST.MEDIA}}</BreadcrumbItem>
        <BreadcrumbItem :to="$URL_CONST.MEDIA_REVIEW">{{$NAV_CONST.MEDIA_REVIEW}}</BreadcrumbItem>
        <BreadcrumbItem >{{$NAV_CONST.MEDIA_REVIEW_HIS}}</BreadcrumbItem>
      </Breadcrumb>
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
  </secondary-model>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import SecondaryModel from '@/components/home/content/SecondaryModel.vue'
import ComTab from '@/components/home/content/ComTab.vue';

const userModule = namespace('sysUser');

@Component({
  components: {
    SecondaryModel,
    ComTab
  }
})
export default class MediaReviewHis extends Vue {
  private loading: boolean = false;
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
}
</script>

<style lang="scss" scoped>

</style>