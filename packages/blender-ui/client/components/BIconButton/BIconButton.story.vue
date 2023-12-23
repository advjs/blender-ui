<script lang="ts" setup>
import { svg } from '../../styles/icons'
import BIconButton from './BIconButton.vue'

const icons = Object.keys(svg).map(icon => ({
  icon,
  muted: false,
  hint: icon,
}))
</script>

<template>
  <Story
    title="BIconButton"
  >
    <template v-for="icon in icons" :key="icon.icon">
      <BIconButton
        :icon="icon.icon"
        :muted="icon.muted"
        :hint="icon.hint"
      />
    </template>
  </Story>
</template>
