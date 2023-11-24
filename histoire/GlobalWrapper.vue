<script lang="ts" setup>
import { css } from '../components/icons'

const globalCSSVars = css()
</script>

<template>
  <div
    class="global-wrapper"
    :style="globalCSSVars"
    overflow="visible"
  >
    <slot />
  </div>
</template>

<style>
.__histoire-render-story:not(.__histoire-render-custom-controls) {
  overflow: visible !important;
}
</style>
