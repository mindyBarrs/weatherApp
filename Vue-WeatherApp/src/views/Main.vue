<script setup>
import InfoPanel from '@/components/InfoPanel.vue'
import LocationSearch from '@/components/LocationSearch.vue'
import MyLocationBtn from '@/components/MyLocationBtn.vue'
</script>

<template>
  <div class="search"><LocationSearch /> <MyLocationBtn /></div>

  <div><InfoPanel /></div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style lang="scss" scooped>
@import url('./scss/Main.scss');
</style>
