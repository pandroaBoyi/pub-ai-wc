<template>
  <div class="com">
    <div class="com-table">
      <Table ref="table" 
      :columns="cols" 
      :data="data" 
      :loading="loading"
      @on-selection-change="setSelLists">
      </Table>
    </div>
    <div class="com-page">
      <div class="com-page-export" v-if="exportCsv">
        <Button type="primary" size="large" @click="exportData(1)">
          <Icon type="ios-download-outline"></Icon> 
          导出
        </Button>
      </div>
      <div class="com-page-sep" >
        <span class="com-page-sep-sum">共{{sum}}条数据</span>
        <Page class="com-page-sep-ins":total="sum" @on-change="changePage"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { Table, TableExportCsvParams } from 'iview';

@Component
export default class ComTab extends Vue {
  @Prop({default: false}) private readonly loading!: boolean;
  @Prop(Array) private readonly custzCols!: Array<any>;
  @Prop(Array) private readonly data!: Array<any>;
  @Prop({default: 0}) private readonly sum!: number;
  @Prop({default: false}) private readonly selection!: boolean;
  @Prop({default: false}) private readonly modify!: boolean;
  @Prop({default: false}) private readonly exportCsv!: boolean;
  @Prop({type: Object, default: () => { return {}}}) private readonly exportFilter!: TableExportCsvParams;
  @Emit()
  private changePage(pageIdx: number) : number {
    return pageIdx;
  }
  @Emit()
  private updateRow(params: any) : void {
    return params;
  }
  @Emit()
  private removeRow(params: any) : void {
    return params;
  }
  @Emit()
  private setSelLists(selection: Array<any>) : Array<any> {
    return selection;
  }
  get cols(): Array<any> {
    console.log(this.custzCols)
    if (this.custzCols && this.custzCols.length > 0) {
      const selCol = {
        type: 'selection',
        width: 60,
        align: 'center'
      };
      const optCol = {
        title: '操作',
        key: 'action',
        width: 150,
        align: 'center',
        render: (h: any, params: any) => {
          return h('div', [
            h('a', {
              on: {
                click: () => {
                  // this.show(params.index)
                  this.updateRow(params);
                }
              }
            }, '修改'),
            h('Divider', {
              props: {
                type: 'vertical'
              }
            }),
            h('a', {
              on: {
                click: () => {
                  // this.remove(params.index)
                  this.removeRow(params);
                }
              }
            }, '删除')
          ]);
        }
      };
      if (this.selection && this.modify) {
        return [selCol, ...this.custzCols, optCol];
      } else if (this.selection) {
        return [selCol, ...this.custzCols];
      } else {
        return this.custzCols;
      }
    } else {
      return [];
    }
  }

  private exportData(): void {
    (<Table>this.$refs.table).exportCsv({
      filename: 'The original data'
    });
  }
}
</script>

<style lang="scss" scoped>
.com{
  &-page{
    margin-top: 20px;
    overflow: hidden;
    &-export{
      float: left;
    }
    &-sep{
      font-size: 12px;
      float: right;
      &-sum{
        
        line-height: 32px;
        margin-right: 16px;
      }
      &-ins{
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>


