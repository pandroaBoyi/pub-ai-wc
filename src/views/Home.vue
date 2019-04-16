<template>
  <div class="home">
    <div class="ai-container">
      <Layout >
        <Sider class="home-nav" ref="sider" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :width="256">
          <div class="home-nav-title title">智慧公厕后台管理系统</div>
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" accordion>
            <template v-for="(nav, idx) in siderNavs">
              <template v-if="nav.hasMenu">
                <template v-if="nav.subMenu.length>0">
                  <Submenu :name="nav.mENU_ID" :key="idx">
                    <template slot="title">
                      <Icon type="ios-navigate"></Icon>
                      <span>{{nav.mENU_NAME}}</span>
                    </template>
                    <template v-for="(childNav, idx) in nav.subMenu">
                      <template v-if="childNav.hasMenu">
                        <MenuItem :name="nav.mENU_ID+childNav.mENU_ID" :key="idx" :to="{name: childNav.mENU_URL}" >
                          <span>{{childNav.mENU_NAME}}</span>
                        </MenuItem>
                      </template>
                    </template>
                  </Submenu>
                </template>
                <template v-else>
                  <MenuItem :name="nav.mENU_ID" :key="idx" :to="nav.mENU_URL">
                    <span>{{nav.mENU_NAME}}</span>
                  </MenuItem>
                </template>
              </template>
            </template>
          </Menu>
        </Sider>
        <Layout>
          <Header class="home-header">
            <Row type="flex" justify="space-between">
              <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="24"></Icon>
              <header-nav/>
            </Row>
          </Header>
          <Content class="home-content">
            <transition name = "fade" mode="out-in">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </transition>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State, Getter } from 'vuex-class';
import HeaderNav from '@/components/home/header/HeaderNav.vue';
import { Layout } from 'iview';

@Component({
  components: {
    HeaderNav
  }
})
export default class Home extends Vue {
  private isCollapsed: boolean = false;
  @Getter('siderNavsFilter') private siderNavs!: Function;
  @Action('getSiderNavs') private getSiderNavs!: Function;  

  mounted() : void {
    this.getSiderNavs(this);
  }

  get rotateIcon() : Array<string> {
    return [
      'home-header-icon',
      this.isCollapsed ? 'home-header-icon-rotate' : '',
    ]
  }

  get menuitemClasses() : Array<string> {
    return [
      'home-nav-menu',
      this.isCollapsed ? 'home-nav-collapsed-menu' : '',
    ]
  }

  private collapsedSider() : void {
    (<Layout>this.$refs.sider).toggleCollapse();
  }
}
</script>

<style lang="scss" scoped>
.home{
  &-nav{
    min-height: 100vh;
    overflow: hidden;
    &-title{
      text-align: center;
      height: 64px;
      line-height: 64px;
      color: #fff;
    }
    &-menu{
      span{
        display: inline-block;
        overflow: hidden;
        vertical-align: bottom;
        width: 70%;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: width .2s ease .2s;
      }
      i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        // transition: font-size .2s ease;
        vertical-align: -1px;
        font-size: 16px;
      }
    }
    &-collapsed-menu{
      span{
        width: 0;
        transition: width .2s ease;
      }
      i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        // transition: font-size .1s ease;
        vertical-align: middle;
        font-size: 22px;
      }
    }
  }
  &-header{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    &-icon{
      transition: all .3s;
      line-height: inherit;
    }
    &-icon-rotate{
      transform: rotate(-90deg);
    }
  }
  &-content{
    padding: 20px;
  }
}
</style>
