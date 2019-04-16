<template>
  <Collapse accordion simple @on-change="handleChange">
    <Panel name="男厕">
      男厕
      <div slot="content">
        <Collapse accordion simple @on-change="handleCollChange($event, male)">
          <Panel :name="maleColl.type1">
            蹲位
            <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in male" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
          <Panel :name="maleColl.type2">
            坐位
            <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in male" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
          <Panel :name="maleColl.type3">
            小便池
            <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in pee" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
          <Panel :name="maleColl.type4">
            无障碍位
             <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in male" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Panel>
    <Panel name="女厕">
      女厕
      <div slot="content">
        <Collapse accordion simple @on-change="handleCollChange($event, female)">
          <Panel :name="femaleColl.type1">
            蹲位
            <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in female" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
          <Panel :name="femaleColl.type2">
            坐位
            <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in female" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
          <Panel :name="femaleColl.type3">
            无障碍位
            <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in female" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Panel>
    <Panel name="母婴室">
      母婴室
      <div slot="content">
        <Collapse accordion simple  @on-change="handleCollChange($event, female)">
          <Panel :name="baby.type2">
            女厕母婴室
            <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in female" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
          <Panel :name="baby.type1">
            独立母婴室
            <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in idpbaby" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Panel>
    <Panel name="第三卫生间">
      第三卫生间
      <div slot="content">
        <Collapse accordion simple @on-change="handleCollChange($event, third)">
          <Panel :name="l3bath.type1">
            坐位
            <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in third" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
          <Panel :name="l3bath.type2">
            小便池
            <div slot="content">
              <Checkbox 
                v-for="(lab,idx) in third" 
                :label="lab.label"
                :disabled="lab.disabled"
                :key="idx"
                v-model="lab.checked" 
                @on-change="getCheckList(lab)" >
                {{lab.label}}
              </Checkbox>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Panel>
  </Collapse>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import { IviewCheckbox, WcSeat } from '@/types/index';

@Component({
  components: {
    
  }
})
export default class WcTypeCheckbox extends Vue {
  @Prop({type: Array, default: () => {return [];}}) private readonly lists!: WcSeat[];
  @Emit('update:lists')
  private updataSeatType(list: WcSeat[]): WcSeat[] {
    return list;
  }
  private male: IviewCheckbox[] = [];
  private female: IviewCheckbox[] = [];
  private pee: IviewCheckbox[] =[];
  private third: IviewCheckbox[] = [];
  private idpbaby: IviewCheckbox[] = [];
  private currentType: string = '';
  private comList: IviewCheckbox[] = [];
  private maleColl = {
    type1: '蹲位',
    type2: '坐位',
    type3: '小便池',
    type4: '无障碍位'
  };
  private femaleColl = {
    type1: '蹲位',
    type2: '坐位',
    type3: '无障碍位',
  };
  private baby = {
    type1: '独立母婴室',
    type2: '女厕母婴室',
  };
  private l3bath = {
    type1: '坐位',
    type2: '小便池'
  };
  private handleChange(key: any) {
    if (key) key = key[0];
    if (key === '母婴室' || key === '女厕') {
      for (const ck of this.female) {
        if (ck.types !== '') {
          ck.disabled = true;
        } 
      }
    }
  }
  private handleCollChange(key: any, checkList: IviewCheckbox[]): void {
    if (key) key = key[0];
    if (!this.currentType) {
      this.currentType = key;
    }
    if (this.currentType !== key) {
      for (const ck of checkList) {
        if (ck.types !== '' && ck.checked) {
          if (ck.types !== key) {
            ck.disabled = true;
          } else {
            ck.disabled = false;
          }
        }
      }
    }
    this.currentType = key;
  }
  private getCheckList(lab: IviewCheckbox): void{
    lab.types = this.currentType;
    const filter: IviewCheckbox[]= this.comList.filter((item) => {
      return item.checked;
    });
    const place: WcSeat[] = filter.map((item) => {
      return {
        prefix: item.prefix,
        types: item.types,
        num: item.num
      };
    });
    this.updataSeatType(place);
  }
  mounted() {
   for (let idx = 1; idx <= 30; idx++) {
     if (idx <= 30) {
       const obj: IviewCheckbox = {
         label: idx + '号',
         disabled: false,
         checked: false,
         types: '',
         prefix: '女厕',
         num: idx
       };
       this.female.push(obj);
       this.comList.push(obj);
     }
     if (idx <= 18) {
       const obj: IviewCheckbox = {
         label: idx + '号',
         disabled: false,
         checked: false,
         types: '',
         prefix: '男厕',
         num: idx
       };
       this.male.push(obj);
       this.comList.push(obj);
     }
     if (idx <= 14) {
       const obj: IviewCheckbox = {
         label: idx + '号',
         disabled: false,
         checked: false,
         types: '',
         prefix: '男厕',
         num: idx
       };
       this.pee.push(obj);
       this.comList.push(obj);
     }
     if (idx <= 4) {
       const obj: IviewCheckbox = {
         label: idx + '号',
         disabled: false,
         checked: false,
         types: '',
         prefix: '第三卫生间',
         num: idx
       };
       this.third.push(obj);
       this.comList.push(obj);
     }
     if (idx <= 2) {
        const obj: IviewCheckbox = {
          label: idx + '号',
          disabled: false,
          checked: false,
          types: '',
          prefix: '母婴室',
          num: idx
        };
        this.idpbaby.push(obj);
        this.comList.push(obj);
     }
   } 
  }
}
</script>

<style lang="scss" scoped>

</style>