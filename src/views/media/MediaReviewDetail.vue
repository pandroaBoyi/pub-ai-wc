<template>
  <secondary-model>
    <template slot="header">
      <Breadcrumb separator=">">
        <BreadcrumbItem >{{$NAV_CONST.MEDIA}}</BreadcrumbItem>
        <BreadcrumbItem :to="{name: $UNAME_CONST.MEDIA_REVIEW}">{{$NAV_CONST.MEDIA_REVIEW}}</BreadcrumbItem>
        <BreadcrumbItem >{{$NAV_CONST.MEDIA_REVIEW_DETAIL}}</BreadcrumbItem>
      </Breadcrumb>
    </template>
    <template slot="content">
      <div class="review">
        <div class="review-row">
          <span class="review-row-label">申请时间</span>
          <span class="review-row-data">2019-04-01  12:30:30</span>
        </div>
        <div class="review-row">
          <span class="review-row-label">申请人</span>
          <span class="review-row-data">李大嘴</span>
        </div>
        <div class="review-row">
          <span class="review-row-label">文件类型</span>
          <span class="review-row-data">视频</span>
        </div>
        <div class="review-row">
          <span class="review-row-label">文件名称</span>
          <span class="review-row-data">扫黑除恶</span>
        </div>
        <div class="review-row">
          <span class="review-row-label">发布公厕</span>
          <span class="review-row-data" v-for="(wc, idx) in wcList" :key="idx">{{wc}}</span>
        </div>
        <div class="review-row">
          <span class="review-row-label">发布内容</span>
          <span class="review-row-data">坚决拥护党中央国务院关于开展扫黑除恶专项斗争的战略部署</span>
        </div>
        <Divider />
        <div class="review-approve">
          <Button :to="$UNAME_CONST.SYS_USER" class="ai-btn">审核驳回</Button>
          <Button type="primary"  class="ai-btn">审核通过</Button>
        </div>
      </div>
    </template>
  </secondary-model>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import SecondaryModel from '@/components/home/content/SecondaryModel.vue'

const userModule = namespace('sysUser');

@Component({
  components: {
    SecondaryModel
  }
})
export default class MediaReviewDetail extends Vue {
  private wcList = ['雁塔区鱼化寨智慧公厕1号','雁塔区鱼化寨智慧公厕1号','雁塔区鱼化寨智慧公厕1号','雁塔区鱼化寨智慧公厕1号'];
}
</script>

<style lang="scss" scoped>
.review{
  font-size: 14px;
  &-row{
    padding: 10px 0;

    &-label{
      width: 100px;
      text-align: right;
      margin-right: 20px;
    }
    &-data{
      display: inline-block;
      height: 22px;
      line-height: 22px;
      margin: 2px 4px 2px 0;
      padding: 0 8px;
      border: 1px solid #e8eaec;
      border-radius: 3px;
      background: #f7f7f7;
      font-size: 12px;
      vertical-align: middle;
      opacity: 1;
      overflow: hidden;
      cursor: pointer;
      margin-right: 10px;
    }
    span{
      display: inline-block;
    }
  }
  &-approve{
    margin-left: 120px;
    &>*+*{
      margin-left: 24px;
    }
  }
}
</style>