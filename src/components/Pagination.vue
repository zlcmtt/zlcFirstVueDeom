<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    @current-change="changePage"
    class="myPagination"
  >
  </el-pagination>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    changePage(pageSize) {
      this.$emit('changeSize', pageSize);
    },
  },
};
</script>

<style lang="less">
.myPagination{
  margin-top: 20px;
}
</style>
