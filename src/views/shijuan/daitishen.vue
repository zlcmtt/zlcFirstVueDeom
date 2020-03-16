<template>
  <div>
     <Table
       :table-data="currentTableData"
       @handleEdit="handleEdit"
     />
    <Pagination
      :total="tableData.length"
      @changeSize="changeSize"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';

export default {
  name: 'daitishen',
  components: {
    Table,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      tableData: [],
      currentTableData: [],
    };
  },
  created() {
    this.getData();
  },
  activated() {},
  computed: {},
  methods: {
    ...mapMutations(['clearKeepAlive', 'addKeepAlive']),
    handleEdit(val) {
      this.$router.push({ path: `/index/shijuan/daitishen/${val.date}` });
    },
    changeSize(size) {
      this.currentPage = size;
      this.currentTableData = this.tableData.slice((this.currentPage - 1) * 10, this.currentPage * 10);
    },
    async getData() {
      try {
        const { data } = await this.Axios.get('http:127.0.0.1/getListwork');
        this.tableData = data.list;
        this.currentTableData = this.tableData.slice((this.currentPage - 1) * 10, this.currentPage * 10);
      } catch (e) {
        console.log(e);
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== 'details') {
      this.clearKeepAlive('daitishen');
    }
    next();
  },
};
</script>

<style scoped lang="less">
.el-table__body{
  tr{
    cursor: pointer;
  }
}
</style>
