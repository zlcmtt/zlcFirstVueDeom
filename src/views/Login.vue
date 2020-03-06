<template>
    <div>
       <el-button  type="success" @click="login">登录</el-button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'login',
  methods: {
    ...mapMutations(['setAuthor']),
    login() {
      const author = 51;
      let name = '';
      switch (author) {
        case 50:
          name = 'daitishen';
          break;
        case 51:
          name = 'liebiao';
          break;
        case 52:
          name = 'guanli';
          break;
        default:
          break;
      }
      this.$router.push({ name });
      this.setAuthor(author);
    },
  },
};
</script>

<style scoped>

</style>
