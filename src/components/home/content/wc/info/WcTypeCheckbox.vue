<template>
  <Collapse accordion simple >
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
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace  } from 'vuex-class';
import { IviewCheckbox } from '@/types/index';

const userModule = namespace('sysUser');

@Component({
  components: {
    
  }
})
export default class WcTypeCheckbox extends Vue {
  private male: IviewCheckbox[] = [];
  private female: IviewCheckbox[] = [];
  private pee: IviewCheckbox[] =[];
  private third: IviewCheckbox[] = [];
  private idpbaby: IviewCheckbox[] = [];
  private currentType: string = '';
  private maleColl = {
    type1: '男厕-蹲位',
    type2: '男厕-坐位',
    type3: '男厕-小便池',
    type4: '男厕-无障碍位'
  };
  private femaleColl = {
    type1: '女厕-蹲位',
    type2: '女厕-坐位',
    type3: '女厕-无障碍位',
  };
  private baby = {
    type1: '母婴室-独立母婴室',
    type2: '母婴室-女厕母婴室',
  };
  private l3bath = {
    type1: '第三卫生间-坐位',
    type2: '第三卫生间-小便池'
  };
  private handleCollChange(key: string, checkList: IviewCheckbox[]): void {
    console.log(key);
    if (key) key = key[0];
    if (!this.currentType) {
      this.currentType = key;
    }
    console.log(checkList);
    console.log(key);
    if (this.currentType !== key) {
      for (const ck of checkList) {
        if (ck.key !== '' && ck.checked) {
          if (ck.key !== key) {
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
    lab.key = this.currentType;
  }
  mounted() {
   for (let idx = 1; idx <= 30; idx++) {
     this.female.push({
         label: idx + '号',
         disabled: false,
         checked: false,
         key: ''
       });
     if (idx <= 18) {
       this.male.push({
         label: idx + '号',
         disabled: false,
         checked: false,
         key: ''
       });
     }
     if (idx <= 14) {
       this.pee.push({
         label: idx + '号',
         disabled: false,
         checked: false,
         key: ''
       });
     }
     if (idx <= 4) {
       this.third.push({
         label: idx + '号',
         disabled: false,
         checked: false,
         key: ''
       });
     }
     if (idx <= 2) {
        this.idpbaby.push({
         label: idx + '号',
         disabled: false,
         checked: false,
         key: ''
       });
     }
   } 
  }
}
</script>

<style lang="scss" scoped>

</style>