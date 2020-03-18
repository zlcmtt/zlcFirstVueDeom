import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';
import VueVideoPlayer from 'vue-video-player';
import router from './router';
import store from './store';
import App from './App.vue';
import './mock/daitishen';
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
