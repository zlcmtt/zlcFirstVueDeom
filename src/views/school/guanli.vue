<template>
    <div>
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto" ref="infiniteList" @scroll.passive="onScroll">
        <li v-for="i in count" class="infinite-list-item" :key="i" @click="toDetails(i)">{{ i }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'guanli',
  data() {
    return {
      count: 0,
      scrollTop: 0,
      timeout: null,
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
    toDetails(val) {
      this.$router.push({ path: `/index/school/guanli/${val}` });
    },
    onScroll(e) {
      // 添加防抖
      const { timeout } = this;
      if (timeout !== null) {
        clearTimeout(timeout);
        this.timeout = null;
      }
      this.timeout = setTimeout(() => {
        this.scrollTop = e.target.scrollTop;
      }, 500);
    },
  },
  mounted() {},
  activated() {
    this.$refs.infiniteList.scrollTop = this.scrollTop ;
  },
};
</script>

<style scoped lang="less">
.infinite-list{
  height: 40rem;
  line-height: 4rem;
  margin: 0;
  padding: 0;
  li:nth-child(2n){
       background-color: pink;
     }
  li:nth-child(2n-1){
    background-color: #ccc;
  }
  li{
    cursor: pointer;
  }
}
</style>
