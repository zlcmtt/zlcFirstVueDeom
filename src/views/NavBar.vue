<template>
      <el-breadcrumb separator="/" separator-class="el-icon-arrow-right">
<!--        <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>-->
        <el-breadcrumb-item v-for="(item, index) in $route.meta.navName" :key="index">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>
</template>

<script>
export default {
  name: 'NavBar',
  created() {},
};
</script>

<style  lang="less">
.el-breadcrumb {
  line-height: 50px;
}
</style>
