<template>
  <div>
    <label htmlFor="locationSearch">{{ t('search_input.label') }}</label>

    <div class="inputWithBtn">
      <input :id="t('search_input.id')" :placeholder="t('search_input.placeholder')" />
      <button>{{ t('search_btn') }}</button>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'LocationSearch',
  setup() {
    const { t } = useI18n()
    return { t }
  },
}
</script>

<style lang="scss" scooped>
@import url('./scss/LocationSeach.scss');
</style>
