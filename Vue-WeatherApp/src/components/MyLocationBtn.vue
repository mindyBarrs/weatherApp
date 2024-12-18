<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <button class="myLocationBtn" aria-label="use my location">
    <FontAwesomeIcon :icon="['fas', 'crosshairs']" />
  </button>
</template>

<script>
export default {
  name: 'MyLocationBtn',
}
</script>

<style lang="scss" scooped>
@import url('./scss/MyLocationBtn.scss');
</style>
