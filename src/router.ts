import Vue from 'vue';
import Router from 'vue-router';
import UNAME from './util/const/routeName';

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
      name: UNAME.HOME,
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      children: [
        {
          path: 'sys/users',
          name: UNAME.SYS_USER,
          component: () => import(/* webpackChunkName: "user" */ './views/sys/SysUser.vue'),
        },
        {
          path: 'sys/users/upload',
          name: UNAME.SYS_USER_UPLOAD,
          component: () => import(/* webpackChunkName: "userUpload" */ './views/sys/SysUserUpload.vue'),
        },
        {
          path: 'sys/users/modify/:id',
          name: UNAME.SYS_USER_MODIFY,
          component: () => import(/* webpackChunkName: "userModify" */ './views/sys/SysUserModify.vue'),
        },
        {
          path: 'sys/role',
          name: UNAME.SYS_ROLE,
          component: () => import(/* webpackChunkName: "role" */ './views/sys/SysRole.vue'),
        },
        {
          path: 'sys/role/modify/:id',
          name: UNAME.SYS_ROLE_MODIFY,
          component: () => import(/* webpackChunkName: "roleModify" */ './views/sys/SysRoleModify.vue'),
        },
        // {
        //   path: 'sys/permission',
        //   name: UNAME.SYS_PERMISSION,
        //   component: () => import(/* webpackChunkName: "permission" */ './views/sys/SysPermission.vue'),
        // },
        // {
        //   path: 'sys/permission/modify/:id',
        //   name: UNAME.SYS_PERMISSION_MODIFY,
        //   component: () => import(/* webpackChunkName: "permissionModify" */ './views/sys/SysPermissionModify.vue'),
        // },
        {
          path: 'media/pub',
          name: UNAME.MEDIA_PUB,
          component: () => import(/* webpackChunkName: "mediaPub" */ './views/media/MediaPub.vue'),
        },
        {
          path: 'media/pub/history',
          name: UNAME.MEDIA_PUB_HIS,
          component: () => import(/* webpackChunkName: "mediaPubHis" */ './views/media/MediaPubHis.vue'),
        },
        {
          path: 'media/pub/my',
          name: UNAME.MEDIA_PUB_MY,
          component: () => import(/* webpackChunkName: "mediaPubMy" */ './views/media/MediaMy.vue'),
        },
        {
          path: 'media/review',
          name: UNAME.MEDIA_REVIEW,
          component: () => import(/* webpackChunkName: "mediaReview" */ './views/media/MediaReview.vue'),
        },
        {
          path: 'media/review/history',
          name: UNAME.MEDIA_REVIEW_HIS,
          component: () => import(/* webpackChunkName: "mediaReviewHis" */ './views/media/MediaReviewHis.vue'),
        },
        {
          path: 'media/review/detail',
          name: UNAME.MEDIA_REVIEW_DETAIL,
          component: () => import(/* webpackChunkName: "mediaReviewDetail" */ './views/media/MediaReviewDetail.vue'),
        },
        {
          path: 'wc/evaluate',
          name: UNAME.WC_EVALUATE,
          component: () => import(/* webpackChunkName: "wcEvaluate" */ './views/wc/WcEvaluate.vue'),
        },
        {
          path: 'wc/fix',
          name: UNAME.WC_FIX,
          component: () => import(/* webpackChunkName: "wcFix" */ './views/wc/WcFix.vue'),
        },
        {
          path: 'wc/fix/modify',
          name: UNAME.WC_FIX_MODIFY,
          component: () => import(/* webpackChunkName: "wcFixModify" */ './views/wc/WcFixModify.vue'),
        },
        {
          path: 'wc/info',
          name: UNAME.WC_INFO,
          component: () => import(/* webpackChunkName: "wcInfo" */ './views/wc/WcInfo.vue'),
        },
        {
          path: 'wc/info/modify/:id',
          name: UNAME.WC_INFO_MODIFY,
          component: () => import(/* webpackChunkName: "wcInfoModify" */ './views/wc/WcInfoModify.vue'),
          props: true,
        },
        {
          path: 'wc/info/upload',
          name: UNAME.WC_INFO_UPLOAD,
          component: () => import(/* webpackChunkName: "wcInfoUpload" */ './views/wc/WcInfoUpload.vue'),
        },
      ],
    },
  ],
});
