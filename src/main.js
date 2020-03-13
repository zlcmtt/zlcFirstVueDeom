import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import App from './App.vue';
import router from './router';
import store from './store';
import './mock/daitishen';
// eslint-disable-next-line import/order
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';

Vue.use(VueVideoPlayer);
Vue.prototype.Axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
