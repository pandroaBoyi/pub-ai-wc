<template>
  <div class="media-pub">
    <Tabs>
      <TabPane label="文本" class="media-pub-tab">
        <pub-text></pub-text>
      </TabPane>
      <TabPane label="图片" class="media-pub-tab">
        <pub-pic></pub-pic>
      </TabPane>
      <TabPane label="音频" class="media-pub-tab">
        <pub-audio></pub-audio>
      </TabPane>
      <TabPane label="视频" class="media-pub-tab">
        <pub-video></pub-video>
      </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import PubText from '@/components/home/content/media/pub/PubText.vue';
import PubPic from '@/components/home/content/media/pub/PubPic.vue';
import PubAudio from '@/components/home/content/media/pub/PubAudio.vue';
import PubVideo from '@/components/home/content/media/pub/PubVideo.vue';

const userModule = namespace('sysUser');

@Component({
  components: {
    PubText,
    PubPic,
    PubAudio,
    PubVideo
  }
})
export default class MediaPub extends Vue {

}
</script>

<style lang="scss" scoped>
.media-pub{
  background: #fff;
}

</style>