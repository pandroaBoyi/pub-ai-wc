<template>
  <ul class="upload-progress">
    <li
      v-for="file in files"
      >
      <span >
          {{ file.name }}
      </span>
      <Icon
          type="ios-close-empty"
          v-show="file.status === 'finished'"></Icon>
      <transition name="fade">
          <Progress
            v-if="file.showProgress"
            :stroke-width="2"
            :percent="parsePercentage(file.percentage)"
            :status="file.status === 'finished' && file.showProgress ? 'success' : 'normal'">
          </Progress>
      </transition>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
// import { VirtualFile } from '@/types';

@Component
export default class ComUploadProgress extends Vue {
  @Prop({default: () => {return {}}}) private readonly files!:Array<any>;
  private parsePercentage(val: string): number{
    return parseInt(val, 10);
  }
}
</script>


<style lang="scss" scoped>
.upload-progress{

}
</style>