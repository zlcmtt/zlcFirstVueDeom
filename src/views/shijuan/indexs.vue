<template>
    <div>
      <keep-alive :include="keepAliveArr">
         <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'index',
  computed: {
    ...mapState(['keepAliveArr']),
  },
};
</script>

<style scoped>

</style>
