<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="defaultActive" class="el-menu-demo" router>
          <div v-for="(item,index) in routerList" :key="index">
            <el-submenu  :index="item.path"
                         v-if="item.author.includes(Number(author))">
              <template slot="title">{{item.title}}</template>
              <div v-for="routerItem in item.children" :key="routerItem.name">
                <el-menu-item
                   v-if="routerItem.author.includes(Number(author))"
                   :index="routerItem.path">
                  {{routerItem.title}}
                </el-menu-item>
              </div>
            </el-submenu>
          </div>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex';
import router from '../router/index';

export default {
  name: 'index',
  data() {
    return {
      routerList: [],
    };
  },
  computed: {
    ...mapState(['author']),
    defaultActive() {
      return `/${this.$route.path.split('/').splice(1, 3).join('/')}`;
    },
  },
  created() {
    this.routerList = router.options.routes[1].children;
  },
};
</script>

<style scoped lang="less">
  .el-container{
    height: 100%;
    width: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    overflow: auto;
  }
</style>
