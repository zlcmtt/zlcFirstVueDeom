<template>
  <div class="error">
    <div class="content">
      <figure>
        <div class="errorImg">
          <img src="../assets/404/404.png" alt="">
        </div>
        <button
          class="errorBack"
          @click="handleBack">返回首页</button>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  methods: {
    handleBack() {
      this.$router.replace({ path: '/' });
    },
  },
};
</script>

<style scoped lang="less">
  .error{
    background: url("../assets/404/bj.png") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;
    .content{
      text-align: center;
      position: fixed;
      top:50%;
      left:50%;
      transform:translateX(-50%) translateY(-50%);
      figure{
        padding: 0;
        .errorImg{
          width: 30rem;
          margin: auto;
          img{
            width: 100%;
          }
        }
        .errorBack{
          padding: 0.4rem 2.5rem;
          text-align: center;
          color: white;
          background-color: transparent;
          border: 1px solid white;
          border-radius: 100px;
          font-size: 0.8rem;
          margin: 20% auto 0;
          cursor: pointer;
        }
      }
    }
  }
</style>
