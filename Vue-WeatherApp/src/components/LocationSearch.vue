<template>
  <div class="location-search">
    <label htmlFor="locationSearch">{{ t('search_input.label') }}</label>

    <div class="inputWithBtn">
      <input
        :id="t('search_input.id')"
        :placeholder="t('search_input.placeholder')"
        type="text"
        v-model="location"
      />

      <button @click="weatherStore.getCurrentWeather(location)">{{ t('search_btn') }}</button>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

import { useWeatherStore } from '@/stores/weatherStore'

export default {
  name: 'LocationSearch',
  setup() {
    const { t } = useI18n()

    const location = ref('')
    const weatherStore = useWeatherStore()

    return { t, weatherStore, location }
  },
}
</script>

<style lang="scss" scooped>
@import url('./scss/LocationSeach.scss');
</style>
