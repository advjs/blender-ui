<script lang="ts" setup>
const config = useRuntimeConfig()
console.log('useRuntimeConfig', config)
</script>

<template>
  <Story>
    <Meow />

    <h3>Nuxt runtime config</h3>
    <pre>{{ config }}</pre>
    <p data-testid="config">
      {{ config.public.configFromNuxt }}
    </p>
  </Story>
</template>
