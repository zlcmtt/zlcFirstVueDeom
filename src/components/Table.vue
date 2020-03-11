<template>
    <el-table
      :data="tableData"
      style="width: 100%"
      class="defaultTable">
      <el-table-column
        prop="date"
        label="日期"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
  },
  methods: {
    handleClick(val) {
      this.$emit('handleEdit', val);
    },
  },
};
</script>

<style lang="less">
  .defaultTable {
    td,th{
      text-align: center !important;
    }
    .has-gutter {
      line-height: 100px !important;
    }
}
</style>
