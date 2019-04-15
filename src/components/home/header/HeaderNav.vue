<template>
  <div class="info-menu">
    <router-link to="/" class="info-menu-user">
      <img src="">
      <span>{{username}}</span>
    </router-link>
    <Divider type="vertical"/>
    <router-link to="/" class="info-menu-logout">退出</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class HeaderNav extends Vue {
  @State('userName') private username!: string;
}
</script>

<style lang="scss" scoped>
.info-menu{
  display: inline-block;
  &-user{
    img{
      max-width: 100%;
      border-radius: 50%;
    }
  }
}
</style>
