<template>
  <div class="home">
    <cesium-viewer></cesium-viewer>
  </div>
</template>

<script>
import cesiumViewer from '@/components/cesium.vue';

export default {
  name: 'Home',
  components: {
    cesiumViewer,
  },
};
</script>

<style scoped>
</style>
