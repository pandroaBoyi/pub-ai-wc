<template>
<div>
  <Button class="ai-btn" @click="handleClick">添加厕位</Button>
  <Modal
    v-model="showSeat"
    title="厕位选择"
    @on-ok="handleConfirm">
    <Collapse accordion @on-change="handleChange" v-model="colName">
      <Panel :name="coll.type1">
        男厕
        <div slot="content">
          <Collapse accordion  @on-change="handleCollChange($event, male)" v-model="maleColName">
            <Panel :name="maleColl.type1">
              蹲位
              <div slot="content">
                <Checkbox
                  class="ai-checkbox"
                  v-for="(lab,idx) in male" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
            <Panel :name="maleColl.type2">
              坐位
              <div slot="content">
                <Checkbox
                  class="ai-checkbox"
                  v-for="(lab,idx) in male" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
            <Panel :name="maleColl.type3">
              小便池
              <div slot="content">
                <Checkbox
                  class="ai-checkbox"
                  v-for="(lab,idx) in pee" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
            <Panel :name="maleColl.type4">
              无障碍位
              <div slot="content">
                <Checkbox
                  class="ai-checkbox"
                  v-for="(lab,idx) in male" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
          </Collapse>
        </div>
      </Panel>
      <Panel :name="coll.type2">
        女厕
        <div slot="content">
          <Collapse accordion  @on-change="handleCollChange($event, female)" v-model="femaleColName">
            <Panel :name="femaleColl.type1">
              蹲位
              <div slot="content">
                <Checkbox
                  class="ai-checkbox" 
                  v-for="(lab,idx) in female" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
            <Panel :name="femaleColl.type2">
              坐位
              <div slot="content">
                <Checkbox
                  class="ai-checkbox"
                  v-for="(lab,idx) in female" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
            <Panel :name="femaleColl.type3">
              无障碍位
              <div slot="content">
                <Checkbox
                  class="ai-checkbox" 
                  v-for="(lab,idx) in female" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
          </Collapse>
        </div>
      </Panel>
      <Panel :name="coll.type3">
        母婴室
        <div slot="content">
          <Collapse accordion   @on-change="handleCollChange($event, female)" v-model="babyColName">
            <Panel :name="baby.type2">
              女厕母婴室
              <div slot="content">
                <Checkbox
                  class="ai-checkbox"
                  v-for="(lab,idx) in female" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
            <Panel :name="baby.type1">
              独立母婴室
              <div slot="content">
                <Checkbox
                  class="ai-checkbox" 
                  v-for="(lab,idx) in idpbaby" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
          </Collapse>
        </div>
      </Panel>
      <Panel :name="coll.type4">
        第三卫生间
        <div slot="content">
          <Collapse accordion @on-change="handleCollChange($event, third)" v-model="thirdColName">
            <Panel :name="l3bath.type1">
              坐位
              <div slot="content">
                <Checkbox
                  class="ai-checkbox"
                  v-for="(lab,idx) in third" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
            <Panel :name="l3bath.type2">
              小便池
              <div slot="content">
                <Checkbox
                  class="ai-checkbox"
                  v-for="(lab,idx) in third" 
                  :label="lab.label"
                  :disabled="lab.disabled"
                  :key="idx"
                  v-model="lab.checked" 
                  @on-change="handleCheck(lab)" >
                  {{lab.label}}
                </Checkbox>
              </div>
            </Panel>
          </Collapse>
        </div>
      </Panel>
    </Collapse>
  </Modal>
</div>
  
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
  private showSeat: boolean = false;
  private male: IviewCheckbox[] = [];
  private female: IviewCheckbox[] = [];
  private pee: IviewCheckbox[] =[];
  private third: IviewCheckbox[] = [];
  private idpbaby: IviewCheckbox[] = [];
  private currentType: string = '';
  private colName: string = '';
  private maleColName: string = '';
  private femaleColName: string = '';
  private babyColName: string = '';
  private thirdColName: string = '';
  private comList: IviewCheckbox[] = [];
  private coll = {
    type1: '男厕',
    type2: '女厕',
    type3: '母婴室',
    type4: '第三卫生间',
  }
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
    if (!key) return;
    // console.log(key);
    // console.log(this.female);
    const colString = this.colName[0];
    if (colString === this.coll.type1) {
      if (this.maleColName) this.currentType = this.maleColName[0];
    } else if (colString === this.coll.type2) {
      if (this.femaleColName) this.currentType = this.femaleColName[0];
    } else if (colString === this.coll.type3) {
      if (this.babyColName) this.currentType = this.babyColName[0];
    } else if (colString === this.coll.type4) {
      if (this.thirdColName) this.currentType = this.thirdColName[0];
    }
    // console.log(this.colName);
    // console.log('coll.type2:'+this.coll.type2);
    // console.log('femaleColName:'+this.femaleColName);
    // console.log('babyColName:'+this.babyColName);
    // console.log(this.currentType);

    // console.log("currentType" + this.currentType);
    
    // console.log("this.historyType" + this.historyType);
    if (key === '母婴室') {
      for (const ck of this.female) {
        if (ck.types !== '' && ck.checked) {
          if (ck.types !== '女厕母婴室'){
            ck.disabled = true;
          } else {
            ck.disabled = false;
          }
        } 
      }
    } else if (key === '女厕') {
      for (const ck of this.female) {
        if (ck.types !== '' && ck.checked) {
          if (ck.types === '女厕母婴室') {
            ck.disabled = true;
          } else {
            ck.disabled = false;
          }
        } 
      }
    }
  };
  private handleCollChange(key: any, checkList: IviewCheckbox[]): void {
    if (key) key = key[0];
    if (!key) return;
    console.log(key);
    if (!this.currentType) {
      this.currentType = key;
    }
    // console.log("key: "+key)
    // console.log("currentType:"+this.currentType)
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
  };
  private handleCheck(lab: IviewCheckbox): void{
    lab.types = this.currentType;
  }
  private handleConfirm(): void {
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
  };
  private handleClick(): void {
    this.showSeat = true;
  };
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
.ai-checkbox{
  width: 50px;
}
</style>