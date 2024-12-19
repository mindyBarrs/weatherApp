<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <button class="myLocationBtn" aria-label="use my location" @click="onClickMyLocation">
    <FontAwesomeIcon :icon="['fas', 'crosshairs']" />
  </button>
</template>

<script>
import { useWeatherStore } from '@/stores/weatherStore'

export default {
  name: 'MyLocationBtn',
  methods: {
    onClickMyLocation() {
      const { setLocation } = useWeatherStore()

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
        },
        (error) => {
          console.log(error.message)
        },
      )
    },
  },
}
</script>

<style lang="scss" scooped>
@import url('./scss/MyLocationBtn.scss');
</style>
