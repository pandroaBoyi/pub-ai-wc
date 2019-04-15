<template>
  <primary-model>
    <template slot="header"></template>
    <template slot="content"></template>
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
export default class SysRole extends Vue {

}
</script>

<style lang="scss" scoped>

</style>