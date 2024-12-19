<template>
  <div class="card">
    <div class="currentTemp">
      <span>{{ $t('current_temp') }}</span>
      <button
        v-if="weatherInfo?.temp?.current"
        class="temp"
        @click="onClickHandler(weatherInfo.temp)"
      >
        {{ weatherInfo.temp.current }} &deg;{{ unit }}
      </button>
    </div>

    <div class="minMaxTemp">
      <div>
        <span>{{ $t('min_temp') }}</span>
        <button
          v-if="weatherInfo?.temp?.minTemp"
          class="temp"
          @click="onClickHandler(weatherInfo.temp)"
        >
          {{ weatherInfo.temp.minTemp }} &deg;{{ unit }}
        </button>
      </div>

      <div>
        <span>{{ $t('max_temp') }}</span>
        <button
          v-if="weatherInfo?.temp?.maxTemp"
          class="temp"
          @click="onClickHandler(weatherInfo.temp)"
        >
          {{ weatherInfo.temp.maxTemp }} &deg;{{ unit }}
        </button>
      </div>
    </div>

    <div v-if="weatherInfo?.condition">
      <span>{{ weatherInfo?.condition?.text }}</span>
      <img :src="weatherInfo?.condition?.icon" :alt="weatherInfo?.condition?.text" />
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'

import { useWeatherStore } from '@/stores/weatherStore'

export default {
  name: 'InfoPanel',
  setup() {
    const weatherStore = useWeatherStore()
    const { weatherInfo, unit } = storeToRefs(weatherStore)

    const onClickHandler = (temps) => {
      weatherStore.convertTemp(temps)
    }

    return { weatherInfo, unit, onClickHandler }
  },
}
</script>

<style lang="scss" scooped>
@import url('./scss/InforPanel.scss');
</style>
