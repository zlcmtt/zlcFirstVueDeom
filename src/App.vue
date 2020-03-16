<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  methods: {
    computeAdaptive() {
      const designWidth = 1920;
      const designHeight = 1080;
      const designFontSize = 20;
      let t;
      this.culScreen(designWidth, designHeight, designFontSize);
      window.onresize = () => {
        t = setTimeout(() => {
          this.culScreen(designWidth, designHeight, designFontSize);
          clearTimeout(t);
        }, 300);
      };
    },
    culScreen(designWidth, designHeight, designFontSize) {
      const scale = designHeight !== 0
        ? Math.min(window.innerWidth / designWidth, window.innerHeight / designHeight)
        : window.innerWidth / designWidth;
      const newSize = (scale * 10000 * designFontSize) / 10000;
      document.documentElement.style.fontSize = `${newSize}px`;
    },
  },
  created() { },
  computed: {},
};
</script>

<style lang="less">
body,
html {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  li{
    list-style: none;
  }
</style>
