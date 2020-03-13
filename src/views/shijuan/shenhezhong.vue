<template>
      <video-player  class="video-player-box"
                     ref="videoPlayer"
                     :options="playerOptions"
                     :playsinline="true"
                     customEventName="customstatechangedeventname"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)"
                     @statechanged="playerStateChanged($event)"
                     @ready="playerReadied">
      </video-player>
</template>

<script>
import defaultImg from '../../assets/logo.png';

export default {
  name: 'shenhezhong',
  data() {
    return {
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        }],
        poster: defaultImg,
      },
    };
  },
  mounted() {},
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    onPlayerPlay(player) {
      console.log('player play!', player);
    },
    onPlayerPause(player) {
      console.log('player pause!', player);
    },
    playerStateChanged(playerCurrentState) {
      console.log('player current update state', playerCurrentState);
    },
    playerReadied(player) {
      console.log('the player is readied', player);
    },
  },
};
</script>

<style scoped>

</style>
