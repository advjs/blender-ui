<script lang="ts" setup>
import { css } from '../components/icons'

const globalCSSVars = css()
</script>

<template>
  <div
    class="global-wrapper"
    :style="globalCSSVars"
  >
    <slot />
  </div>
</template>
