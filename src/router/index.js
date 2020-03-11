import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/extensions
import Login from '../views/Login';
import store from '../store/index';

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
            },
          },
          {
            path: '/index/shijuan/daitishen/:id',
            name: 'details',
            component: () => import('../views/shijuan/child/details'),
            title: '详情',
            author: [],
          },
          {
            path: '/index/shijuan/shenhezhong',
            name: 'shenhezhong',
            component: () => import('../views/shijuan/shenhezhong'),
            title: '审核中试卷',
            author: [50, 51],
          },
          {
            path: '/index/shijuan/bohui',
            name: 'bohui',
            component: () => import('../views/shijuan/bohui'),
            title: '被驳回试卷',
            author: [50, 51],
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
          },
          {
            path: '/index/school/liebiao',
            name: 'liebiao',
            component: () => import('../views/school/liebiao'),
            title: '学校列表',
            author: [50, 51, 52],
          },
          {
            path: '/index/school/work',
            name: 'work',
            component: () => import('../views/school/work'),
            title: '布置作业',
            author: [50, 51],
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/demozlc',
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.keepAlive) {
    store.commit('addKeepAlive', to.name);
  }
  next();
});

export default router;
