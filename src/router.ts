import Vue from 'vue';
import Router from 'vue-router';
import URL from './util/const/url';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      children: [
        {
          path: URL.SYS_USER,
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ './views/sys/SysUser.vue'),
        },
        {
          path: URL.SYS_USER_UPLOAD,
          name: 'userupload',
          component: () => import(/* webpackChunkName: "userupload" */ './views/sys/SysUserUpload.vue'),
        },
        {
          path: URL.SYS_USER_MODIFY,
          name: 'usermodify',
          component: () => import(/* webpackChunkName: "usermodify" */ './views/sys/SysUserModify.vue'),
        },
        {
          path: URL.SYS_ROLE,
          name: 'role',
          component: () => import(/* webpackChunkName: "role" */ './views/sys/SysRole.vue'),
        },
        {
          path: URL.SYS_ROLE_MODIFY,
          name: 'rolemodify',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/sys/SysRoleModify.vue'),
        },
        // {
        //   path: URL.SYS_PERMISSION,
        //   name: 'permission',
        //   component: () => import(/* webpackChunkName: "permission" */ './views/sys/SysPermission.vue'),
        // },
        // {
        //   path: URL.SYS_PERMISSION_MODIFY,
        //   name: 'permissionmodify',
        //   component: () => import(/* webpackChunkName: "permissionmodify" */ './views/sys/SysPermissionModify.vue'),
        // },
        {
          path: URL.MEDIA_PUB,
          name: 'mediapub',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/media/MediaPub.vue'),
        },
        {
          path: URL.MEDIA_PUB_HIS,
          name: 'mediapubhis',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/media/MediaPubHis.vue'),
        },
        {
          path: URL.MEDIA_PUB_MY,
          name: 'mediamy',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/media/MediaMy.vue'),
        },
        {
          path: URL.MEDIA_REVIEW,
          name: 'mediareview',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/media/MediaReview.vue'),
        },
        {
          path: URL.MEDIA_REVIEW_HIS,
          name: 'mediareviewhis',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/media/MediaReviewHis.vue'),
        },
        {
          path: URL.MEDIA_REVIEW_DETAIL,
          name: 'mediareviewdetail',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/media/MediaReviewDetail.vue'),
        },
        {
          path: URL.WC_EVALUATE,
          name: 'wcevaluate',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/wc/WcEvaluate.vue'),
        },
        {
          path: URL.WC_FIX,
          name: 'wcfix',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/wc/WcFix.vue'),
        },
        {
          path: URL.WC_FIX_MODIFY,
          name: 'wcfixmodify',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/wc/WcFixModify.vue'),
        },
        {
          path: URL.WC_INFO,
          name: 'wcinfo',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/wc/WcInfo.vue'),
        },
        {
          path: URL.WC_INFO_MODIFY,
          name: 'wcinfomodify',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/wc/WcInfoModify.vue'),
        },
        {
          path: URL.WC_INFO_UPLOAD,
          name: 'wcinfoupload',
          component: () => import(/* webpackChunkName: "rolemodify" */ './views/wc/WcInfoUpload.vue'),
        },
      ],
    },
  ],
});
