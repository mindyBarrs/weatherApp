<template>
  <div class="location-search">
    <label htmlFor="locationSearch">{{ t('search_input.label') }}</label>

    <div class="inputWithBtn">
      <input
        :id="t('search_input.id')"
        :placeholder="t('search_input.placeholder')"
        type="text"
        v-model="weatherLocation"
      />

      <button @click="getCurrentWeather(weatherLocation)">{{ t('search_btn') }}</button>
    </div>

    <span class="error" v-if="error">{{ error }}</span>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useWeatherStore } from '@/stores/weatherStore'

export default {
  name: 'LocationSearch',
  setup() {
    const { t } = useI18n()

    const weatherStore = useWeatherStore()
    const { getCurrentWeather } = weatherStore

    const { location, error } = storeToRefs(weatherStore)

    const weatherLocation = ref('' || location)

    return { t, getCurrentWeather, weatherLocation, error }
  },
}
</script>

<style lang="scss" scooped>
@import url('./scss/LocationSeach.scss');
</style>
