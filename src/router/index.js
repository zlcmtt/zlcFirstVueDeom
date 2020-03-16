import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/extensions
import Login from '../views/Login';
import store from '../store/index';
import Error from '../views/Error';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/index/shijuan',
        name: 'shijuan',
        component: () => import('../views/shijuan/indexs'),
        title: '试卷管理',
        author: [50, 51],
        children: [
          {
            name: 'daitishen',
            path: '/index/shijuan/daitishen',
            component: () => import('../views/shijuan/daitishen'),
            title: '待提审试卷',
            author: [50, 51],
            meta: {
              keepAlive: true,
              navName: ['试卷管理', '待提审试卷'],
            },
          },
          {
            path: '/index/shijuan/daitishen/:id',
            name: 'details',
            component: () => import('../views/shijuan/child/details'),
            title: '详情',
            author: [],
            meta: {
              navName: ['试卷管理', '待提审试卷', '详情'],
            },
          },
          {
            path: '/index/shijuan/shenhezhong',
            name: 'shenhezhong',
            component: () => import('../views/shijuan/shenhezhong'),
            title: '审核中试卷',
            author: [50, 51],
            meta: {
              navName: ['试卷管理', '审核中试卷'],
            },
          },
          {
            path: '/index/shijuan/bohui',
            name: 'bohui',
            component: () => import('../views/shijuan/bohui'),
            title: '被驳回试卷',
            author: [50, 51],
            meta: {
              navName: ['试卷管理', '被驳回试卷'],
            },
          },
        ],
      },
      {
        path: '/index/school',
        name: 'school',
        component: () => import('../views/school/indexs'),
        title: '学校管理',
        author: [50, 51, 52],
        children: [
          {
            path: '/index/school/guanli',
            name: 'guanli',
            component: () => import('../views/school/guanli'),
            title: '学校管理员',
            author: [50, 51, 52],
            meta: {
              keepAlive: true,
              navName: ['学校管理', '学校管理员'],
            },
          },
          {
            path: '/index/school/guanli/:num',
            name: 'guanliDetails',
            component: () => import('../views/school/guanliDetails'),
            title: '详情',
            author: [],
            meta: {
              navName: ['学校管理', '学校管理员', '详情'],
            },
          },
          {
            path: '/index/school/liebiao',
            name: 'liebiao',
            component: () => import('../views/school/liebiao'),
            title: '学校列表',
            author: [50, 51, 52],
            meta: {
              navName: ['学校管理', '学校列表'],
            },
          },
          {
            path: '/index/school/work',
            name: 'work',
            component: () => import('../views/school/work'),
            title: '布置作业',
            author: [50, 51],
            meta: {
              navName: ['学校管理', '布置作业'],
            },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    name: 'Error',
    component: Error,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/demozlc',
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   console.log(savedPosition);
  //   if (to.name === 'guanli') {
  //     if (savedPosition) {
  //       return savedPosition;
  //     }
  //     return { x: 0, y: 0 };
  //   }
  //   return { x: 0, y: 0 };
  // },
});
router.beforeEach((to, from, next) => {
  if (to.meta.keepAlive) {
    store.commit('addKeepAlive', to.name);
  }
  next();
});

export default router;
