<template>
  <div class="upload">
    <div class="upload-desc">
      <Row type="flex" justify="space-between">
        <p>导入说明：下载模板，将公厕信息填入模板中</p>
        <Button>下载模板文件</Button>
      </Row>
    </div>
    <com-upload 
      accept=".xls,.xlsx" 
      class="upload-plugin"
      :loading="upLoading"
      :keys="keyNames"
      :max-size="2048"
      :format="['xls', 'xlsx']"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleExceededSize"
      :on-execl-data="setData"
      :on-click="initLoading">
        <div class="upload-plugin-content">
          <Icon type="ios-cloud-upload" size="52"></Icon>
          <p>点击上传文件或将文件拖拽至此处</p>
        </div>
    </com-upload>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';
import ComUpload from '@/components/home/content/execlUpload/ComUpload.vue';
import { User, CellClassName } from '@/types';

const userModule = namespace('sysUser');

@Component({
  components: {
    ComUpload
  }
})
export default class UserUpload extends Vue {
  @userModule.State('upLoading') private upLoading!: Function;
  @userModule.Mutation('setUpLoading') private setUpLoading!: Function;
  @userModule.Mutation('updateUploadLists') private updateUploadLists!: Function;
  @userModule.Mutation('addErr') private addErr!: Function;
  private keyNames: string[] = ['uname', 'number', 'roleid', 'sex', 'phone', 'password','status','toiletId'];
  private setData (users: User[]) {
    users = users.slice(2);
    users = users.filter((user) => {
      const props: string[] = Object.keys(user);
      return props.includes('uname') && props.includes('number') && props.includes('phone') && props.includes('password');
    })
    this.checkData(users);
    this.updateUploadLists(users);
    this.setUpLoading(false);
  }
  private checkData(users: User[]): void{
    let nums: number[] = [];
    let phoneNums: number[] = [];
    const errClzName: string = 'err-cell';
    const phoneCheck: RegExp = /^[1][3,4,5,7,8][0-9]{9}$/;
    const mobCheck: RegExp = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    for (const user of users) {
      let cellClzName: CellClassName = {};
      let phoneErr: boolean = false;
      const pwdLen: number = user.password!.toString().length;
      if (nums.length) {
        if (nums.includes((<number>user.numbers!))) {
          cellClzName.number = errClzName;
        }
      }
      if (phoneNums.length) {
        if (phoneNums.includes((<number>user.phone!))) {
          cellClzName.phone = errClzName;
          phoneErr = true;
        }
      }
      if (!phoneErr) {
        if (!phoneCheck.test(user.phone!.toString()) && !mobCheck.test(user.phone!.toString())) {
          cellClzName.phone = errClzName;
        }
      }
      if (pwdLen < 4 || pwdLen > 16) {
        cellClzName.password = errClzName;
      }
      if (Object.keys(cellClzName).length) {
        user.cellClassName = cellClzName;
        this.addErr(1);
      }
      if (user.status === '可用') {
        user.status = 1;
      } else {
        user.status = 0;
      }

      nums.push((<number>user.numbers!));
      phoneNums.push((<number>user.phone!));
    }
  }
  private handleFormatError (file: File): void {
    this.$Notice.warning({
      title: '文件格式有误',
      desc: `您上传的文件<b>${file.name}</b>格式有误，请重新上传`,
    });
  }
  private handleExceededSize (file: File): void {
    this.$Notice.warning({
      title: '文件大小超出限制',
      desc: `您上传的文件<b>${file.name}</b>超出了2MB，请上传较小文件`,
    });
  }
  private initLoading (): void {
    this.setUpLoading(true);
  }
} 
</script>

<style lang="scss" scoped>
.upload{
  width: 50%;
  margin-left: 25%;
  height: 550px;
  &-desc{
    background: $bg;
    padding: 10px 20px;
    margin-top: 30px;
    p{
      line-height: 32px;
      color: $assist;
    }
  }
  &-plugin{
    margin-top: 20px;
    
    &-content{
      padding: 100px 0;
      i{
        color: $main;
      }
    }
  }
}
</style>
