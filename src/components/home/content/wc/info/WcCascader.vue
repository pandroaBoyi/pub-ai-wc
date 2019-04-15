<template>
  <Cascader :data="cascaderData" trigger="hover" @on-change="handleChange" :value="data"></Cascader>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { IviewCascader } from '@/types/index';

@Component({
  components: {
    
  }
})
export default class WcCascader extends Vue {
  private cascaderData: IviewCascader[] = [
    {
      value: '城市公厕',
      label: '城市公厕',
      children: [
        {
          value: '独立式一类',
          label: '独立式一类'
        },
        {
          value: '独立式二类',
          label: '独立式二类'
        },
        {
          value: '独立式三类',
          label: '独立式三类'
        },
        {
          value: '附属式一类',
          label: '附属式一类'
        },
        {
          value: '附属式二类',
          label: '附属式二类'
        },
      ]
    },
    {
      value: '旅游公厕',
      label: '旅游公厕',
      children: [
        {
          value: 'AAA级',
          label: 'AAA级'
        },
        {
          value: 'AA级',
          label: 'AA级'
        },
        {
          value: 'A级',
          label: 'A级'
        },
      ]
    }
  ]; 
  @Prop({type: Array, default: () => {return [];}}) private readonly data!: string[];

  @Emit('update:data')
  private updateVal(val: string[]): string[] {
    return val;
  }
  private handleChange(val: string[]): void {
    // this.$emit('update:data', val);
    this.updateVal(val);
  }
}
</script>

<style lang="scss" scoped>

</style>